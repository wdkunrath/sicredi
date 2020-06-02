import axios from "axios";
import ENV from "@environments";

const getUrl = (url) => url ? `/${url.toString().replace('/', '')}` : null
const findRoute = (apiName) => ENV.BACKEND_ROUTES.find((route) => route.route === apiName)?.url;
const getData = (promise) => promise
  .then((response) => response?.data)
  .catch((error) => Promise.reject(error));

let notifier = (message) => { console.log(message) };

export class BaseService {
  constructor(apiName, resourcePrefix, config) {
    this.client = axios.create(Object.assign({}, {
      timeout: 300000,
      baseURL: findRoute(apiName) + (resourcePrefix || ""),
      headers: { "Content-Type": "application/json" },
    }, config));

    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        const message = error?.response?.data?.message;
        notifier(message || 'Ocorreu um erro desconhecido no servidor');
        return Promise.reject(error);
      }
    );
  }

  baseUrl() {
    return this.client.defaults.baseURL
  }

  get(url, config) {
    return getData(this.client.get(getUrl(url), config));
  }

  post(url, data, config) {
    return this.client.post(getUrl(url), data, config);
  }

  put(url, data, config) {
    return this.client.put(getUrl(url), data, config);
  }

  patch(url, data, config) {
    return this.client.patch(getUrl(url), data, config);
  }

  delete(url, config) {
    return this.client.delete(getUrl(url), config);
  }

}

BaseService.enableGlobalErrorHandling = (errorNotifier) => {
  notifier = errorNotifier;
};
