import Model from './model';

export default class Photo extends Model {
  
  constructor (json) {
    super();
    this.albumId = '';
    this.id = '';
    this.title = '';
    this.url = '';
    this.thumbnailUrl = [];
        
    if (json) {
      super.set(json);
    }
  }
}