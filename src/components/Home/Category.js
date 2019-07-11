import React from 'react';
import {Link} from "react-router-dom";
const Categories = (props) => {
    
    
    //// Create List with Data    
    let list = props.items.map(function(item){
        
        return(
            <li className="o-col-lg-2 o-col-md-4 o-col-sm-12 u-smallx-margin-bottom" key={item.id}>
               <div className="c-category__item u-display-flex u-flex-column">
                   <img src={item.image} alt={item.title} className="u-smallx-margin-bottom c-category__item__img"/>
                   <h4 className="c-category__item__title">{item.menuType.title}</h4>
               </div> 
            </li>
        );
    })   
    

    
    return(
        <ul className="c-category o-row">
            <React.Fragment>
                
                {list}
                
            </React.Fragment>
        </ul>
    );

}


export default Categories;
