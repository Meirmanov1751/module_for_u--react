import React from 'react';
import './header.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../store/action.creators/auth";
import logo from "../../../assets/logo.png"
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import i18next from '../../../i18n';
import LanguageSelector from "../../../LanguageSelector";
import { Trans } from 'react-i18next';


const LoginHeader = (props) => {
    var user = useSelector(state => state.auth.user)
    var dispatch = useDispatch()
    let navigate = useNavigate();

    function logoutHandler() {
        dispatch(logout())
        navigate("/login");
    }

    if (user) {
        return (
            <li className="nav-item">
                <a className="nav-link text-white" onClick={logoutHandler}>
                    <Trans i18nKey="header.exit">
                        Выход
                    </Trans>
                </a>
            </li>
        )
    } else {
        return (
            <li className="nav-item">
                <Link className="nav-link text-white" to="login">
                    <Trans i18nKey="header.login">
                        Вход
                    </Trans>
                </Link>
            </li>
        )
    }
}

const Header = (props) => {
    var user = useSelector(state => state.auth.user)

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light">

                <div className="navbar-collapse" id="navbarNav">
                    <div className="container">
                        <div className="nav-cont-ul">
                            <div className="nav-cont-ul-logo">
                                <div>
                                    {
                                        user ?
                                            <Link className="navbar-brand" to="/">
                                                <img className="navbar-brand logo" src={logo}/>
                                            </Link> :
                                            <img className="navbar-brand logo" src={logo}/>
                                    }
                                </div>
                                <LanguageSelector/>
                                {
                                    user ?
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <Link className="nav-link text-white" to="reference">
                                                    <Trans i18nKey="header.reference">
                                                        Справки
                                                    </Trans>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link className="nav-link text-white" to="bypassSheet">
                                                    <Trans i18nKey="header.bypassSheet">
                                                        Обходные листы
                                                    </Trans>
                                                </Link>
                                            </li>
                                        </ul> :
                                        null}
                            </div>

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"
                                    style={{maxWidth: "200px", marginRight: "10px", overflow: "hidden"}}>
                                    <div className="nav-link text-white">
                                        {
                                            user ? `${user.first_name} ${user.last_name} (${user.role})` : null
                                        }
                                    </div>
                                </li>
                                <LoginHeader user={user}/>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

