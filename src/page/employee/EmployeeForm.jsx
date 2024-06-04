import { Grid, TextField,  } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useForm, Form } from "../../component/useForm";


const initialFValues = {
  fullName: "",
  email: "",
  city: "",
  mobile: "",
  gender: "male",
  departmentID: "",
  hireDate: new Date(),
  isPermanent: false,
};

function EmployeeForm() {
  
  const { values, setValues, handleInputChange} = useForm(initialFValues)


  

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField variant='outlined' values={values.fullName} label="Email"  name = "email" onChange={handleInputChange}/>
          <TextField variant='outlined' values={values.email} label= "Fullname" name = "fullName" onChange={handleInputChange}/>
          <TextField variant='outlined' values={values.city} label="City"  name = "city" onChange={handleInputChange}/>
          <TextField variant='outlined' values={values.mobile} label="Mobile"  name = "mobile" onChange={handleInputChange}/>
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
