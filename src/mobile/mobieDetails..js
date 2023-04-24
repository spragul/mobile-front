import React from "react";
import { useParams } from "react-router-dom";
import BaseApp from '../sidenavbar/sidebar';
import { useHistory } from "react-router-dom";
import { AppState } from "../provider/provider";

export function MobileDetails() {
    const {mobile} =AppState();
    const { id } = useParams();
    const mobiles = mobile[id];
    const history=useHistory();

    return (
        <BaseApp
            title={"Mobile Details"}
        >
            <div className="mobile-content">
                <div className="mobile-card">
                    <h1>{mobiles.mobileName}</h1>
                    <img src={mobiles.image} alt={mobiles.mobileName} title={mobiles.mobileName} className="image-size"></img>
                    <p>Model:{mobiles.model}</p>
                    <p>price : RS {mobiles.price}</p>
                    <p>Ram : {mobiles.Ram}Gb</p>
                    <p>storage : {mobiles.storage}Gb</p>
                    <p>id:{mobiles.id}</p>
                    <p><button className="btn view-btn"
                        onClick={() => history.push("/")}>
                        Dashboard</button></p>
                </div>
            </div>
        </BaseApp>
    )
}