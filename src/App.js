import React from 'react';
import './design/base.scss';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <Footer />
      </>

    )
  }
}


export default App;
