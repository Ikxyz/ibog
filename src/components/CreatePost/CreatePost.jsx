import Button from "../Button/Button"
import style from "./CreatePost.module.scss"

export default function CreatePost() {



     return <>
          <div>
               <h3>What's on your mind</h3>

               <textarea name="post" id="post" cols="30" rows="10"></textarea>


               <Button text="Tweet" type="small" align="start" />

          </div>
     </>
}
