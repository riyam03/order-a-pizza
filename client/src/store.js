import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllPizzaReducer } from './reducers/pizzaReducer'
import { cartReducer } from './reducers/cartReducer'
import { loginUserReducer, registerUserReducer } from './reducers/userReducer'
import {placeOrderReducer, getUserOrdersReducer} from './reducers/orderReducer'
const rootReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    cartReducer:cartReducer ,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer ,
    getUserOrdersReducer:getUserOrdersReducer,
})
const cartItem=localStorage.getItem('cartItem')? JSON.parse(localStorage.getItem('cartItem')):[]
const currentUser =localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null
const initialState = {
    cartReducer:{
        cartItems:cartItem
    },
    loginUserReducer:{
        currentUser:currentUser
    }
}
const middleware = [thunk]
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;