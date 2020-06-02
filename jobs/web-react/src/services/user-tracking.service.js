import { BaseService } from "./base.service";

let consumer = () => { };

export class UserTrackingService extends BaseService {
  constructor(apiName, resourcePrefix, config) {
    super(apiName, resourcePrefix, config);

    this.client.interceptors.request.use(
      (request) => {
        request.headers = { ...request.headers, ...consumer() };
        return request;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  baseUrlWithQuery(path) {
    const data = consumer()
    const keys = Object.keys(data)
    const args = keys.map(key => `${key}=${data[key]}`).join('&')
    return `${super.baseUrl()}/${path}?${args}`
  }

  baseUrlWithPath(path) {
    const data = consumer()
    return [super.baseUrl(), path, data.usuario, data.maquina].join('/')
  }
}


UserTrackingService.enableUserTracking = (userDataConsumer) => {
  consumer = () => userDataConsumer();
};