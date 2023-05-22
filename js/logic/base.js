import httpInstance from "../service/index.js"

let instance

const getDataStrategy = {
  default: () => {
		return{
			name: $("input[name='name']").val(),
			price: $("input[name='price']").val(),
		}
    },
  order: () => {
    let ingredients = [];
    $.each($("input[name='ingredients']:checked"), function (el) {
        ingredients.push(parseInt($(this).val()));
    });
    
    let beveragesQuantity = [];
    $.each($("input[name='beverages']"), function (el) {
        beveragesQuantity.push($(this).val());
    });
    beveragesQuantity = beveragesQuantity.map(n => n!==""? parseInt(n):0)
    
    let beveragesId = [];
    $.each($("input[name='beverages-id']"), function (el) {
        beveragesId.push($(this).val());
    });

    let calculateTotalBeverages = () =>{
        let ids=[]
        for (let i=0; i < beveragesQuantity.length; i++){
            for (let j=0; j< beveragesQuantity[i]; j++){
                ids.push(parseInt(beveragesId[i]))
            }
        }
        return ids
    }

    const beverages = calculateTotalBeverages();

    return {
        client_name: $("input[name='name']").val(),
        client_dni: $("input[name='dni']").val(),
        client_address: $("input[name='address']").val(),
        client_phone: $("input[name='phone']").val(),
        size_id: $("input[name='size']:checked").val(),
        ingredients,
        beverages
    };
  },

  ingredientById: () => {
    return {
      _id: $("input[id='_id']").val(),
      name: $("input[id='name']").val(),
      price: $("input[id='price']").val()
    };
  }
  
}

class Logic {
    constructor() {
      if (instance) {
        throw new Error("New instance cannot be created!!");
      }

      instance = this;
    }
    

    #createItemTemplate(templateName, item) {
        let template = $(templateName)[0].innerHTML;
        return Mustache.render(template, item);
    }

    
    #showNotification(typeAlert) {
      let alert = $(typeAlert);
      alert.toggle();
      setTimeout(() => alert.toggle(), 5000);
    }


    async fillTemplateData(url, templateName, tbodyTitle) {
        let response = await httpInstance.get(url);
        let table = $(tbodyTitle);

        const rows = Array.isArray(response)
        ? response.map(element => this.#createItemTemplate(templateName, element))
        : [this.#createItemTemplate(templateName, response)];
        table.append(rows);

        return response

    }


    async #sendRequest(httpMethodFunc, typeAlert) {
      let response = await httpMethodFunc
      if (response)
        this.#showNotification(typeAlert)
    }
  

    #onSubmit(event, dataStrategy, url, httpMethodFunc, typeAlert) {
      let item = getDataStrategy[dataStrategy]();
      this.#sendRequest(httpMethodFunc(url,item), typeAlert);
      event.preventDefault();
      event.currentTarget.reset();
    }


    onPostSubmit(event, dataStrategy, url, typeAlert) {
      this.#onSubmit(event, dataStrategy, url,httpInstance.post, typeAlert)
    }

    
    onUpdateSubmit(event, dataStrategy, url, typeAlert) {
      this.#onSubmit(event, dataStrategy, url,httpInstance.put, typeAlert) 
    }
  }
  
  let logicInstance = Object.freeze(new Logic());
  
  export default logicInstance;
