import React, { Component } from 'react';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import Header from './components/headerComponent/header.js';
import Nav from './components/navComponent/nav';
import Footer from './components/footerComponent/footer';
import Blog1 from './components/pages/blog1';
import Blog2 from './components/pages/blog2';
import Blog3 from './components/pages/blog3';


import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      
      <Header />
      
      <div className="row">
      <Route exact path='/Blog1' component={Blog1} />
      <Route exact path='/Blog2' component={Blog2} />
      <Route exact path='/Blog3' component={Blog3} />
      <Nav />
      </div>
      
      <Footer />
      
      </div>
      </Router>
    );
  }
}

export default App;
