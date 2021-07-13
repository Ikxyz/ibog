
import { useContext, createContext, useState, useEffect } from "react";


const defaultValue = { token: null, user: null, isLoggerIn: null, logOut: null };


const AuthContext = createContext(defaultValue);


export function useAuth() {

    return useContext(AuthContext);
}



export default function AuthProvider(props) {

    const [token, setToken] = useState("");
    const [user, setUser] = useState({});
    const [isLoggerIn, setIsLoggerIn] = useState(null);

    function logOut() {
        setToken(null);
        setUser(null);
        localStorage.clear();
        window.location.href = "/login";
    }



    const value = { token, user, isLoggerIn, logOut };


    useEffect(() => {
        const _token = localStorage.getItem('token')
        const _user = JSON.parse(localStorage.getItem('user'))
        setToken(_token);
        setUser(_user);
    }, [])

    useEffect(() => {

        if (!token || !user) {
            setIsLoggerIn(false)
        } else {
            setIsLoggerIn(true)
        }

    }, [token, user])


    return <>
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    </>

}





