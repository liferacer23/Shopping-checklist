import { combineReducers, createStore,applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import itemsReducer from "./ducks/Items";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
    items:itemsReducer
})

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const store = createStore(reducer,{},applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;