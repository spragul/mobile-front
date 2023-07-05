import React, { createContext, useContext, useEffect, useState } from "react";
import { url } from "../App";
const token = sessionStorage.getItem('token');
const AppContext = createContext();
const Appprovider = ({ children }) => {
    const [mobile, setMobile] = useState([]);
    useEffect(() => {
        const getDetails = async (token) => {
            try {
                const response = await fetch(`${url}`, {
                    method: "GET",
                    headers:{Authorization:`Bearer ${token}`}
                });
                const data = await response.json();
                let setdata = data.mobile
                setMobile(setdata);
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
                setMobile
            }}>
            {children}
        </AppContext.Provider>
    )
}
export const AppState = () => {
    return useContext(AppContext)
}
export default Appprovider