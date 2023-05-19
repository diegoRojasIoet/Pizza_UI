import logicInstance from "../base.js"


const fetchOrdersPage = () => {
    logicInstance.fillTemplateData('http://127.0.0.1:5000/order/', "#order-item-template", "#orders tbody")
}


window.onload = fetchOrdersPage;
