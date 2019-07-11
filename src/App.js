import React, { Component } from 'react';
import {BrowserRouter,Route,Switch  } from 'react-router-dom';
import Home from './containers/Home/Home';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Aux from './hoc/Aux';

class App extends Component {

  render() {
    return (

       
          <BrowserRouter>   
              <Aux>
              
                <Header/>                

                  <Switch location={this.props.location}>
                     
                        {/* HOME PAGE */}
                        <Route exact  path="/" component={Home}/> 
                      
                  </Switch>  
                                                             
                <Footer/>
              
              </Aux>
          </BrowserRouter>
  
     
    );
  }
}

export default App;
