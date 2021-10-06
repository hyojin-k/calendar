import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import { connectRouter } from 'connected-react-router';

import Calendar from './modules/calendar';

export const history = createBrowserHistory()

// rootreducer
const rootReducer = combineReducers({
    calendar : Calendar,

    router: connectRouter(history),
})

// 미들웨어 준비
const middlewares = [thunk.withExtraArgument({history: history})];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

// redux devTools설정
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

// 미들웨어 묶기
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// 스토어 만들기
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();