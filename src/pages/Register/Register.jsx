import { useState } from "react"
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import style from "./Register.module.scss";
import { Link, useHistory } from "react-router-dom";
import { HOST } from "../../config";


export default function Register() {

     const [user, setUser] = useState({ name: "", username: "", password: "", confirmPassword: "" });

     const history = useHistory();

    async function onRegister(formEvent) {
          formEvent.preventDefault();

        try {
          const url =HOST+ "/user/register";

          const name = user.name.split(" ");

          const payload = {
               ...user,
               email: user.username + "@gmail.com",
               firstName: name[0] ?? "-",
               lastName: name[1] ?? name[0] ?? "-"
          }

          const headers = {"content-type":"application/json"}

          delete payload['name'];
          delete payload['confirmPassword'];

          console.log(payload)

          const result = await fetch(url, { method:"post",body:JSON.stringify(payload),headers }).then(e=>e.json());

          alert(result.message);

          history.push("/login");
        } catch (error) {
          alert("Error occurred creating account, check your internet connection and try again");
        }

     }

     function onChange(e) {
          const name = e.target.name;
          const value = e.target.value;
          const data = { ...user, [name]: value };
          setUser(data);
     }



     return <form onSubmit={onRegister}>
          
          <div className="container">
               <div className="">

               </div>
               <div className="" style={{ padding: '20px 10px' }}>
                    <Logo width={30} height={30} />
                    <h1>Create Account</h1>


                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={onChange} datatype="name" required />

                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onChange={onChange} datatype="username" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={onChange} datatype="password" required />

                    <label htmlFor="confirmPassword">Confirm Password  {user.password !== user.confirmPassword ? <strong style={{ color: "red" }}>Password does not match</strong> : ''}</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" onChange={onChange} datatype="password" required />

                    <Button text="Creat Account" isSubmitButton={true} />

                    <div className={style.lastSection}>
                         <Link to="/login" className={style.link} >Already Have an Account?</Link>
                         <span>.</span>
                         <Link to="/login" className={style.link}>Sign In</Link>
                    </div>

               </div>
               <div className="">

               </div>   </div>
     </form>

}
