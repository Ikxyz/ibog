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

               <ul>
                    <li><FontAwesomeIcon icon={faHeart} /></li>
                    <li>  <FontAwesomeIcon icon={faCommentAlt} /></li>
                    <li><FontAwesomeIcon icon={faShare} /></li>

               </ul>

          </div>

     </>


}