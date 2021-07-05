import CreatePost from "../../components/CreatePost/CreatePost"
import Post from "../../components/Post/Post"
import Navigation from "../Navigation/Navigation"
import style from "./Dashboard.module.scss"

export default function Dashboard() {


     return <>

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
               <div className={style.trendingContainer}>

               </div>


          </div>

     </>


}
