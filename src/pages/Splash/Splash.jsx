import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import style from "./Splash.module.scss";
import Logo from "../../components/Logo/Logo";
import { useAuth } from "../../providers/useAuth";


export default function Splash() {

     const history = useHistory();

     const { isLoggerIn } = useAuth();

     useEffect(() => {
          console.log(isLoggerIn)

          if (!isLoggerIn) {
               return history.push("/login");
          }

          history.push("/home");

     }, [isLoggerIn]);

     return <>
          <div className={style.center}>
               <Logo />
          </div>

     </>
}
