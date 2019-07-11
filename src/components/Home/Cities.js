import React from 'react';
import {Link} from "react-router-dom";
const Cities = (props) => {
    
    
    //// Create List with Data    
    let list = props.items.map(function(item){
        
        return(
            <li className="o-col-lg-3 o-col-md-4 o-col-sm-6 u-medium-margin-bottom" key={item.city}>
               <Link to="/" className="c-cities__item">
                    {item.city}
               </Link> 
            </li>
        );
    })   
    

    
    return(
        <ul className="c-cities o-row">
            <React.Fragment>
                
                {list}
                
            </React.Fragment>
        </ul>
    );

}


export default Cities;
