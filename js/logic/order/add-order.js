import logicInstance from "../base.js"


const postOrder = (event) =>{
    logicInstance.onPostSubmit(event, 'order', 'http://127.0.0.1:5000/order/', "#order-alert")
};

export { postOrder }
