

fetch('http://127.0.0.1:5000/ingredient/')
    .then(response => response.json())
    .then(ingredients => {
        let rows = ingredients.map(element => createIngredientTemplate(element));
        let table = $("#ingredients tbody");
        table.append(rows);
    });


function createIngredientTemplate(ingredient) {
    let template = $("#ingredient-item-template")[0].innerHTML;
    return Mustache.render(template, ingredient);
}

import logicInstance from "../base.js"

const fetchIngredients = () => {
    logicInstance.fillTemplateData('http://127.0.0.1:5000/ingredient/', "#sizes-template", "#sizes tbody")
}

const fetchIngredientsPage = () => {
    logicInstance.fillTemplateData('http://127.0.0.1:5000/ingredient/', "#ingredients-template", "#ingredients tbody")
}
function loadInformation() {
    fetchIngredientsPage();
}


window.onload = loadInformation;

export { fetchIngredients }