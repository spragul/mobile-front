import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp from '../sidenavbar/sidebar';
import { AppState } from "../provider/provider";
import { toast } from "react-toastify";
import { url } from "../App";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Loadings, { Loading } from "../Loading/loader";


export default function UserComponent() {
  const { mobile, setMobile,loadingscreen } = AppState();
  const history = useHistory();
  const token =sessionStorage.getItem('token');
  //Delet functionality 
  console.log(mobile)
  const deletemobile = async (idx) => {

    try {
      const response = await fetch(`${url}/mobile/delete/${idx}`, {
        method: "Delete",
        headers:{Authorization:`Bearer ${token}`}
      })
      const data = await response.json();
      const alterList = mobile.filter((mob) => mob.id !== idx);
      setMobile(alterList)
      toast("Mobile Data Deleted")

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <BaseApp
      title="Ragul Mobile Shop">
      <div className="mobile-content">
    {loadingscreen==="true" ? (<Loadings/>):
      (<>  {mobile.map((mobiles, idx) => (
          <div key={idx} className="mobile-card">
            <h1>{mobiles.mobileName}</h1>
            <img src={mobiles.image} className="image-size"></img>
            <p>Model:{mobiles.model}</p>
            <p>price : RS {mobiles.price}</p>
            <p>Ram : {mobiles.Ram}Gb</p>
            <p>storage : {mobiles.storage}Gb</p>

            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button id="edit-btn" onClick={() => history.push(`/mobile/edit/${mobiles.id}`)}> Edit</Button>
              <Button id="view-btn" onClick={() => history.push(`/mobile/${idx}`)}>View </Button>
              <Button id="del-btn" onClick={() => deletemobile(mobiles.id)}>Delete </Button>
            </ButtonGroup>
          </div>
        ))}
        </>)}
      </div>
    </BaseApp>
  )
}




