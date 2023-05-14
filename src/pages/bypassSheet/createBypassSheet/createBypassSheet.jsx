import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import instance from "../../../store/api";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProduct} from "../../../store/action.creators/product";

const CreateOrderPage = () => {
    var user = useSelector(state => state.auth.user)
    const dispatch = useDispatch();

    // const [customer, setCustomer] = useState(user?.id);
    // const [reference_type, setReferenceType] = useState([]);
    // const [description, setDescription] = useState('');
    // const [count, setCount] = useState(1);
    // const [totalAmount, setTotalAmount] = useState(0);

    const handleSubmit = () => {
        const payload = {
            // customer,
            // products,
            // description,
            // count,
            // total_amount: totalAmount
        };
        instance.post('/api/reference/reference/', payload)
            .then(response => {
                console.log(response.data);
                // здесь можно выполнить перенаправление на страницу заказа или другую страницу
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="container mt-5">
            <h1>Анықтамалық сұрау</h1>
            <form onSubmit={handleSubmit}>
                {/*<div className="form-group">*/}
                {/*    <label htmlFor="products">Өнімдер:</label>*/}
                {/*    {productsList?*/}
                {/*        <select multiple id="products" name="products" className="form-control" onChange={(e) => setProducts(Array.from(e.target.selectedOptions, option => option.value))}>*/}
                {/*            {*/}
                {/*                productsList.map(product => {*/}
                {/*                   return  <option value={product.id}>{product.name}</option>*/}
                {/*                })*/}
                {/*            }*/}
                {/*        </select>*/}
                {/*        : null*/}
                {/*    }*/}

                {/*</div>*/}
                {/*<div className="form-group">*/}
                {/*    <label htmlFor="description">Сипаттама:</label>*/}
                {/*    <textarea id="description" name="description" className="form-control" onChange={(e) => setDescription(e.target.value)}></textarea>*/}
                {/*</div>*/}
                {/*<div className="form-group">*/}
                {/*    <label htmlFor="count">Саны:</label>*/}
                {/*    <input type="number" id="count" name="count" min="1" className="form-control" onChange={(e) => setCount(e.target.value)} />*/}
                {/*</div>*/}
                {/*<div className="form-group">*/}
                {/*    <label htmlFor="totalAmount">Жалпы сома:</label>*/}
                {/*    <input type="number" id="totalAmount" name="totalAmount" min="0" step="0.01" className="form-control" onChange={(e) => setTotalAmount(e.target.value)} />*/}
                {/*</div>*/}
                {/*<button type="submit" className="btn mt-4 btn-primary" >Тапсырыс жасау</button>*/}
            </form>
        </div>
    );
};

export default CreateOrderPage;