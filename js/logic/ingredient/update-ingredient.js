import httpInstance from "../../service/index.js"
import logicInstance from "../base.js"


const fetchIngredientById = async () => {
    let urlParams = new URLSearchParams(window.location.search);
    const _id = urlParams.get('_id');
    let ingredient = await httpInstance.get(`http://127.0.0.1:5000/ingredient/id/${_id}`)
   
    $("#_id").val(ingredient._id);
    $("#name").val(ingredient.name);
    $("#price").val(ingredient.price);

}


let ingredientForm = $("#ingredient-form");
ingredientForm.submit(event => {
    logicInstance.onUpdateSubmit(event, 'ingredient_by_id', `http://127.0.0.1:5000/ingredient/`, '#ingredient-alert')
    window.location.href = '/app/ingredient/ingredients.html';
});


window.onload = fetchIngredientById;