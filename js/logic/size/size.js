import logicInstance from "../base.js"

const fetchOrderSizes = () => {
    logicInstance.fillTemplateData('http://127.0.0.1:5000/size/', "#sizes-template", "#sizes tbody")
}

const fetchOrderSizesPage = () => {
    logicInstance.fillTemplateData('http://127.0.0.1:5000/size/', "#size-item-template", "#sizes tbody")
}
function loadInformation() {
    fetchOrderSizesPage();
}


window.onload = loadInformation;

export { fetchOrderSizes }
