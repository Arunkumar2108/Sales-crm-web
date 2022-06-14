import { createStore, compose, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist'
import thunk from "redux-thunk";
import logger from "redux-logger"
import rootReducer from "./reducers/index";
import config from "./config"
let middleware = [], initState = {};

if (config.logger) middleware = [thunk, logger]
else middleware = [thunk]

const composeConfig = () => {
    if (config.environment === "development") {
        return compose(
            applyMiddleware(...middleware),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    }

    // Production Setup
    else {
        return compose(
            applyMiddleware(...middleware),
        )
    }
}

const store = createStore(rootReducer, initState, composeConfig());
const persistor = persistStore(store)

export { store, persistor };