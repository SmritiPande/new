import { createContext } from "react";
import { Food_list } from "../assets/assets";

const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const contextValue = {
    Food_list,
  };
  console.log(contextValue);
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
export {StoreContext};
