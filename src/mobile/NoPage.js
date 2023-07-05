import React from "react";
import { useHistory } from "react-router-dom";

export function Nopage() {
    const history = useHistory()
    return (
        <div style={{height:"100vh"}} className="bg-worm">
            <h1>Hai you entered wrong place </h1>
            <p><span style={{fontSize:"200px"}} className="nopage-font">404</span></p>
            <button
            style={{backgroundColor:"green",color:"white",border:"2px solid red",borderRadius:"5px"}}
                onClick={() => history.push("/login")}>
                Home
            </button>
        </div>
    )
}