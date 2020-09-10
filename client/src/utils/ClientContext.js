import React from "react";

const ClientContext = React.createContext({
  categorySelection: "",
  currentUser: ""
});

export default ClientContext;
