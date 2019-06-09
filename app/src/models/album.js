import Model from './model';

export default class Album extends Model {
  
  constructor (json) {
    super();
    this.userId = '';
    this.id = '';
    this.title = '';
        
    if (json) {
      super.set(json);
    }
  }
}