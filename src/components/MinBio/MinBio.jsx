import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DefaultPhoto from "../../assets/images/user.jpg"
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"
import style from "./MinBio.module.scss";


export default function MinBio(props) {


     return <>
          <div className={style.bio}>
               <img src={props?.profilePhoto || DefaultPhoto} alt="profile photo" />

               <ul>
                    <li><h3>{props?.name || "Jane Doe"}</h3></li>
                    <li><small>@{props?.username || "janedoe45"}</small></li>
               </ul>

               <span> <FontAwesomeIcon icon={faEllipsisH} /></span>

          </div>
     </>

}