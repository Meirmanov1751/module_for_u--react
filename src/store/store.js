import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {makeAutoObservable, toJS} from "mobx";
import AuthService from "../service/AuthService";
import axios from "axios";
import {BASE_URL} from "./api";
import Executor from "./reducers/executor";
import Reference from "./reducers/reference";
import BypassSheet from "./reducers/bypassSheet";
import Product from "./reducers/product";
import Posts from "./reducers/posts";
import Auth from "./reducers/auth";
import ReferenceType from "./reducers/referenceType";

let reducers = combineReducers({
    executors: Executor, reference: Reference, referenceType: ReferenceType,bypassSheet: BypassSheet, products: Product, posts: Posts, auth: Auth,
})

export let store = createStore(reducers, compose(applyMiddleware(thunk)))

