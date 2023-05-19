import logicInstance from "../base.js"


const fetchBeverages = () => {
    logicInstance.fillTemplateData('http://127.0.0.1:5000/beverage/', "#beverages-template", "#beverages tbody")
}


const fetchOrderBeveragePage = () => {
    logicInstance.fillTemplateData('http://127.0.0.1:5000/beverage/', "#beverage-item-template", "#beverage tbody")
}


window.onload = fetchOrderBeveragePage;

export { fetchBeverages }

