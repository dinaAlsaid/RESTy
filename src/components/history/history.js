import React from 'react';

class History extends React.Component{
  constructor(props){
    super(props)
    this.state={
      historyList:[],
    }
  }
  showHistoryList = ()=>{
    let json = JSON.parse(localStorage.getItem('history'));
    console.log(json);
    // let history = json.map((item)=>{return item})
    this.setState({historyList:json});
  }
  render(){
    return(
      <div>
        hahahahahahahahaha
      </div>
    );
  }
}

export default History;

