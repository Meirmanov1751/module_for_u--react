import React from 'react';
import {Link} from 'react-router-dom';
import PostsList from "../posts/postsList";
import {useSelector} from "react-redux";

const HomePage = () => {
    const isAuth = useSelector(state => state.auth.isLoggedIn)

    return (
        <div className="container mt-5">
            <div className="jumbotron">
                <h1>Коммерциялық ұйым</h1>
                <p className="lead">Біздің сайтқа қош келдіңіз! Біз өзімізге қызметтердің кең спектрін ұсынамыз
                    клиенттер.</p>
                <hr className="my-5"/>
                <p>Біз аймағымыздағы ең жақсы коммерциялық ұйымдардың біріміз. Біздің мақсатымыз - өзімізді қамтамасыз ету
                    жоғары сапалы қызметтері мен өнімдері бар тұтынушылар.</p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h2>Біздің қызметтеріміз</h2>
                    <p>Біз өз клиенттерімізге қызметтердің кең спектрін ұсынамыз. Біздің қызметтерімізге мыналар кіреді:</p>
                    <ul className={"list-group"}>
                        <li className={"list-group-item"}>Кеңес</li>
                        <li className={"list-group-item"}>Маркетингтік зерттеулер</li>
                        <li className={"list-group-item"}>Бағдарламалық жасақтаманы әзірлеу</li>
                        <li className={"list-group-item"}>IT-консалтинг</li>
                        <li className={"list-group-item"}>Жобаны басқару</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h2>Біздің өнімдер</h2>
                    <p>Сонымен қатар біз өз тұтынушыларымызға кең ауқымды өнімдерді ұсынамыз. Біздің өнімдерге мыналар кіреді:</p>      <ul className={"list-group"}>
                        <li className={"list-group-item"}>Бағдарламалық құрал</li>
                        <li className={"list-group-item"}>Жабдық</li>
                        <li className={"list-group-item"}>Кітаптар мен оқулықтар</li>
                        <li className={"list-group-item"}>Компьютер керек-жарақтары</li>
                        <li className={"list-group-item"}>Принтерлер мен сканерлер</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h2>Біз туралы</h2>
                    <p>Біз өз саламыздың көшбасшысымыз және клиенттермен жұмыс істеудің көп жылдық тәжірибесі бар. біздің команда
                        біздің клиенттерге қызмет көрсетуге дайын жоғары білікті мамандардан тұрады
                        жоғары сапалы қызмет көрсету өнімдері. Біз инновациялық компания болуға және оны ұстануға тырысамыз
                        тұтынушыларымызға ең жақсы қызметтер мен өнімдерді ұсыну үшін біздің саладағы трендтер.</p>             </div>
            </div>
            {isAuth ? <PostsList/> : null}
        </div>
    );
};

export default HomePage;