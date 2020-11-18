import React from 'react';
import superagent from 'superagent';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ' ',
      method: 'GET',
      storedQueries:[],
    };
  }
  clickHandler = async (e) => {
    e.preventDefault();
    this.createBuffering();

    await this.setState({ url: document.getElementById('url').value });
    superagent(`${this.state.method}`,`${this.state.url}`)
    .then((data) => {
      this.updateHistory(data.body);
      this.props.resultHandler(data);

    }).catch(e=>{
      if(document.getElementById('bufferImg')){
        document.getElementById('bufferImg').remove();
      }
      // this.props.resultHandler(e);
      console.log(e)})
    
    document.getElementById('url').value = '';
  }
  createBuffering = ()=>{
    let img = document.createElement('img');
    img.setAttribute('src','https://img.wattpad.com/66c61e194d72f389ca320552cd97df4c70f30440/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f624374335030343862465f7a7a673d3d2d3435373737313536382e313464663063336566333937653239663630343833383931363935352e676966');
    img.setAttribute('alt','buffering');
    img.setAttribute('width','20px');
    img.setAttribute('id','bufferImg');
    document.getElementById('loading').appendChild(img);
  }
  updateHistory = async (body)=>{
    await this.setState({storedQueries: JSON.parse(localStorage.getItem('history'))});
    let query = {}
    query.url=this.state.url;
    query.method=this.state.method;
    query.body=body;
    console.log(this.state.storedQueries);
    let previous = this.state.storedQueries? this.state.storedQueries: [];
    previous.push(query);
    await this.setState({storedQueries: previous});
    localStorage.setItem('history',JSON.stringify(this.state.storedQueries));
  }
  methodHandler = async (e) => {
    e.preventDefault();
    await this.setState({ method: e.target.value });

  }
  render() {
    return (
      <>
        <form onSubmit={this.clickHandler} data-testid='submitForm'>
          <div>
            <button value='GET' onClick={this.methodHandler}>GET</button>
            <button value='POST' onClick={this.methodHandler}>POST</button>
            <button value='PUT' onClick={this.methodHandler}>PUT</button>
            <button value='DELETE' onClick={this.methodHandler}>DELETE</button>
          </div>
          <div>
            <input type='text' id='url' autoComplete='false' data-testid='inputField' />
            <input type='submit' value='GO' data-testid='submitBtn' />

          </div>
        </form>
        <div className='output' >
          <div>{this.state.method}</div>
          <div data-testid='output'>{this.state.url}</div>
        </div>
        <div id='loading'></div>

      </>
    );
  }
}

export default Form;
