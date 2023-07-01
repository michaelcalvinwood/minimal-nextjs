'use client';
import { Provider } from "react-redux";
import { store } from "../store/configStore";

import { io } from 'socket.io-client';
import * as socketService from './socketService';

const socketURL = `https://echo.instantchatbot.net:6260`;

console.log('hello there');
socketService.setupTheSocket(io, socketURL, store);

export function ProviderRedux({ children }) {
    return (
    <Provider store={store}>
        {children}
    </Provider>
    );
}
