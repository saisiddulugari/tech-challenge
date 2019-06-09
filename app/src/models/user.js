import Model from './model';

export default class User extends Model {
  
  constructor (json) {
    super();
    this.id = '';
    this.name = '';
    this.username = '';
    this.email = '';
    this.address = [];
    this.phone = '';
    this.website = '',
    this.company = []

        
    if (json) {
      super.set(json);
    }
  }
}