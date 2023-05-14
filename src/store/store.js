import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {makeAutoObservable, toJS} from "mobx";
import AuthService from "../service/AuthService";
import axios from "axios";
import {BASE_URL} from "./api";
import Executor from "./reducers/executor";
import Customer from "./reducers/customer";
import Order from "./reducers/order";
import Product from "./reducers/product";
import Posts from "./reducers/posts";
import Auth from "./reducers/auth";

let reducers = combineReducers({
    executors: Executor, customers: Customer, orders: Order, products: Product, posts: Posts, auth: Auth,
})

export let store = createStore(reducers, compose(applyMiddleware(thunk)))

