import React from "react";
import { useHistory } from "react-router-dom";

//import { useHistory, useParams } from "react-router-dom";

export default function BaseApp({ title, children }) {
    const history = useHistory();
    return (
        <div>
            <div>
                <div className="nav-styles">
                    <span>
                        <button
                            className="nav-buttons"
                            onClick={() => history.push("/")}
                        >Dashboard</button>
                    </span>
                    <span>
                        <button
                            className="nav-buttons"
                            onClick={() => history.push("/addmobile")}
                        >Add New Mobile</button>
                    </span>

                </div>
                <div className="title">{title}</div>
            </div>

            <div className="childred ">
                {children}
                <footer>
                    contact us
                    <div>email : Ragulmobile@gmail.com</div>
                    <div>phone : 9788652355</div>
                </footer>

            </div>


        </div>
    )
}