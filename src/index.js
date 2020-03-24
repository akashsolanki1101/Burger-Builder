import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import orderReducer from './Container/Orders/store/Reducers/Reducer'
import burgerBuilderReducer from './Container/BurgerBuilder/store/Reducers/Reducer'
import contactDataReducer from './Container/ContactData/store/Reducer/Reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store=>next=>action=>{
    console.log("[Middleware] dispatching action",action);
    const result = next(action);
    console.log("[Middleware] next state",store.getState());
    return result;
}

const rootReducer = combineReducers({
    orderReducer  : orderReducer,
    burgerBuilderReducer : burgerBuilderReducer,
    contactDataReducer : contactDataReducer
})

const store = createStore(rootReducer,composeEnhancer(applyMiddleware(logger,thunk)));

const app = (
    <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
