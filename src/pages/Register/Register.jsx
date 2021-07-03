import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import style from "./Register.module.scss";


export default function Register() {



     return <div className="container">
          <div className="">

          </div>
          <div className="" style={{ padding: '20px 10px' }}>
               <Logo width={30} height={30} />
               <h1>Create Account</h1>


               <label htmlFor="name">Name</label>
               <input type="text" name="name" id="name" datatype="name" />

               <label htmlFor="username">Username</label>
               <input type="text" name="username" id="username" datatype="username" />

               <label htmlFor="password">Password</label>
               <input type="password" name="password" id="password" datatype="password" />

               <label htmlFor="confirmPassword">Confirm Password</label>
               <input type="password" name="confirmPassword" id="confirmPassword" datatype="password" />

               <Button text="Creat Account" />

               <div className={style.lastSection}>
                    <a className={style.link} href="#">Already Have an Account?</a>
                    <span>.</span>
                    <a href="#" className={style.link}>Sign In</a>
               </div>

          </div>
          <div className="">

          </div>
     </div>
}
