import React, { Component } from 'react';

import PartTile from '../components/PartTile'

class PartIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { parts: [] };
  }

  componentDidMount() {
    fetch(`/api/v1/builds/${this.props.params.build_id}/parts`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ parts: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return (
      <div className="padding">
      <PartTile
      key={this.state.parts.id}
      cpu={this.state.parts.cpu}
      motherboard={this.state.parts.motherboard}
      cooler={this.state.parts.cooler}
      gpu={this.state.parts.gpu}
      ram={this.state.parts.ram}
      storage={this.state.parts.storage}
      psu={this.state.parts.psu}
      case={this.state.parts.case}
       />
      </div>
    )
  }
}
export default PartIndex;
