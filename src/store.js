import {applyMiddleware, combineReducers, createStore} from "redux";

import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer"
import AsyncStorage from "@react-native-community/async-storage";
import {persistStore, persistReducer} from "redux-persist";

const persistConfig = {
    key: "root3",
    storage: AsyncStorage
}



const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = createStore(
    persistedReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware)));

export const persistor = persistStore(store);

