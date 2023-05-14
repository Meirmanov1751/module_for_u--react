import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PostsItem from './postsItem/PostsItem';
import './posts.css'
import {fetchPosts} from "../../store/action.creators/posts";

const PostsList = ({companyId}) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.items);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchPosts(companyId));
    }, [dispatch, companyId]);

    return (<div>
            <h2>Жаналықтар</h2>
            {posts.map(posts => (<PostsItem key={posts.id} posts={posts}/>))}
        </div>);
};

export default PostsList;