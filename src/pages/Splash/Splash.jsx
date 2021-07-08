import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import style from "./Splash.module.scss";
import Logo from "../../components/Logo/Logo";


export default function Splash() {

     const history = useHistory();

     useEffect(() => {
          setTimeout(() => {
               // window.location.href = "./login";
               history.push("/login", { name: "Jane Doe" });
          }, 3000)
     }, [])

     return <>
          <div className={style.center}>
               <Logo />
          </div>

     </>
}
