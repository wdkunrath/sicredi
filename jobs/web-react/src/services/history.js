import { SessionService } from "./session.service";
import { createBrowserHistory } from "history";

// let authGoBack = true
let pathList = [];

const sessionService = new SessionService();

function getAuthToken() {
  return sessionService.maquina && sessionService.usuario;
}

export const historyObj = {
  history: createBrowserHistory(),
  changingRoute: () => {
    let result = true;

    (() => {
      if (pathList.includes(historyObj.history.location.pathname)) {
        result = true;
      } else {
        result = false;
      }
    })();

    historyObj.history.listen(location => {
      if (pathList.includes(location.pathname)) {
        result = true;
      } else {
        result = false;
      }
    });

    return result;
  },
  routeDefiner: props => {
    if (props !== "/login") {
      if (getAuthToken()) {
        historyObj.history.push("/dashboard");
      } else {
        //TODO: exibir alerta de quabdo falhar
        historyObj.history.push("/login");
      }
    }
  },
  getRouteList: array => {
    pathList = array.filter(item => item.path).map(item => item.path);
  },
};
