import React from 'react';
import Card from "../Common/Card";
import Flickity from "react-flickity-component"

const options = {
    initialIndex: 0,
    groupCells:true,
    groupCells: 3,
    pageDots: false,
    draggable:1
}
const ListItems = (props) => {
    
    //// Create List with Data    
    
    let list = props.items.map(function(item){

        return(
            <div className="o-col-lg-4 o-col-md-6 o-col-sm-12" key={item.id}>
                <Card data={item} />
            </div>
        );
    })   
    

    
    return(
        <Flickity
        className={'c-carousel'} // default ''
        elementType={'div'} // default 'div'
        options={options} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
        >
        <React.Fragment>
            {list}
        </React.Fragment>
        </Flickity>
    
    );

}


export default ListItems;
