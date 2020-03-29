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
import authReducer from './Container/Auth/store/Reducers/Reducer'

const composeEnhancer = process.env.NODE_ENV==="development" ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null || compose;


const rootReducer = combineReducers({
    orderReducer  : orderReducer,
    burgerBuilderReducer : burgerBuilderReducer,
    contactDataReducer : contactDataReducer,
    authReducer : authReducer
})

const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)));

const app = (
    <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
