import React, { useState } from 'react'
import PostItem from '../postitem/PostItem'
import './Post.css'
import { useAuth0 } from "@auth0/auth0-react";
function Post() {
    const [comment, setComment] = useState("");

    const { isAuthenticated } = useAuth0();
    const posts = [];
    const posts1 = {
        upvote: 10,
        image: "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature-825x465.jpg",
        title: "Question about new wallet",
        user: "theindependentonline",
        subreddit: "politics",
        comment_count: 11
    }
    const posts2 = {
        upvote: 20,
        image: "https://icdn.isrgrajan.com/in/2022/11/Virat-Kohli.jpg",
        title: "Virat Kohli always plays amazingly.",
        user: "theindependentonline",
        subreddit: "Sports",
        comment_count: " 30"
    }
    const posts3 = {
        upvote: 15,
        image: "https://hips.hearstapps.com/clv.h-cdn.co/assets/18/02/1515470256-levi-guzman-268866.jpg",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sint.",
        user: "theindependentonline",
        subreddit: "politics",
        comment_count: "15"
    }

    posts.push(posts1, posts2, posts3);
    localStorage.setItem("posts", JSON.stringify(posts));

    const postComment = () => {
        if (comment) {
            const obj = {
                upvote: 0,
                image: "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature-825x465.jpg",
                title: comment,
                user: "theindependentonline",
                subreddit: "general",
                comment_count: 0
            }
            const newpost = JSON.parse(localStorage.getItem("post") || "[]");
            newpost.push(obj);
            localStorage.setItem("post", JSON.stringify(newpost));
            setComment("");
        }
    }

    return (
        <div className='posts'>
            <div className="inputsection">
                <input className='input' placeholder='Create Post' value={comment} onChange={e => setComment(e.target.value)} />
                <button className='btn' onClick={postComment} disabled={!isAuthenticated}>Post</button>
            </div>
            {console.log(comment)}
            {/* {posts.map(post => (
                <PostItem post={post} />
               
            ))} */}
            {
                JSON.parse(localStorage.getItem("posts")).map((e, index) => {
                    return (
                        <PostItem post={e} />
                    )
                })
            }
             { JSON.parse(localStorage.getItem("post")) &&
                JSON.parse(localStorage.getItem("post")).map((e, index) => {
                    return (
                        <PostItem post={e} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default Post
