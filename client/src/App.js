import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import ShopInStore from "./pages/ShopInStore";
import ShopByCategory from "./pages/ShopByCategory";
import ClientContext from "./utils/ClientContext";

function App() {
  const [clientState, setClientState] = useState({
    categorySelection: "test",
    currentUser: "",
  })

  function setCategory(category){
    clientState.categorySelection = category
    setClientState({
      ...clientState,
      category
    })
}

  function checkCategorySelection(){
    console.log(clientState.categorySelection)
  }

  return (
    <Router>
      <div className="App">
        <ClientContext.Provider value={clientState}>
          <NavTabs />
          <Route exact path="/" render={ () => <Home checkCategorySelection={checkCategorySelection} setCategory={setCategory} /> } />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Careers" component={Careers} />
          <Route exact path="/Shop-Local" render={ () => <ShopInStore checkCategorySelection={checkCategorySelection} setCategory={setCategory} /> } />
          <Route exact path="/Shop-Category" render={ () => <ShopByCategory checkCategorySelection={checkCategorySelection} setCategory={setCategory} /> } />
        </ClientContext.Provider>
      </div>
    </Router>
  );
}

export default App;
