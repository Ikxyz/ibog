import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DefaultPhoto from "../../assets/images/user.jpg"
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"
import style from "./MinBio.module.scss";


export default function MinBio(props) {


     return <>
          <div className={style.bio}>

               <img className={style.min_bio_img} src={props?.profilePhoto || DefaultPhoto} alt="profile photo" />

               <ul className={style.min_bio_ul}>
                    <li>
                         <h3 className={style.min_bio_h3}>{props?.name || "Jane Doe"}</h3>
                    </li>
                    <li>
                         <small className={style.min_bio_small}>
                              @{props?.username || "janedoe45"}
                         </small>
                    </li>
               </ul>

               <span > <FontAwesomeIcon icon={faEllipsisH} /></span>

          </div>
     </>

}