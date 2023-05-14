import React, { useEffect } from 'react';
import { fetchExecutors } from './../../store/action.creators/executor';
import {useDispatch, useSelector} from "react-redux";
import ExecutorItem from './executorItem/ExecutorItem';
import './executor.css'

const ExecutorList = ({ companyId }) => {
    const dispatch = useDispatch();
    const executors = useSelector((state) => state.executors.items);

    useEffect(() => {
        dispatch(fetchExecutors());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchExecutors(companyId));
    }, [dispatch, companyId]);

    return (
        <div>
            <h2>Орындаушылар тізімі</h2>
            {executors.map(executor => (
                <ExecutorItem key={executor.id} executor={executor} />
            ))}
        </div>
    );
};

export default ExecutorList;