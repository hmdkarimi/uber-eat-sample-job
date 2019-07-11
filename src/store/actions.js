///// CERTIFICATE

import Data from "../assets/data/menu";
import DataCitiy from "../assets/data/cities";
const Menu = Data;
const Cities = DataCitiy;
export function fetchHomeContent() {
    return dispatch => new Promise(async (resolve, reject) => {
        
        let home ={};
        

        ////GET RESTAURANT WITH PIZZA MENU TYPE AND DELIVERY
        let pizzaMenu = [];
        Menu.find(obj => {
            
             if(obj.menuType.title.toLowerCase() === "pizza"){
                pizzaMenu.push(obj);
             }  
        })


        ////GET RESTAURANT WITH DELIVERY
        let deliveryMenu = [];
        Menu.find(obj => {
            
             if(obj.isAcceptingDelivery ){
                deliveryMenu.push(obj);
             }  
        })


        ////GET AMERICANS RESTAURANT WITH DELIVERY SERVICE
        let americanDeliveryMenu = [];
        Menu.find(obj => {
            
             if(obj.isAcceptingDelivery && obj.cuisineType.title.toLowerCase() === "american"  ){
                americanDeliveryMenu.push(obj);
             }  
        })


        ///CREATE HOME DATA
        home.pizzaMenu = pizzaMenu;
        home.deliveryMenu = deliveryMenu;
        home.americanDeliveryMenu = americanDeliveryMenu;        
        home.cities = Cities;
        home.menu = Menu;
        return resolve(dispatch({
            type: 'FETCH_HOME',
            data: home
        }));
        
    }).catch(async (err) => {
        ////console.log(err)
        throw err.message;
    });
}
