export default class Model {
    set (json) {
      if (json) {
        for (var key in json) {
          if (this.hasOwnProperty(key)) {
            this[key] = json[key];
          }
        }
      }
    }
  }
  
