import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/Navbar";
import Home from "./pages/Home";
// import Search from "./components/pages/Search";
// import Discover from "./components/pages/Discover";


function App() {
  return (
    <Router>
    <div className="App">
      <NavTabs />
      <Route exact path="/" component={ Home } />
      {/* <Route exact path="/about" component={ About } /> */}
      {/* <Route exact path="/search" component={ Search } /> */}
      {/* <Route exact path="/discover" component={ Discover } /> */}
    </div>
    </Router>
  );
}

export default App;
