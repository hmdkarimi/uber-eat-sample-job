import React, { Component } from 'react';
import Nav from '../../components/Header/NavBar';
import Aux from '../../hoc/Aux'


class Header extends Component {

  constructor() {
    super();


  }


  render() {
    return (
      <Aux>


            <header id="header" className="clearfix">  
                <Nav/>           
            </header>
      
      </Aux>
            

    );
  }
}

export default Header;
