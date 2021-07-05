
import "./Button.scss";


export default function Button(props) {

     const buttonType = props.type === "small" ? "btn" : "btn-max";
     const buttonAlignment = props.align || "center";

     return <>
          <div style={{ textAlign: buttonAlignment, }}>
               <button className={buttonType + " color"} type="button" >{props?.text || "No Text Set"}</button>
          </div>
     </>
}
