import React from 'react';
import superagent from 'superagent';
import './form.scss';
import { If, Then } from 'react-if';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ' ',
      method: 'GET',
      reqBody:[],
    };
  }
  clickHandler = async (e) => {
    e.preventDefault();
    if(document.getElementById('errorSec')){
      document.getElementById('errorSec').remove()
    }
    this.createBuffering();

    if(this.state.method !== 'GET'){
      await this.setState({reqBody : document.getElementById('reqBody').value})
    }
    await this.setState({ url: document.getElementById('url').value });
    superagent(`${this.state.method}`,`${this.state.url}`)
    .then((data) => {
      if(this.state.url !== ''){

      }
      this.updateHistory(data.body);
      this.props.resultHandler(data);

    })
    .catch(e=>{
      if(document.getElementById('bufferImg')){
        document.getElementById('bufferImg').remove();
      }
      let error = document.createElement('div');
      error.textContent=e.message;
      error.id='errorSec'
      document.getElementById('output').insertAdjacentElement('afterend',error);
      console.log(e)})
    
    document.getElementById('url').value = '';
    if(this.state.method !== 'GET'){
      document.getElementById('reqBody').value='';
    }

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
    let history;
    let query ={
      url:this.state.url,
      method:this.state.method,
    }
    if(this.state.method !== 'GET'){
      query.body = this.state.reqBody;
    }
    if(!localStorage.getItem('history')){
      history =[];
    }else{
      history = JSON.parse(localStorage.getItem('history'));//suppose array
      
    }
    history.push(query);
    localStorage.setItem('history',JSON.stringify(history));


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
            <button id='GET' value='GET' onClick={this.methodHandler}>GET</button>
            <button id='POST' value='POST' onClick={this.methodHandler}>POST</button>
            <button id='PUT' value='PUT' onClick={this.methodHandler}>PUT</button>
            <button id='DELETE' value='DELETE' onClick={this.methodHandler}>DELETE</button>
          </div>
          <div>
            <input type='text' id='url' placeholder='URL' autoComplete='false' data-testid='inputField' />
            <If condition={this.state.method !== 'GET'}>
              <Then>
              <input type='textarea' id='reqBody' placeholder='Request Body' id='reqBody'/>

              </Then>
            </If>
            <input type='submit' value='GO' data-testid='submitBtn' />
          </div>
        </form>
        <div className='output' id='output'>
          <div>{this.state.method}</div>
          <div data-testid='output'>{this.state.url}</div>
        </div>
        <div id='loading'></div>

      </>
    );
  }
}

export default Form;
