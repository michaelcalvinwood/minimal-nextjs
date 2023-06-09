'use client';
    
import { Provider } from "react-redux";
import { store } from "../store/configStore";

export function Providers({ children }) {
    return (
    <Provider store={store}>
        {children}
    </Provider>
    );
}
