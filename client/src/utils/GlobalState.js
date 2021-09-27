import React, { createContext, useContext } from "react";
import useProductReducer from "./reducers";
import { createStore, combineReducers } from "redux";
import reducer from "./reducers";

// const StoreContext = createContext();
// const { Provider } = StoreContext;

let store = createStore(useProductReducer);

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: "",
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };

export default store;
