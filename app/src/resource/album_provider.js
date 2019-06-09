import HttpRequest from './http_request'


export default class AlbumProvider extends HttpRequest {
  constructor () {
    super();
    this.CURRENT_RESOURCE = 'albums';
    this.SECONDARY_RESOURCE = 'userId'
  }

  fetchAlbums (userId) {
    return this.fetch('/' + this.CURRENT_RESOURCE + '?' + this.SECONDARY_RESOURCE + '=' + userId);
  }
}

