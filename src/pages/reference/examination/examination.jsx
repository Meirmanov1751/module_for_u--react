import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import instance from "../../../store/api";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchReference} from "../../../store/action.creators/reference";
import {fetchReferenceType} from "../../../store/action.creators/referenceType";
import {useNavigate} from "react-router";
import {Trans} from "react-i18next";

const ExaminationPage = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchReference());
        dispatch(fetchReferenceType());
    }, []);

    const references = useSelector((state) => state.reference.items);
    const {referenceId} = useParams();
    const reference = references.find(r => r.id == referenceId);
    const referenceTypeList = useSelector((state) => state.referenceType.items);

    const [reference_type, setReferenceType] = useState("");
    const [status, setStatus] = useState();

    const handleSubmit = () => {
        const payload = {
            reference_type: reference_type[0],
            status: status
        };

        instance.patch(`/api/reference/reference/${reference.id}/`, payload)
            .then(response => {
                console.log(response.data);
                navigate("/reference")
                // Здесь можно выполнить перенаправление на страницу заказа или другую страницу
            })
            .catch(error => {
                console.error(error);
            });
        navigate("/reference");
    };

    return (
        <div className="container mt-5">
            <h1><Trans i18nKey="reference.title">
                Справка
            </Trans> №{reference.id}</h1>
            <div className={'d-flex'}>
                <h3 style={{textAlign: 'left'}}><Trans i18nKey="reference.req">
                    Запрос
                </Trans>:</h3>
                <h3 style={{textAlign: 'left', margin: '0 25px'}}>{reference.info}</h3>
            </div>

            <form onSubmit={handleSubmit}>
                {/*<div className="form-group">*/}
                {/*    <label htmlFor="description">Анықтама түрі:</label>*/}
                {/*    {referenceTypeList ?*/}
                {/*        <select multiple id="products" name="products" className="form-control"*/}
                {/*                onChange={(e) => setReferenceType(Array.from(e.target.selectedOptions, option => option.value))}>*/}
                {/*            {*/}
                {/*                referenceTypeList.map(referenceType => {*/}
                {/*                    return <option value={referenceType.id}>{referenceType.title}</option>*/}
                {/*                })*/}
                {/*            }*/}
                {/*        </select>*/}
                {/*        : null*/}
                {/*    }             </div>*/}
                <button type="submit" className="btn mt-4 btn-primary btn-danger m-3"
                        onClick={(e) => {
                            setStatus('rejected')
                        }}>Отклонить
                </button>
                <button type="submit" className="btn mt-4 btn-primary btn-success m-3"
                        onClick={(e) => setStatus('approved')}>Подтвердить
                </button>

            </form>
        </div>
    );
};

export default ExaminationPage;