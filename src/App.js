import './App.css';
import LoginForm from "./pages/auth/login/LoginForm";
import {Route, Routes, useNavigate} from "react-router";
import HeaderContainer from "./components/layout/header/header.container";
import SingInForm from "./pages/auth/singIn/SingInForm";
import ExecutorList from "./pages/executor/executorlist";
import HomePage from "./pages/home/home";
import {useDispatch, useSelector} from "react-redux";
import Profile from "./pages/auth/profile/profile";
import CreateReference from "./pages/reference/createReference/createReference";
import Referencelist from "./pages/reference/referencelist";
import {useEffect} from "react";
import BypassSheetlist from "./pages/bypassSheet/bypassSheetlist";
import CreateBypassSheet from "./pages/bypassSheet/createBypassSheet/createBypassSheet";
import ExaminationPage from "./pages/reference/examination/examination";
import {fetchReferenceType} from "./store/action.creators/referenceType";
import {fetchBypassSheet} from "./store/action.creators/bypassSheet";


function App() {
    const dispatch = useDispatch();
    var user = useSelector(state => state.auth)
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchReferenceType());
        dispatch(fetchBypassSheet());
    }, []);

    useEffect(() => {
        if(window.count == 1){
            navigate("/login")
        }
    }, [navigate]);


    return (
        <div className="App">
            <HeaderContainer/>
            <Routes>
                <Route path={'/login'} element={<LoginForm/>}></Route>
                <Route path={'/singin'} element={<SingInForm/>}></Route>
            </Routes>

            {
                user.isLoggedIn ?
                    <Routes>
                        <Route path={'/'} element={<HomePage/>}></Route>
                        <Route path={'/executors'} element={<ExecutorList/>}></Route>
                        <Route path={'/profile'} element={<Profile/>}></Route>
                        <Route path={'/create-reference'} element={<CreateReference/>}></Route>
                        <Route path={'/reference'} element={<Referencelist/>}></Route>
                        <Route path={'/create-bypassSheet'} element={<CreateBypassSheet/>}></Route>
                        <Route path={'/reference/examination'} element={<ExaminationPage/>}>
                            <Route path={':referenceId'} element={<ExaminationPage/>}/>
                        </Route>
                        <Route path={'/bypassSheet'} element={<BypassSheetlist/>}></Route>
                    </Routes>
                    : null
            }
        </div>
    );
}

export default App;
