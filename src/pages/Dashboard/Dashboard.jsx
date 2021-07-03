import style from "./Dashboard.module.scss"

export default function Dashboard() {


     return <>

          <div className={style.container}>

               <div className={style.navContainer}>
                    <h2>Navigation</h2>
               </div>
               <div className={style.postContainer}>
                    <h2>Create Post / News Feed</h2>
               </div>
               <div className={style.trendingContainer}>
                    <h2>Trending topic's</h2>
               </div>


          </div>

     </>


}
