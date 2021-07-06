import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import style from "./Login.module.scss";
import { Link } from "react-router-dom"

export default function Login() {

     return <div className="container">
          <div className="">

          </div>
          <div className="" style={{ padding: '20px 10px' }}>
               <Logo width={30} height={30} />
               <h1>Login Into Twitter</h1>


               <label htmlFor="username">Username</label>
               <input type="text" name="username" id="username" datatype="username" />

               <label htmlFor="password">Password</label>
               <input type="password" name="password" id="password" datatype="password" />

               <Button text="Login" />

               <div className={style.lastSection}>
                    <Link to="#" className={style.link} >Forgot Password?</Link>
                    <span>.</span>
                    <Link to="/register" className={style.link}  >Sign up for Twitter</Link>
               </div>

          </div>
          <div className="">

          </div>
     </div>
}
