import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateOrderPage = () => {
    const [customer, setCustomer] = useState(null);
    const [products, setProducts] = useState([]);
    const [description, setDescription] = useState('');
    const [count, setCount] = useState(1);
    const [totalAmount, setTotalAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            customer,
            products,
            description,
            count,
            total_amount: totalAmount
        };
        axios.post('/api/orders/', payload)
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
            <h1>Создать заказ</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="customer">Заказчик:</label>
                    <input type="text" id="customer" name="customer" className="form-control" onChange={(e) => setCustomer(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="products">Продукты:</label>
                    <select multiple id="products" name="products" className="form-control" onChange={(e) => setProducts(Array.from(e.target.selectedOptions, option => option.value))}>
                        <option value="1">Продукт 1</option>
                        <option value="2">Продукт 2</option>
                        <option value="3">Продукт 3</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Описание:</label>
                    <textarea id="description" name="description" className="form-control" onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="count">Количество:</label>
                    <input type="number" id="count" name="count" min="1" className="form-control" onChange={(e) => setCount(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="totalAmount">Итоговая сумма:</label>
                    <input type="number" id="totalAmount" name="totalAmount" min="0" step="0.01" className="form-control" onChange={(e) => setTotalAmount(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Создать заказ</button>
            </form>
        </div>
    );
};

export default CreateOrderPage;