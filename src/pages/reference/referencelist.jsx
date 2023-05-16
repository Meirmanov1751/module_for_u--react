import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ReferenceItem from './referenceItem/referenceItem';
import './reference.css'
import {fetchReference} from "../../store/action.creators/reference";
import {Link} from "react-router-dom";
import {fetchReferenceType} from "../../store/action.creators/referenceType";
import { Trans } from 'react-i18next';

const Referencelist = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReference());
        dispatch(fetchReferenceType());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchReferenceType());
    }, []);

    var user = useSelector(state => state.auth.user)
    const referencesdef = useSelector((state) => state.reference.items);
    var referenceForExecutors = referencesdef.filter(reference => reference.status == 'pending')
    var referenceForStudent = referencesdef.filter(reference => reference.student == user.id)
    const referenceTypeList = useSelector((state) => state.referenceType.items);


    return (
        <div className={'container'}>
            <div className={'reference-div'}>
                <h2 className={'reference-title'}>
                    <Trans i18nKey="reference.pageTitle">
                        Мои справки
                    </Trans>
                </h2>
                {user.role == 'student' ?
                    <Link className='reference-btn' to="/create-reference">
                        <Trans i18nKey="reference.btn">
                            Запрос справки
                    </Trans>
                    </Link> :
                    null}
            </div>
            <div className={'m-3 p-1'}>
                {user.role == 'student' ?
                    referenceForStudent.map(reference => (
                        <ReferenceItem key={reference.id} referenceTypeList={referenceTypeList}  references={reference}/>
                    )) : null}

                {user.role == 'executor' ?
                    referenceForExecutors.map(reference => (
                        <Link to={`examination/${reference.id}`}>
                            <ReferenceItem key={reference.id} referenceTypeList={referenceTypeList}  references={reference}/>
                        </Link>
                    )) : null}
            </div>
        </div>
    );
};

export default Referencelist;