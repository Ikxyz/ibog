import React from "react";
// import Logo from "../../components/Logo/Logo";
import CreatePost from "../../components/CreatePost/CreatePost"
import Post from "../../components/Post/Post"
import Navigation from "../../layout/Navigation/Navigation"
import style from "./App.module.scss"
import Login from "../../pages/Login/Login"
import Register from "../../pages/Register/Register"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "../Splash/Splash";

export default function App() {



     return <>

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

                         <div className={style.container}>

                              <div className={style.navContainer}>
                                   <Navigation />
                              </div>
                              <div className={style.postContainer}>
                                   <CreatePost />
                                   <div style={{ "margin": "10% 0px", overflow: "auto", maxHeight: "70vh" }}>
                                        <Post />
                                        <Post />
                                        <Post />
                                        <Post />
                                        <Post />
                                        <Post />
                                        <Post />
                                   </div>
                              </div>


                         </div>

                    </Route>

               </Switch>



          </Router>

     </>


}
