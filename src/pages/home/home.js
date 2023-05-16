import React from 'react';
import {Link} from 'react-router-dom';
import PostsList from "../posts/postsList";
import {useSelector} from "react-redux";
import { Trans } from 'react-i18next';


const HomePage = () => {
    const isAuth = useSelector(state => state.auth.isLoggedIn)

    return (
        <div className="container mt-5">

            <h1 className="text-center" style={{ color: "#005590" }}>
                <Trans i18nKey="home.welcomeMessage">
                    Добро пожаловать на Главную страницу!
                </Trans>
            </h1>
            <div className="row justify-content-center mt-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <Trans i18nKey="home.reference">
                                Справка
                            </Trans></h5>
                            <p className="card-text">
                                <Trans i18nKey="home.referenceText">
                                    Запросите справку из университета для обязательных документов.
                                </Trans>
                            </p>
                            <Link className="btn btn-primary" to="reference">
                                <Trans i18nKey="home.btn">
                                    пройти
                                </Trans>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"><Trans i18nKey="home.bypassSheet">
                                Обходные листы
                            </Trans></h5>
                            <p className="card-text">
                                <Trans i18nKey="home.bypassSheetText">
                                    Формализация факельной системы вуза по обязательным документам.
                                </Trans>
                            </p>
                            <Link className="btn btn-primary" to="bypassSheet">
                                <Trans i18nKey="home.btn">
                                    пройти
                                </Trans>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;