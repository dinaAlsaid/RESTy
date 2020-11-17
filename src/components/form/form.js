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
    await this.setState({ url: document.getElementById('url').value });
    superagent(`${this.state.method}`,`${this.state.url}`)
    .then((data) => {
      this.updateHistory(data.body);
      this.props.resultHandler(data);
    }).catch(e=>{console.log(e)})
    // .then(raw => raw.json())
    
    document.getElementById('url').value = '';
  }
  updateHistory = async (body)=>{
    let query = {}
    query.url=this.state.url;
    query.method=this.state.method;
    query.body=body;
    let previous = this.state.storedQueries;
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

      </>
    );
  }
}

export default Form;
