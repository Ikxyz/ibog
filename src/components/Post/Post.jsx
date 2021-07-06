import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MinBio from "../MinBio/MinBio";
import style from "./Post.module.scss";
import { faHeart, faComment, faCommentAlt, faShare } from "@fortawesome/free-solid-svg-icons"


export default function Post() {


     return <>

          <div className={style['post-container']}>
               <MinBio />
               <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In sint sit eaque a facere nulla blanditiis repellat sunt, sequi quod fuga soluta totam fugit asperiores eius rerum vel culpa. Ab?
               </p>

               <ul className={style.post_content}>
                    <li className={style.post_item}><FontAwesomeIcon icon={faHeart} /></li>
                    <li className={style.post_item}>  <FontAwesomeIcon icon={faCommentAlt} /></li>
                    <li className={style.post_item}><FontAwesomeIcon icon={faShare} /></li>

               </ul>

          </div>

     </>


}