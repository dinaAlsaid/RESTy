import React from 'react';
import ReactJson from 'react-json-view';

class Results extends React.Component {
  prettyJson = () => {
    let retObj = {
      Headers : this.props.headers,
      Response: {
        count: this.props.count,
        results: this.props.resArr, 
      }

    }

    return retObj;
  }
  render() {
    return (
      <div >
        <ReactJson src={this.prettyJson()} theme='ashes' enableClipboard='false' />

      </div>
    );

  }

}

export default Results;
