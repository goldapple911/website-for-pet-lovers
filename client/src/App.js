import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import ShopInStore from "./pages/ShopInStore";
import ShopByCategory from "./pages/ShopByCategory";
import ClientContextProvider from './utils/ClientContext';


function App() {
  return (
    <Router>
      <div className="App">
        <ClientContextProvider>
          <NavTabs />
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Shop-Local" component={ShopInStore} />
          <Route exact path="/Careers" component={Careers} />
          <Route exact path="/Shop-Category" component={ShopByCategory} />
        </ClientContextProvider>
      </div>
    </Router>
  );
}

export default App;
