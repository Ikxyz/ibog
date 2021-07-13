import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import style from "./Login.module.scss";
import { Link } from "react-router-dom";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import  {HOST} from "../../config";


export default function Login() {


     const history = useHistory();

     const [credentials,setCredentials] = useState({username:"",password:""})


     function onChange(e) {
          const name = e.target.name;
          const value = e.target.value;
          const data = { ...credentials, [name]: value };
          setCredentials(data);
     }



    async function onLogin(formEvent){

          formEvent.preventDefault();

          try {
               const url = HOST+"/user/login";
      
               const payload = credentials;
     
               const headers = {"content-type":"application/json"}
     
               const result = await fetch(url, { method:"post",body:JSON.stringify(payload),headers }).then(e=>e.json());
     
               alert(result.message);

               localStorage.setItem("token",result.data.token)
               localStorage.setItem("user",JSON.stringify(result.data.user))
     
               history.push("/home");

             } catch (error) {
               alert("Error occurred, check your internet connection and try again");
             }

     }





     return <form onSubmit={onLogin}>
           <div className="container">
          <div className="">

          </div>
          <div className="" style={{ padding: '20px 10px' }}>
               <Logo width={30} height={30} />
               <h1>Login Into Twitter</h1>


               <label htmlFor="username">Username</label>
               <input type="text" name="username" id="username" onChange={onChange } datatype="username" />

               <label htmlFor="password">Password</label>
               <input type="password" name="password" id="password" onChange={onChange } datatype="password" />

               <Button text="Login" isSubmitButton={true} />

               <div className={style.lastSection}>
                    <Link to="#" className={style.link} >Forgot Password?</Link>
                    <span>.</span>
                    <Link to="/register" className={style.link}  >Sign up for Twitter</Link>
               </div>

          </div>
          <div className="">

          </div>
     </div>
     </form>
}
