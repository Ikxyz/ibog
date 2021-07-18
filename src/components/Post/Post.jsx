import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MinBio from "../MinBio/MinBio";
import style from "./Post.module.scss";
import { faHeart as faHeartFilled, faComment, faCommentAlt, faShare } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutlined } from "@fortawesome/free-regular-svg-icons";
import { useAuth } from "../../providers/useAuth";
import { HOST } from "../../config";

export default function Post(props) {

     const { user: { username }, token } = useAuth();

     const [isLiked, setIsLiked] = useState(false);


     async function like() {

          const url = HOST + "/blog/like";

          const payload = { userId: username, postId: props.id };

          const header = { "Content-Type": "application/json", "Authorization": token };

          await fetch(url, { method: "post", body: JSON.stringify(payload), headers: header }).then(e => e.json());

          setIsLiked(!isLiked);
     }

     return <>

          <div className={style['post-container']}>
               <MinBio name={props?.author_name || ""} username={props?.author_handle || ""} profilePhoto={props?.author_img || "'"} />
               <p>
                    {props.content}
               </p>

               <ul className={style.post_content}>
                    <li className={style.post_item}><FontAwesomeIcon onClick={like} icon={isLiked ? faHeartFilled : faHeartOutlined} /></li>
                    <li className={style.post_item}>  <FontAwesomeIcon icon={faCommentAlt} /></li>
                    <li className={style.post_item}><FontAwesomeIcon icon={faShare} /></li>

               </ul>

          </div>

     </>


}