import React, { createContext, useContext, useEffect, useState } from "react";
import { url } from "../App";

const AppContext = createContext();
const Appprovider = ({ children }) => {
    const [mobile, setMobile] = useState([]);
    const [loadingscreen,setLoadingscreen]=useState("true")
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        const getDetails = async (token) => {
            try {
                const response = await fetch(`${url}`, {
                    method: "GET",
                    headers:{Authorization:`Bearer ${token}`}
                });
                const data = await response.json();
                let setdata = data.mobile
                setMobile(setdata);
                setLoadingscreen("false");
            } catch (error) {
                console.log(error);
            }
        }
        getDetails(token);
    }, [])


    return (
        <AppContext.Provider
            value={{
                mobile,
                setMobile,
                loadingscreen,
                setLoadingscreen
            }}>
            {children}
        </AppContext.Provider>
    )
}
export const AppState = () => {
    return useContext(AppContext)
}
export default Appprovider