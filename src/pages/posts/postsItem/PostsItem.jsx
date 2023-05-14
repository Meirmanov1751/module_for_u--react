import React from 'react';

const PostsItem = ({ posts }) => {
    return (
        <div className="executor-card container">
            <div className="executor-card__info">
                <p className="executor-card__position">{posts.title}</p>
                <p className="executor-card__position">{posts.short_description}</p>
                <p className="executor-card__position">{posts.description}</p>
                <p className="executor-card__phone">{posts.created_at} </p>
            </div>
        </div>
    );
};

export default PostsItem;