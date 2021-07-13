import { useState } from "react";
import Button from "../Button/Button"
import style from "./CreatePost.module.scss"
import { HOST } from "../../config";
import { useAuth } from "../../providers/useAuth";

export default function CreatePost() {

     const [post, setPost] = useState({ content: "" });

     const { token, user } = useAuth();


     function onChange(e) {
          const name = e.target.name;
          const value = e.target.value;
          const data = { ...post, [name]: value };
          setPost(data);
     }


     async function sendPost() {

          if (!post.content) return;

          const url = HOST + "/blog/post";
          const payload = { content: post.content, author: user.username };

          const header = { "Content-Type": "application/json", "Authorization": token };

          const result = await fetch(url, { method: "post", body: JSON.stringify(payload), headers: header }).then(e => e.json());

          console.log(result.data);

          alert(result.message);




     }

     return <>
          <div>
               <h3>What's on your mind</h3>

               <textarea name="content" id="content" onChange={onChange} cols="30" rows="10"></textarea>


               <Button text="Tweet" type="small" align="start" onClick={sendPost} />

          </div>
     </>
}
