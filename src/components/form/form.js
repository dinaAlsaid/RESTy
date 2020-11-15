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
  clickHandler = (e) => {
    e.preventDefault();
    this.setState({ url: document.getElementById('url').value });
    document.getElementById('url').value = ' ';
  }
  methodHandler = (e) => {
    e.preventDefault();
    this.setState({ method: e.target.value });

  }
  render() {
    return (
      <>
        <form>
          <div>
            <button value='GET' onClick={this.methodHandler}>GET</button>
            <button value='POST' onClick={this.methodHandler}>POST</button>
            <button value='PUT' onClick={this.methodHandler}>PUT</button>
            <button value='DELETE' onClick={this.methodHandler}>DELETE</button>
          </div>
          <div>
            <input type='text' id='url' autoComplete='false' />
            <input type='submit' value='submit' onClick={this.clickHandler} />

          </div>
        </form>
        <div className='output'>
          {this.state.method} {this.state.url}
        </div>

      </>
    );
  }
}

export default Form;
