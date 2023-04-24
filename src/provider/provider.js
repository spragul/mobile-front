import React, { createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext();
const Appprovider = ({ children }) => {
    const [mobile, setMobile] = useState([]);

    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await fetch("https://mobile-back.onrender.com", {
                    method: "GET"
                });
                const data = await response.json();
                let setdata = data.mobile
                setMobile(setdata);
            } catch (error) {
                console.log(error);
            }
        }
        getDetails();
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