import React from 'react';

const ExecutorItem = ({ executor }) => {
    return (
        <div className="executor-card container">
            <div className="executor-card__info">
                <h3 className="executor-card__name">{executor.first_name} {executor.last_name}</h3>
                <p className="executor-card__position">{executor.position}</p>
                <p className="executor-card__phone">{executor.phone_number}</p>
            </div>
        </div>
    );
};

export default ExecutorItem;