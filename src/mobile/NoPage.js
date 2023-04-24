import React from "react";
import { useHistory } from "react-router-dom";

export function Nopage() {
    const history = useHistory()
    return (
        <div className="bg-worm">
            <h1>Hai you entered wrong place </h1>
            <p><span className="nopage-font">404</span></p>
            <button
                onClick={() => history.push("/")}>
                Home
            </button>
        </div>
    )
}