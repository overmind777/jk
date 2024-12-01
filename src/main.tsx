import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./redux/store.ts";
import {Provider} from "react-redux";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </StrictMode>,
)
