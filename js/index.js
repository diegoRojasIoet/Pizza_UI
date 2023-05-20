import { fetchOrderSizes } from "./logic/size/size.js";
import { fetchBeverages } from "./logic/beverage/beverage.js";
import { fetchIngredients } from "./logic/ingredient/ingredient.js";
import { postOrder } from "./logic/order/add-order.js";


let orderForm = $("#order-form");
orderForm.submit(event => {
    postOrder(event);
})


function loadInformation() {
    fetchBeverages();
    fetchIngredients();
    fetchOrderSizes();
}


window.onload = loadInformation;