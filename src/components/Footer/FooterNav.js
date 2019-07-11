import React from 'react';
import logo from '../../assets/img/logo2.svg';
import Container from '../../hoc/Container';
const FooterNav = (props) => {

    return(
        <div className="o-container-fluid">
            <nav className="o-row c-footer__nav">
                <div className="o-col-lg-6 o-col-md-6 o-col-sm-12 u-flex-column u-justify-content-between u-medium-margin-bottom-sm">
                    <img src={logo}/>



                </div>

                <div className="o-col-lg-6 o-col-md-6 o-col-sm-12 u-display-flex u-flex-row u-justify-content-start">
                    <ul className="c-footer__nav-menu u-xlarge-margin-right  u-medium-margin-right-sm u-medium-margin-bottom-sm"> 
                        <li>
                            <a href="#">
                            About Uber Eats
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            About Uber Eats
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            About Uber Eats
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            About Uber Eats
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            About Uber Eats
                            </a>
                        </li>
                    </ul>

                    <ul className="c-footer__nav-menu"> 
                        <li>
                            <a href="#">
                            About Uber Eats
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            About Uber Eats
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            About Uber Eats
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            About Uber Eats
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            About Uber Eats
                            </a>
                        </li>
                    </ul>



                </div>
            </nav>
            <div className="u-display-flex u-flex-row o-row u-large-margin-top">
                <p className="o-col-lg-6 o-col-md-6 o-col-sm-12 c-footer__copyright u-medium-margin-bottom-sm">
                    © 2019 Uber Technologies Inc.
                </p>
                <ul className="o-col-lg-6 o-col-md-6 o-col-sm-12 c-footer__nav-menu u-flex-row u-display-flex"> 
                        <li className="u-medium-margin-right u-medium-margin-bottom-sm">
                            <a href="#">                            
                                Privacy Policy
                            </a>
                        </li>
                        <li className="u-medium-margin-right">
                            <a href="#">                            
                            Terms of Use
                            </a>
                        </li>
                        <li className="u-medium-margin-right">
                            <a href="#">                            
                            Pricing
                            </a>
                        </li>

                        
                        
                    </ul>
            </div>
        </div>

    );

}


export default FooterNav;