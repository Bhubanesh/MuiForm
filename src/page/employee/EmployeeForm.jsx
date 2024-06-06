import { Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useForm, Form } from "../../component/useForm";
import Control from "../../controls/Control";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];
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
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Control.Input
            variant="outlined"
            value={values.fullName}
            label="Email"
            name="email"
            onChange={handleInputChange}
          />
          <Control.Input
            variant="outlined"
            value={values.email}
            label="Fullname"
            name="fullName"
            onChange={handleInputChange}
          />
          <Control.Input
            variant="outlined"
            value={values.city}
            label="City"
            name="city"
            onChange={handleInputChange}
          />
          <Control.Input
            variant="outlined"
            value={values.mobile}
            label="Mobile"
            name="mobile"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Control.RadioGroup
            name="gender"
            value={values.gender}
            label="Gender"
            onChange={handleInputChange}
            items={genderItems}
          />
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
