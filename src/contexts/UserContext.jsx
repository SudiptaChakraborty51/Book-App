import { createContext, useContext } from "react";
import { BookContext } from "./BookContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { userData } = useContext(BookContext);

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
};
