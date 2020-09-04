import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import ShopInStore from "./pages/ShopInStore";

function App() {
  return (
    <Router>
    <div className="App">
      <NavTabs />
      <Route exact path="/" component={ Home } />
      <Route exact path="/Contact" component={ Contact } />
      <Route exact path="/Careers" component={ Careers } />
      <Route exact path="/Shop-Local" component={ ShopInStore } />
    </div>
    </Router>
  );
}

export default App;
