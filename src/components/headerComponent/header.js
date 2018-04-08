import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
     <header>
     
     Fortnite Adventures
     
     <div className="img">
     <img src={process.env.PUBLIC_URL + '/fly.jpg'}  />
     
     </div>
     </header>
    );
  }
}

export default Header;
