import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import BaseApp from '../sidenavbar/sidebar';
import { AppState } from '../provider/provider';
import * as yup from 'yup'
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { toast } from 'react-toastify';
import { url } from '../App';

const userSchemaValidation = yup.object({
  id: yup.string().required("please specify Book ID"),
  mobileName: yup.string().required("Please fill in your Mobile Name"),
  image: yup.string().required("please write proper image sorce"),
  model: yup.string().required("Please enter model"),
  price: yup.string().required("Please enter price."),
  Ram: yup.string().required("Please enter Ram."),
  storage: yup.string().required("Please enter storage.")

})


const EditMobile = () => {
  const { mobile, setMobile } = AppState();
  const { id } = useParams();
  const history = useHistory()
  const selectedmobile = mobile.find((mob) => mob.id === id);
  const token = sessionStorage.getItem('token');
  //
  const updateMobile = async ({ editedMobile }) => {
    // step 1 : collecting new data
    const editIndex = mobile.findIndex(per => per.id === id)
    //chaged data in the input field

    try {
      const response = await fetch(`${url}/mobile/edit/${id}`, {
        method: "PUT",
        body: JSON.stringify(editedMobile),
        headers: {
          "Content-Type": "application/json",
          Authorization:`Bearer ${token}`
        },
      
      })
      const data = await response.json();
      let newDate = data.mobile;

      mobile[editIndex] = newDate;
      setMobile([...mobile]);
      history.push("/dashboard");
      toast("Mobile Data Edited")
    } catch (error) {
      console.log(error)
      toast("error")
    }
  }
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
    initialValues: {
      id: selectedmobile.id,
      mobileName: selectedmobile.mobileName,
      image: selectedmobile.image,
      model: selectedmobile.model,
      price: selectedmobile.price,
      Ram: selectedmobile.Ram,
      storage: selectedmobile.storage
    },
    validationSchema: userSchemaValidation,
    onSubmit: (editedMobile) => {
      console.log("on submit called :", editedMobile)
      updateMobile({ editedMobile });

    }

  })



  return (
    <BaseApp
      title={"Edit the Mobile details"}
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
            Edited Mobile
          </Button>
        </form>
      </div>

    </BaseApp>
  )
}

export default EditMobile