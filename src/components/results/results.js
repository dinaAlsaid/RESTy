import React from 'react';
import ReactJson from 'react-json-view';
import { If, Then, Else } from 'react-if';

class Results extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isReady:false,
    }
  }
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
  componentDidUpdate(){
    document.getElementById('bufferImg').remove();
  }
  render() {
    return (
      <div id='results'>
        <If condition={this.props.resArr !== [] && this.props.headers !=='' && this.props.count!==''}>
          <Then>
          <ReactJson src={this.prettyJson()} theme='ashes' enableClipboard='false' />
          </Then>
          <Else>
            <div>No results</div>
          </Else>
        </If>

      </div>
    );

  }

}

export default Results;
