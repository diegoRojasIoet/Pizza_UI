/**
 * Set the id to query the order
 */


import logicInstance from "../base.js"


const fetchOrderDetail = () => {
    let urlParams = new URLSearchParams(window.location.search);
    let _id = urlParams.get('_id');
    logicInstance.fillTemplateData(`http://127.0.0.1:5000/order/id/${_id}`, "#order-template", "#order")
}

window.onload = fetchOrderDetail();

