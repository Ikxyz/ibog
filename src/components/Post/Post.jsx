import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MinBio from "../MinBio/MinBio";
import style from "./Post.module.scss";
import { faHeart, faComment, faCommentAlt, faShare } from "@fortawesome/free-solid-svg-icons"


export default function Post(props) {


     return <>

          <div className={style['post-container']}>
               <MinBio name={props?.author_name || ""} username={props?.author_handle || ""} profilePhoto={props?.author_img || "'"} />
               <p>
                    {props.content}
               </p>

               <ul className={style.post_content}>
                    <li className={style.post_item}><FontAwesomeIcon icon={faHeart} /></li>
                    <li className={style.post_item}>  <FontAwesomeIcon icon={faCommentAlt} /></li>
                    <li className={style.post_item}><FontAwesomeIcon icon={faShare} /></li>

               </ul>

          </div>

     </>


}