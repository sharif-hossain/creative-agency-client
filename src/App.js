import React, { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdAdmin from './components/Admin/AddAdmin/AdAdmin';
import AddService from './components/Admin/AddService/AddService';
import AllService from './components/Admin/AddService/AllService/AllService';
import AddOrder from './components/Client/AddOrder/AddOrder';
import ServiceList from './components/Client/AddOrder/ServiceList/ServiceList';
import Review from './components/Client/Review/Review';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import * as firebase from "firebase/app";
import firebaseConfig from './components/Login/firebase.config';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard/addOrder/:id">
            <AddOrder></AddOrder>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addOrder">
            <AddOrder></AddOrder>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/ServiceList">
            <ServiceList></ServiceList>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/Review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/AllService">
            <AllService></AllService>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/make-admin">
            <AdAdmin></AdAdmin>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    
  );
}

export default App;
