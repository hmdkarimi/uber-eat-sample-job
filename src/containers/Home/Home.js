import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
// import MenuData from "../../assets/data/menu.json";
import { connect } from 'react-redux';
import {fetchHomeContent}  from '../../store/actions';


///IMPORT HOME COMPONENTS
import SearchBar from "../../components/Home/SearchBar";
import Title from "../../components/Common/Title";
import ProductList from "../../components/Common/List";
import Divider from "../../components/Common/Divider";
import PromotionItems from "../../components/Home/PromotionItems";
import CitiesItems from "../../components/Home/Cities";
import CategoryList from "../../components/Home/Category";
class Home extends Component {

  constructor(props){

    super(props);
    this.state={}

  }
  componentDidMount() {
      
      ///Fetch Data for HOME          
      this.props.fetchHomeData();
 
      
  }

  _handleWaypointEnter = () =>{
      
    document.getElementsByClassName("c-nav__search")[0].classList.remove("active")

  }
  _handleWaypointLeave = () =>{
    
    document.getElementsByClassName("c-nav__search")[0].classList.add("active")

  }

  render() {
    if(this.props.home.length < 1){
      return <h1>Loading</h1>;
    }
    console.log(this.props.home.pizzaMenu)
    return (


      <Aux>
        <section className="u-display-flex u-flex-row u-justify-content-center u-align-items-center c-searchbar u-xlarge-padding-vertical u-large-margin-bottom">
            <SearchBar _handleWaypointEnter={this._handleWaypointEnter} _handleWaypointLeave={this._handleWaypointLeave}/>
        </section>
    
        <section className="u-display-flex u-flex-column o-container-fluid">
          <Title text="Food Delivery in San Francisco Bay Area"/>
          <div className="o-row">
            <ProductList items={this.props.home.deliveryMenu}/>
          </div>
          <Divider/>
        </section>

        <section className="u-display-flex u-flex-column o-container-fluid">
          
            <PromotionItems/>
          
          <Divider/>
        </section>

        <section className="u-display-flex u-flex-column o-container-fluid">
          <Title text="Pizza Delivery in San Francisco Bay Area"/>
          <div className="o-row">
            <ProductList items={this.props.home.pizzaMenu}/>
          </div>
          <Divider/>
        </section>
        
        <section className="u-display-flex u-flex-column o-container-fluid">
          <Title text="Cities Near You"/>            
          <CitiesItems items={this.props.home.cities}/>            
          <Divider/>
        </section>


        <section className="u-display-flex u-flex-column o-container-fluid">
          <Title text="Americans Delivery in San Francisco Bay Area"/>
          <div className="o-row">
            <ProductList items={this.props.home.americanDeliveryMenu}/>
          </div>
          <Divider/>
        </section>

        <section className="u-display-flex u-flex-column o-container-fluid">
          <Title text="Explore Popular Categories"/>
          
            <CategoryList items={this.props.home.americanDeliveryMenu}/>
            
        </section>

      </Aux>
    
     
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHomeData: function () {
      dispatch(fetchHomeContent());
     },
    }
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
