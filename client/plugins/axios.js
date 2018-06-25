import * as axios from 'axios';
import jsonp from './jsonp';

let options = {};
// The server-side needs a full url to works
if (process.server) {
  // options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

let instance = axios.create(options);

instance.jsonp = jsonp;

export default instance;
