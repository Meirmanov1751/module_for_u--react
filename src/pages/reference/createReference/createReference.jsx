import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import instance from "../../../store/api";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {Trans} from "react-i18next";
import {useEffect} from "react";
import {fetchReference} from "../../../store/action.creators/reference";
import {fetchReferenceType} from "../../../store/action.creators/referenceType";


const CreateOrderPage = () => {
    const dispatch = useDispatch();
    var user = useSelector(state => state.auth.user)
    let navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchReferenceType());
    }, []);


    const [info, setInfo] = useState();
    const [status, setStatus] = useState('pending');
    const [student, setStudent] = useState(user.id)
    const [reference_type, setReferenceType] = useState("");
    const referenceTypeList = useSelector((state) => state.referenceType.items);

    const handleSubmit = () => {
        const payload = {
            reference_type: reference_type[0],
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
                    <textarea id="description" name="description" className="form-control" onChange={(e) => setInfo(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="description"><Trans i18nKey="reference.restype">
                        Вид спривки:
                    </Trans></label>
                    {referenceTypeList ?
                        <select multiple id="products" name="products" className="form-control"
                                onChange={(e) => setReferenceType(Array.from(e.target.selectedOptions, option => option.value))}>
                            {
                                referenceTypeList.map(referenceType => {
                                    return <option value={referenceType.id}>{referenceType.title}</option>
                                })
                            }
                        </select>
                        : null
                    }             </div>
                <button type="submit" className="btn mt-4 btn-primary" >Тапсырыс жасау</button>
            </form>
        </div>
    );
};

export default CreateOrderPage;