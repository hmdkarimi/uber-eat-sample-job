import React from 'react';
import img1 from "../../assets/img/p1.svg";
import img2 from "../../assets/img/p2.svg";
import img3 from "../../assets/img/p3.svg";
import ios from "../../assets/img/ios.svg";
import android from "../../assets/img/android.svg";

const PromotionItems = (props) => {
    
    
    

    
    return(

        <div className="o-row">
            <div className="o-col-lg-4 o-col-md-6 o-col-sm-12">
                <div className="c-promotion-card u-display-flex u-flex-column">
                    <img className="c-promotion-card__img u-smallx-margin-bottom" src={img1} alt=""/>
                    <h2 className="c-promotion-card__title u-small-margin-bottom">
                        There's more to love in the app.
                    </h2>
                    <ul className="u-display-flex u-flex-row u-align-items-center c-promotion-card__dl-app u-small-margin-top">
                        <li className="u-small-margin-right">
                            Get the app:
                        </li>
                        <li className="u-small-margin-right u-display-flex u-flex-row u-align-items-center">
                            <img src={android} className="u-small-margin-right"/>
                            Android
                        </li>
                        <li className="u-small-margin-right u-display-flex u-flex-row u-align-items-center">
                            <img src={ios} className="u-small-margin-right"/>
                            iPhone
                        </li>
                    </ul>
                </div>
            </div>

            <div className="o-col-lg-4 o-col-md-6 o-col-sm-12">
                <div className="c-promotion-card u-display-flex u-flex-column">
                    <img className="c-promotion-card__img u-smallx-margin-bottom" src={img2} alt=""/>
                    <h2 className="c-promotion-card__title u-small-margin-bottom">
                        Your restaurant, delivered
                    </h2>
                    <a className="u-primary-text-color u-small-margin-top" href="/" target="_blank">
                        Add your restaurant
                    </a>
                </div>
            </div>

            <div className="o-col-lg-4 o-col-md-6 o-col-sm-12">
                <div className="c-promotion-card u-display-flex u-flex-column">
                    <img className="c-promotion-card__img u-smallx-margin-bottom" src={img3} alt=""/>
                    <h2 className="c-promotion-card__title u-small-margin-bottom">
                        Deliver the Eats
                    </h2>
                    <a className="u-primary-text-color u-small-margin-top" href="/" target="_blank">
                        Sign up to deliver
                    </a>
                </div>
            </div>
        </div>
    
    );

}


export default PromotionItems;
