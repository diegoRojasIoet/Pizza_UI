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
    
    let beverages_id = [];
    $.each($("input[name='beverages-id']"), function (el) {
        beverages_id.push($(this).val());
    });

    let calculate_total_beverages = () =>{
        let ids=[]
        for (let i=0; i < beveragesQuantity.length; i++){
            for (let j=0; j< beveragesQuantity[i]; j++){
                ids.push(parseInt(beverages_id[i]))
            }
        }
        return ids
    }

    const beverages = calculate_total_beverages();

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
  ingredient_by_id: () => {
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
        let rows = response.map(element => this.#createItemTemplate(templateName, element));
        let table = $(tbodyTitle);
        table.append(rows);

    }


    async #postObject(url, object, typeAlert){
      let response = await httpInstance.post(url, object)
      if (response)
        this.#showNotification(typeAlert)
    }

    async #putObject(url, object, typeAlert){
      let response = await httpInstance.put(url, object)
      if (response)
        this.#showNotification(typeAlert)
    }

    onPostSubmit(event, dataStrategy, url, typeAlert) {
      let item = getDataStrategy[dataStrategy]();
      this.#postObject(url, item, typeAlert);
      event.preventDefault();
      event.currentTarget.reset();
    }
    
    onUpdateSubmit(event, dataStrategy, url, typeAlert) {
      debugger
      let item = getDataStrategy[dataStrategy]();
      debugger
      this.#putObject(url, item, typeAlert);
      event.preventDefault();
      event.currentTarget.reset();
    }
  }
  
  let logicInstance = Object.freeze(new Logic());
  
  export default logicInstance;
