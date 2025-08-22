import { Provider } from "react-redux";

import { createStore,type StateSchema } from "@/app/store";

interface StateProviderProps{
        children:React.ReactNode;
        initialState?:StateSchema;
}

const StoreProvider = (props:StateProviderProps) => {
        const {children,initialState}=props;
        const store=createStore(initialState)
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default StoreProvider