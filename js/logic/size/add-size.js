import logicInstance from "../base.js"


addEventListener("submit", (event) => {
    logicInstance.onSubmit(event, 'default', 'http://127.0.0.1:5000/size/', "#size-alert")

});
