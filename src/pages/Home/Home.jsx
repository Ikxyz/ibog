

import CreatePost from "../../components/CreatePost/CreatePost"
import Post from "../../components/Post/Post"
import Navigation from "../../layout/Navigation/Navigation"
import style from "./Home.module.scss"

export default function Home() {




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


        </div>

    </>

}