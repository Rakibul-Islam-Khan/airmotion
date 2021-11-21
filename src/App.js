import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import app from "./Firebase/firebase.init";
import About from "./Pages/About/About";
import AddProduct from "./Pages/AddProduct/AddProduct";
import AddReview from "./Pages/AddReview/AddReview";
import Contact from "./Pages/Contact/Contact";
import Explore from "./Pages/Explore/Explore";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Notfound from "./Pages/Notfound/Notfound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase";
import Signup from "./Pages/Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";

app()

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard/>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/addproduct">
              <AddProduct />
            </Route>
            <Route path="/addreview">
              <AddReview />
            </Route>
            <PrivateRoute path="/purchase/:productId">
              <Purchase />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
