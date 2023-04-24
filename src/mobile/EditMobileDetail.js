import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import BaseApp from '../sidenavbar/sidebar';
import { AppState } from '../provider/provider';


const EditMobile = () => {
  const { mobile, setMobile } = AppState();
  const [mobileName, setMobileName] = useState("");
  const [idx, setIdx] = useState("");
  const [image, setImage] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [Ram, setRam] = useState("");
  const [storage, setStorage] = useState("");

  const { id } = useParams();
  const history = useHistory()
  const selectedmobile = mobile.find((mob) => mob.id === id);

  useEffect(() => {
    setIdx(selectedmobile.id)
    setMobileName(selectedmobile.mobileName)
    setImage(selectedmobile.image)
    setModel(selectedmobile.model)
    setPrice(selectedmobile.price)
    setRam(selectedmobile.Ram)
    setStorage(selectedmobile.storage)

  }, []);

  //
  const updateMobile = async () => {
    // step 1 : collecting new data
    const editIndex = mobile.findIndex(per => per.id === id)
    //chaged data in the input field
    const editedmobileData = {
      id: idx,
      mobileName,
      image,
      model,
      price,
      Ram,
      storage
    }
    // try {
    //   const response = await fetch(`https://mobile-back.onrender.com/mobile/edit/${id}`, {
    //     method: "PUT",
    //     body: JSON.stringify(editedmobileData),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   const data = await response.json();
    //   console.log(data);

    //   mobile[editIndex] = data;
    //   setMobile([...mobile]);
    //   history.push("/");

    // } catch (error) {
    //   console.log(error)
    // }
    mobile[editIndex] = editedmobileData;
    setMobile([...mobile]);
     history.push("/");
  }
  


  return (
    <BaseApp
      title={"Edit the Mobile details"}
    >
      <div className="add-continar">
        <div className="add-card">
          <ul type="none">
            <li><input
              placeholder="id"
              value={idx}
              onChange={(event) => setIdx(event.target.value)}
            /></li>

            <li><input
              placeholder="mobileName"
              value={mobileName}
              onChange={(event) => setMobileName(event.target.value)}
            /></li>

            <li><input
              placeholder="image"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            /></li>

            <li><input
              placeholder=" model"
              value={model}
              onChange={(event) => setModel(event.target.value)}
            /></li>

            <li><input
              placeholder="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            /></li>
            <li><input
              placeholder="Ram"
              value={Ram}
              onChange={(event) => setRam(event.target.value)}
            /></li>

            <li><input
              placeholder="storage"
              value={storage}
              onChange={(event) => setStorage(event.target.value)}
            /></li>

            <li>  <button
              onClick={updateMobile}
            >Edit Mobile Details</button>
            </li>
          </ul>

        </div>
      </div>
    </BaseApp>
  )
}

export default EditMobile