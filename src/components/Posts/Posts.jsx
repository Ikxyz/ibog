import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import { HOST } from "../../config";
import { useAuth } from "../../providers/useAuth";

export default function Posts() {

    const { token } = useAuth();
    const [post, setPost] = useState([]);


    async function fetchPost() {
        const url = HOST + "/blog/posts/20";

        const header = { "Content-Type": "application/json", "Authorization": token };

        const { data } = await fetch(url, { headers: header }).then(e => e.json());



        setPost(data)
    }

    useEffect(() => {
        fetchPost();
    }, []);


    if (!post || post.length === 0) {
        <p>No Post Yet!</p>
    }

    return post.map(({ author, content }) => <Post author_name={author.name} author_username={author.handle} author_img={author.profileImg} content={content} />)




}