import React, { Component } from 'react';
import {HashRouter,Route,Switch  } from 'react-router-dom';
import Home from './containers/Home/Home';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Aux from './hoc/Aux';

class App extends Component {

  render() {
    return (

       
          <HashRouter>   
              <Aux>
              
                <Header/>                

                  <Switch location={this.props.location}>
                     
                        {/* HOME PAGE */}
                        <Route   path="/" component={Home}/> 
                      
                  </Switch>  
                                                             
                <Footer/>
              
              </Aux>
          </HashRouter>
  
     
    );
  }
}

export default App;
