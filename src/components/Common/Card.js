import React from 'react';
import Img from "../../assets/img/1.jpg"

const Card = (props) => {

    return(

        <div className="c-card u-display-flex u-flex-column">
            <img className="c-card__img u-smallx-margin-bottom" alt={props.data.title} src={props.data.image}/>
            <h3 className="u-capitalize u-small-margin-bottom c-card__title u-display-block u-capitalize u-regular-weight">{props.data.title}</h3>
            <ul className="c-card__info u-display-flex u-small-margin-bottom u-flex-row u-flex-wrap">
                <li>• {props.data.mealType.title}</li>
                <li>• {props.data.menuType.title} </li>
                <li>• {props.data.cuisineType.title}  </li>           
            </ul>
            <div className="u-display-flex u-flex-row u-flex-wrap c-card__tags">
                <div className="c-card__tag">
                  {props.data.preparation}-{Number(props.data.preparation)+Number(props.data.delivery)} min
                </div>

                <div className="c-card__tag">
                  {props.data.rate}
                  <i className="fa fa-star u-small-margin-left"></i>
                </div>

            </div>
        </div>

    );

}


export default Card;