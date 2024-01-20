import React from "react";

const UserContext=React.createContext('Dishu');// it can have a default value

const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}