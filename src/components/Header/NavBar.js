import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.svg";



const NavBar = (props) => {

    return(

        <nav className="u-small-padding-vertical c-nav">
            <div className="o-container-fluid u-display-flex u-flex-row u-align-items-center u-justify-content-between">
                <div className="u-display-flex u-flex-row u-align-items-center">
                    <Link to="/">
                        <img src={logo} className="c-nav__logo"/>
                    </Link>
                    <form className="c-nav__search u-large-margin-left u-display-none-sm">
                        <input type="text" className="c-nav__search-input" placeholder="Enter delivery address"/>
                    </form>
                </div>

                <Link className="c-nav__link" to="/">
                    Sign up
                </Link>
            </div>
        </nav>

    );

}


export default NavBar;