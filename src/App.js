import React from 'react';
import './design/base.scss';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      headers:'no headers',
      count:'',
      results:[],
    }
  }
  resultHandler = async (res)=>{
    // console.log('hello from ',this);.results,data.count
    await this.setState({count:res.count, results:res.results, headers:res.headers});
    console.log(this.state.results);
  }
  render() {
    return (
      <>
        <Header />
        <Form resultHandler={this.resultHandler}/>
        <Results resArr ={this.state.results} count={this.state.count} headers={this.state.headers}/>
        <Footer />
      </>

    )
  }
}


export default App;
