import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
     <nav>
     Navigation
     <ol>
     <li>
     <Link to="/Blog1">April 2nd, 2018</Link>
     </li>
     <li>
     <Link to="/Blog2">April 3rd, 2018</Link>
     </li>
     <li>
     <Link to="/Blog3">April 4th, 2018</Link>
     </li>
     </ol>
     
     </nav>
    );
  }
}

export default Nav;