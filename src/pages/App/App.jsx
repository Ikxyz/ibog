import React from "react";
// import Logo from "../../components/Logo/Logo";

import Login from "../../pages/Login/Login"
import Register from "../../pages/Register/Register"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "../Splash/Splash";
import Home from "../Home/Home";
import AuthProvider from "../../providers/useAuth";
import Guard from "../../routes/gaurd";

export default function App() {



     return <>

          <AuthProvider>



          <Router>

               <Switch>

                    <Route exact path="/">
                         <Splash />
                    </Route>

                    <Route path="/login">
                         <Login />
                    </Route>

                    <Route path="/register">


                         <Register />

                         </Route>

                         <Route path="/home">

                              <Guard>
                                   <Home />
                              </Guard>

                    </Route>

                         <Route path="**">

                              <Guard>
                                   <Home />
                              </Guard>

                    </Route>

               </Switch>



          </Router>

          </AuthProvider>

     </>


}
