/**
 * Set the id to query the order
 */

let urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');


import logicInstance from "../base.js"


const fetchOrderDetail = (_id) => {
    logicInstance.fillTemplateData(`http://127.0.0.1:5000/order/id/${_id}`, "#order-template", "#order")
}

window.onload = fetchOrderDetail(_id);

