import React from 'react';
import './design/base.scss';
import { Route, Router, Switch } from 'react-router-dom';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js';
import History from './components/history/history.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: '',
      count: '',
      results: [],
    }
  }
  resultHandler = (res) => {
    if (res.body) {
      this.setState({
        count: res.body.count,
        results: res.body.results,
        headers: res.headers
      });
    } else {
      this.setState({
        count: '',
        results: [],
        headers: '',
      });

    }
  }

  render() {
    return (
      <>
          {console.log("this.props form",this.props)}
        <Header />
        <Switch>
          <Route exact path="/">

            <Form resultHandler={this.resultHandler} />
            <Results resArr={this.state.results}
              count={this.state.count}
              headers={this.state.headers} />

          </Route>
          <Route path="/history">

            <History />
            
          </Route>
        </Switch>
        <Footer />
      </>

    )
  }
}


export default App;
