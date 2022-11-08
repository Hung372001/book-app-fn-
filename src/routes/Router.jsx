import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DanhSach from '../Pages/DanhSach';
import Home from '../Pages/Home';

const Routes = () => {
  return (
    <Switch>
       
      <Route path="/" exact component={Home} />
      <Route path="/Home" exact component={Home} />
      <Route path="/:list/:category/:category1/:category2/" exact component={DanhSach} />
      <Route path="/:list/:category/:category1" exact component={DanhSach} />
      <Route path="/:list/:category" exact component={DanhSach} />
      <Route path="/:list/" exact component={DanhSach} />
    </Switch>
  )
}

export default  Routes;