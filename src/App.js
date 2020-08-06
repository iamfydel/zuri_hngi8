import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navigation/Navigation/nav";
import Footer from "./components/navigation/Footer/footer";
import Contact from "./components/contact/contact";

import { pageurl } from "./utils/constants";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={pageurl.CONTACT} component={Contact}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
