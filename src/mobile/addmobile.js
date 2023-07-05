import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../sidenavbar/sidebar";
import { AppState } from "../provider/provider";
import * as yup from 'yup'
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { url } from "../App";

const userSchemaValidation = yup.object({
  id: yup.string().required("please specify Book ID"),
  mobileName: yup.string().required("Please fill in your Mobile Name"),
  image: yup.string().required("please write proper image sorce"),
  model: yup.string().required("Please enter model"),
  price: yup.string().required("Please enter price."),
  Ram: yup.string().required("Please enter Ram."),
  storage: yup.string().required("Please enter storage.")

})


export function AddMobiles() {
  const { mobile, setMobile } = AppState();
  const history = useHistory()
  const token = sessionStorage.getItem('token')
  const addNewMobile = async ({ newMobile }) => {
    try {
      const response = await fetch(`${url}/addmobile`, {
        method: "POST",
        body: JSON.stringify(newMobile),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
      })
      const data = await response.json();
      let waitingdata = await data;
      console.log(waitingdata);
      const mobileid = waitingdata.id;
      if (mobileid == undefined) {
        toast("invaide ID");
      } else {
        setMobile([...mobile, waitingdata])
        history.push("/dashboard")
        toast("Mobile Data Add")
      }
    } catch (error) {
      console.log(error)
      toast("error")
    }
  }
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
    initialValues: {
      id: '',
      mobileName: '',
      image: '',
      model: '',
      price: '',
      Ram: '',
      storage: ''
    },
    validationSchema: userSchemaValidation,
    onSubmit: (newMobile) => {
      addNewMobile({ newMobile });
    }

  })


  return (
    <BaseApp
      title={"Add A New Mobile"}
    >

      <div className='issued-container'>

        <form onSubmit={handleSubmit} className="text-areas">
          <TextField
            fullWidth
            id="fullWidth"
            name="id"
            onBlur={handleBlur}
            label="ID"
            variant="outlined"
            value={values.id}
            onChange={handleChange}
          />
          {touched.id && errors.id ? <p style={{ color: "crimson" }}>{errors.id}</p> : ""}
          <TextField
            fullWidth
            id="fullWidth"
            label="mobile Name"
            variant="outlined"
            onBlur={handleBlur}
            name="mobileName"
            value={values.mobileName}
            onChange={handleChange}
          />
          {touched.mobileName && errors.mobileName ? <p style={{ color: "crimson" }}>{errors.mobileName}</p> : ""}

          <TextField
            fullWidth
            id="fullWidth"
            label="image Sorce"
            variant="outlined"
            onBlur={handleBlur}
            name="image"
            value={values.image}
            onChange={handleChange}
          />
          {touched.image && errors.image ? <p style={{ color: "crimson" }}>{errors.image}</p> : ""}

          <TextField
            fullWidth
            id="fullWidth"
            label="model"
            variant="outlined"
            onBlur={handleBlur}
            name="model"
            value={values.model}
            onChange={handleChange}
          />
          {touched.model && errors.model ? <p style={{ color: "crimson" }}>{errors.model}</p> : ""}
          <TextField
            fullWidth
            id="fullWidth"
            label="price"
            variant="outlined"
            onBlur={handleBlur}
            name="price"
            value={values.price}
            onChange={handleChange}
          />
          {touched.price && errors.price ? <p style={{ color: "crimson" }}>{errors.price}</p> : ""}
          <TextField
            fullWidth
            id="fullWidth"
            label="Ram"
            variant="outlined"
            onBlur={handleBlur}
            name="Ram"
            value={values.Ram}
            onChange={handleChange}
          />
          {touched.Ram && errors.Ram ? <p style={{ color: "crimson" }}>{errors.Ram}</p> : ""}
          <TextField
            fullWidth
            id="fullWidth"
            label="storage"
            variant="outlined"
            onBlur={handleBlur}
            name="storage"
            value={values.storage}
            onChange={handleChange}
          />
          {touched.storage && errors.storage ? <p style={{ color: "crimson" }}>{errors.storage}</p> : ""}

          <Button
            variant="contained"
            type="submit"
            color="success"
          >
            Add New Mobile
          </Button>
        </form>
      </div>

    </BaseApp>
  )
}