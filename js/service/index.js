let instance

class Http {
    constructor() {
      if (instance) {
        throw new Error("New instance cannot be created!!");
      }
      instance = this;
    }
    async get(url) {
        const response = await fetch(url)
        return response.json();
      }
    async post(url, object){
      debugger
        const res = await fetch(url, {
                              method: 'POST',
                              body: JSON.stringify(object),
                              headers: {
                                  "Content-Type": "application/json; charset=utf-8",
                              },
                          });
        return res.json();
    }

  
    
  }
  
  let httpInstance = Object.freeze(new Http());
  
  export default httpInstance;