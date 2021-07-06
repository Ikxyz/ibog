import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import style from "./Register.module.scss";
import { Link } from "react-router-dom";


export default function Register() {



     return <form  >
          <div className="container">
               <div className="">

               </div>
               <div className="" style={{ padding: '20px 10px' }}>
                    <Logo width={30} height={30} />
                    <h1>Create Account</h1>


                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" datatype="name" required />

                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" datatype="username" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" datatype="password" required />

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" datatype="password" required />

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
