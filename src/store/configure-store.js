import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root-reducer';
 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
// const initialState = {
//     profiles,
//     executions: [],
// };
 
const store = createStore(
    rootReducer,
    {},
    composeEnhancer(applyMiddleware(thunk)),
);
 
export default store;