import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DanhSach from '../Pages/DanhSach';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Home" exact component={Home} />
      <Route path="/DanhSach/:category/:category1/:category2/" exact component={DanhSach} />
      <Route path="/DanhSach/:category/:category1" exact component={DanhSach} />
      <Route path="/DanhSach/:category" exact component={DanhSach} />
      <Route path="/DanhSach/" exact component={DanhSach} />
     
      <Route path="/login/" exact component={Login} />
      <Route path="/register/" exact component={Register} />
    </Switch>
  )
}

export default  Routes;