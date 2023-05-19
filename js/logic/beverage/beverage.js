import logicInstance from "../base.js"

// fetch('http://127.0.0.1:5000/beverage/')
//     .then(response => response.json())
//     .then(beverages => {
//         let rows = beverages.map(element => createIngredientTemplate(element));
//         let table = $("#beverage tbody");
//         table.append(rows);
//     });


// function createIngredientTemplate(ingredient) {
//     let template = $("#beverage-item-template")[0].innerHTML;
//     return Mustache.render(template, ingredient);
// }

const fetchBeverages = () => {
    debugger;
    logicInstance.fillTemplateData('http://127.0.0.1:5000/beverage/', "#beverages-template", "#beverages tbody")
}

const fetchOrderBeveragePage = () => {
    logicInstance.fillTemplateData('http://127.0.0.1:5000/beverage/', "#beverage-item-template", "#beverage tbody")
}

function loadInformation() {
    fetchOrderBeveragePage();
}


window.onload = loadInformation;

export { fetchBeverages }

