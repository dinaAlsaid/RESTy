import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ' ',
      method: 'GET',
    };
  }
  clickHandler = async (e) => {
    e.preventDefault();
    if(document.getElementById('url').value !== ''){
      await this.setState({ url: document.getElementById('url').value });
    }else{
      await this.setState({results : ['no url defined']})
    }
    fetch(this.state.url,{method:this.state.method})
    .then(raw => raw.json())
    .then((data) => {
      this.props.resultHandler(data);
    });
    document.getElementById('url').value = '';
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
            <input type='text' id='url' autoComplete='false'  data-testid='inputField'/>
            <input type='submit' value='GO'  data-testid='submitBtn'/>

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
