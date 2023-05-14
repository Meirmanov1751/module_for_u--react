import './App.css';
import LoginForm from "./pages/auth/login/LoginForm";
import {Route, Routes, useNavigate} from "react-router";
import HeaderContainer from "./components/layout/header/header.container";
import SingInForm from "./pages/auth/singIn/SingInForm";
import ExecutorList from "./pages/executor/executorlist";
import CustomerList from "./pages/customer/customerList";
import {useEffect} from "react";
import HomePage from "./pages/home/home";
import {useDispatch, useSelector} from "react-redux";
import OrderList from "./pages/order/orderList";
import ProductList from "./pages/product/productList";
import CreateOrderPage from "./pages/order/CreateOrder/CreateOrder";
import CreateProductPage from "./pages/product/CreateProduct/CreateProduct";
import PostsList from "./pages/posts/postsList";
import Profile from "./pages/auth/profile/profile";

function App() {
    var user = useSelector(state => state.auth)
    let navigate = useNavigate();
    var dispatch = useDispatch()



    useEffect(() => {
        if (user.isLoggedIn) {
            return navigate("/");
        } else {
            return navigate("/login");
        }
    }, [user.isLoggedIn]);
    return (
        <div className="App">
            <HeaderContainer/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}></Route>
                <Route path={'/login'} element={<LoginForm/>}></Route>
                <Route path={'/singin'} element={<SingInForm/>}></Route>
            </Routes>

            {
                user.isLoggedIn ?
                    <Routes>
                        <Route path={'/executors'} element={<ExecutorList/>}></Route>
                        <Route path={'/customers'} element={<CustomerList/>}></Route>
                        <Route path={'/orders'} element={<OrderList/>}></Route>
                        <Route path={'/products'} element={<ProductList/>}></Route>
                        <Route path={'/orders_create'} element={<CreateOrderPage/>}></Route>
                        <Route path={'/products_create'} element={<CreateProductPage/>}></Route>
                        <Route path={'/posts'} element={<PostsList/>}></Route>
                        <Route path={'/profile'} element={<Profile/>}></Route>
                    </Routes>
                    : null
            }
        </div>
    );
}

export default App;
