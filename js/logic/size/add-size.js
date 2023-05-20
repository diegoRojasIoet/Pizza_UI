import logicInstance from "../base.js"

let sizeForm = $("#size-form");
sizeForm.submit(event => {
    logicInstance.onPostSubmit(event, 'default', 'http://127.0.0.1:5000/size/', "#size-alert")

});
