import React from 'react';
import Aux from "../../hoc/Aux";

///IMPORT ASSETS
import imgLeft from "../../assets/img/s1.svg";
import imgRight from "../../assets/img/s2.svg";
const SearchBar = (props) => {

    return(

        <Aux>
            <div className="u-display-flex u-flex-column u-justify-content-center u-align-items-center">
                <img src={imgLeft} className="c-searchbar__left-img"/>
                <img src={imgRight} className="c-searchbar__right-img"/> 
                <h1 className="u-medium-margin-bottom c-searchbar__title">Restaurants you love, delivered to you</h1>
                <form className="c-searcbar__form u-display-flex u-flex-row u-flex-column-sm">
                    <input type="text" className="u-smallx-margin-right"/>
                    <button type="submit" className="c-btn c-btn--primary c-btn--normal u-capitalize">find food</button>
                </form>
            </div>
        </Aux>
        

    );

}


export default SearchBar;