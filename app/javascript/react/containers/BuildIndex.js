import React, { Component } from 'react';

import BuildTile from '../components/BuildTile'

class BuildIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { builds: [] };
  }

  componentDidMount() {
    fetch('/api/v1/builds')
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
      this.setState({ builds: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return (
      <div className="index-page-css">
        <div>
          <div>
            <BuildTile builds={this.state.builds} />
          </div>
        </div>
      </div>
    )
  }
}
export default BuildIndex;
