import HttpRequest from './http_request'


export default class PhotoProvider extends HttpRequest {
  constructor () {
    super();
    this.CURRENT_RESOURCE = 'photos';
    this.SECONDARY_RESOURCE = 'albumId'
  }

  fetchPhotos (albumId) {
    return this.fetch('/' + this.CURRENT_RESOURCE + '?' + this.SECONDARY_RESOURCE + '=' + albumId);
  }
}

