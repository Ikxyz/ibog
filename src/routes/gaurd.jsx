import { Redirect } from "react-router-dom";
import { useAuth } from "../providers/useAuth";





export default function Guard(props) {


    const { isLoggerIn } = useAuth();

    console.log(window.location.href);

    if (!isLoggerIn) {
        return <Redirect to="/login" />
    }

    return <>
        {props.children}
    </>

}



