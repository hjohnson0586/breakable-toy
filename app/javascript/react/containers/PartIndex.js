import React, { Component } from 'react';

import PartTile from '../components/PartTile'

class PartIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { parts: [] };
  }

  componentDidMount() {
    fetch(`/api/v1/builds/${this.props.params.id}`)
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
      <div>
        <PartTile parts={this.state.parts} />
      </div>
    )
  }
}
export default PartIndex;
