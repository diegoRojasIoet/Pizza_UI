import logicInstance from "../base.js"


const fetchIngredients = () => {
    logicInstance.fillTemplateData('http://127.0.0.1:5000/ingredient/', "#ingredients-template", "#ingredients tbody")
}


const fetchIngredientsPage = () => {
    logicInstance.fillTemplateData('http://127.0.0.1:5000/ingredient/', "#ingredient-item-template", "#ingredients tbody")
}


function loadInformation() {
    fetchIngredientsPage();
}


window.onload = loadInformation;

export { fetchIngredients }