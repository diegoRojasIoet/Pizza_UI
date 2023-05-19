import httpInstance from "../../service/index.js"
import logicInstance from "../../service/index.js"

const getIngredientId = () => {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('_id');
}

const fetchIngredientById = async () => {
    const _id = getIngredientId();
    let ingredient = await httpInstance.get(`http://127.0.0.1:5000/ingredient/id/${_id}`)
   
    $("#_id").val(ingredient._id);
    $("#name").val(ingredient.name);
    $("#price").val(ingredient.price);

}

addEventListener('submit',async (event) => {
    const _id = getIngredientId();
    debugger;
    await logicInstance.onPutSubmit(event, 'ingredient_by_id', `http://127.0.0.1:5000/ingredient/id/${_id}`, '#ingredient-alert')
    window.location.href = '/app/ingredient/ingredients.html';

})

// function putIngredient(ingredient) {

//     fetch('http://127.0.0.1:5000/ingredient/', {
//         method: 'PUT',
//         body: JSON.stringify(ingredient),
//         headers: {
//             "Content-Type": "application/json; charset=utf-8",
//         },
//     })
//         .then(res => res.json())
//         .then(res => showNotification());


// }

/**
 * Get the form and submit it with fetch API
 */
// let ingredientForm = $("#ingredient-form");
// ingredientForm.submit(event => {

//     let ingredient = getIngredientData();
//     putIngredient(ingredient);

//     event.preventDefault();
//     event.currentTarget.reset();
//     window.location.href = '/app/ingredient/ingredients.html';
// });

/**
 * Gets the ingredient data with JQuery
 */
// function getIngredientData() {
//     return {
//         _id: $("input[id='_id']").val(),
//         name: $("input[id='name']").val(),
//         price: $("input[id='price']").val()
//     };
// }

/**
 * Shows a notification when the ingredient is accepted
 */
// function showNotification() {
//     let ingredientAlert = $("#ingredient-alert");
//     ingredientAlert.toggle();
//     setTimeout(() => ingredientAlert.toggle(), 5000);
// }


window.onload = fetchIngredientById;