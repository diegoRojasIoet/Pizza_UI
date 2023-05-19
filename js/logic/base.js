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
        ingredients.push($(this).val());
    });

    return {
        client_name: $("input[name='name']").val(),
        client_dni: $("input[name='dni']").val(),
        client_address: $("input[name='address']").val(),
        client_phone: $("input[name='phone']").val(),
        size_id: $("input[name='size']:checked").val(),
        ingredients
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

    onSubmit(event, dataStrategy, url, typeAlert) {
		debugger
		let item = getDataStrategy[dataStrategy]();
		this.#postObject(url, item, typeAlert);
		event.preventDefault();
		event.currentTarget.reset();
    }
  }
  
  let logicInstance = Object.freeze(new Logic());
  
  export default logicInstance;
