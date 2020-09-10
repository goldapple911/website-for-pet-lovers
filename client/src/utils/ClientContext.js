import React, { createContext, useState } from "react";

export const ClientContext = createContext();

const ClientContextProvider = (props) => {
  const [category, setCategory] = useState("initialState")
  const [currentUser, setCurrentUser] = useState("initialUserState")

  return (
    <ClientContext.Provider value={{ category, currentUser }}>
      {props.children}
    </ClientContext.Provider>
  );
}

export default ClientContextProvider;
