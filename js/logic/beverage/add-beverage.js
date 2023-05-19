import logicInstance from "../base.js"


addEventListener("submit", (event) => {
    logicInstance.onPostSubmit(event, 'default', 'http://127.0.0.1:5000/beverage/', "#size-alert")

});
