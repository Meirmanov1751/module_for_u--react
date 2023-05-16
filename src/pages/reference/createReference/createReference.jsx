import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import instance from "../../../store/api";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {Trans} from "react-i18next";


const CreateOrderPage = () => {
    var user = useSelector(state => state.auth.user)
    let navigate = useNavigate();

    const [info, setInfo] = useState();
    const [status, setStatus] = useState('pending');
    const [student, setStudent] = useState(user.id)

    const handleSubmit = () => {
        const payload = {
            student,
            info,
            status,
        }
        instance.post('/api/reference/reference/', payload)
            .then(response => {
                console.log(response.data);

                // здесь можно выполнить перенаправление на страницу заказа или другую страницу
            })
            .catch(error => {
                console.error(error);
            });
        navigate("/reference");
    };

    return (
        <div className="container mt-5">
            <h1><Trans i18nKey="reference.btn">
                Запрос справки
            </Trans></h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="description">Анықтама түрі:</label>
                    <textarea id="description" name="description" className="form-control" onChange={(e) => setInfo(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn mt-4 btn-primary" >Тапсырыс жасау</button>
            </form>
        </div>
    );
};

export default CreateOrderPage;