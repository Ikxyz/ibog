
import "./Button.scss";


export default function Button(props) {

     const buttonType = props.isSubmitButton === true ? "submit":"button";
     const buttonStyle = props.type === "small" ? "btn" : "btn-max";
     const buttonAlignment = props.align || "center";

     return <>
          <div style={{ textAlign: buttonAlignment, }}>
               <button className={buttonStyle + " color"} type={buttonType} >{props?.text || "No Text Set"}</button>
          </div>
     </>
}
