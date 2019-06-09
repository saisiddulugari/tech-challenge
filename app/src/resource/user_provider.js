import HttpRequest from './http_request'


export default class UserProvider extends HttpRequest {
  constructor () {
    super();
    this.CURRENT_RESOURCE = 'users';
  }

  fetchUsers () {
    return this.fetch('/' + this.CURRENT_RESOURCE);
  }
}

