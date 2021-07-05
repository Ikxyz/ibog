import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import style from "./Navigation.module.scss";
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import MinBio from "../../components/MinBio/MinBio";

export default function Navigation() {

     return <>
          <div className={style.navbar} >
               <Logo width="30" />
               <ul>
                    <li className={style.navItem}> <FontAwesomeIcon icon={faHome} /> Home </li>
                    <li className={style.navItem}> <FontAwesomeIcon icon={faHashtag} /> Explore </li>
                    <li className={style.navItem}> <FontAwesomeIcon icon={faBell} /> Notifications </li>
                    <li className={style.navItem}> <FontAwesomeIcon icon={faEnvelope} /> Messages </li>
                    <li className={style.navItem}> <FontAwesomeIcon icon={faBookmark} /> Bookmarks </li>
                    <li className={style.navItem}> <FontAwesomeIcon icon={faList} /> List </li>
                    <li className={style.navItem}> <FontAwesomeIcon icon={faUser} /> Profile </li>
                    <li className={style.navItem}> <FontAwesomeIcon icon={faEllipsisH} /> More </li>

               </ul>

               <Button text="Tweet" />

               <div className={style.minBio}><MinBio />
               </div>
          </div>

     </>
}
