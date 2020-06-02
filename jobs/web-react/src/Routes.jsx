import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteWithLayout } from '@components';
import Inside from './layout/Inside';
import Outside from './layout/Outside';
import {NotFound,SignUp, SignIn, ListDragon } from '@views';


const routes = [
  // public routes
  { component: SignIn, exact: true, layout: Outside, path: '/', title: 'SignIn' },
  { component: SignUp, exact: true, layout: Outside, path: '/signup', title: 'SignUp' },
  { component: ListDragon, exact: true, layout: Outside, path: '/listdragon', title: 'ListDragon' },
  { component: NotFound, exact: true, layout: Outside, path: '*', title: 'Página não Encontrada' },
 
]

export default class Routes extends React.Component {
  mapRoutes() {
    return routes.map((route, key) =>
      <RouteWithLayout key={key} path={route.path} component={route.component} exact={route.exact} layout={route.layout} />
    )
  }

  render() {
    return (
      <Switch>
        {this.mapRoutes()}
      </Switch>
    )
  }
}
