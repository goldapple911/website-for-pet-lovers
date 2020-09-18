import React, { createContext, useState } from "react";

export const ClientContext = createContext();

const ClientContextProvider = (props) => {
  const [clientState, setClientState] = useState({
    category: "Category State Unset",
    currentUser: "User State Unset",
    loggedIn: false
  })

  const changeCategory = (category) => {
    setClientState({...clientState, category})
  }

  return (
    <ClientContext.Provider value={{ clientState, changeCategory }}>
      {props.children}
    </ClientContext.Provider>
  );
}

export default ClientContextProvider;
