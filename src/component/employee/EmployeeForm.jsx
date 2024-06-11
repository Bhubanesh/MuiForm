import { Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useForm, Form } from "../useForm";
import Control from "../controls/Control";
import * as employeeServices from "../services/EmployeeServices";

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
  const {
    values,
    setValues,
    handleInputChange,
    handleDateChange,
    handleCheckChange,
  } = useForm(initialFValues);

  return (
    <Form>
      <Grid container>
        <Grid
          item
          xs={6}
        >
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
        <Grid
          item
          xs={6}
        >
          <Control.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Control.Select
            name="departmentID"
            label="DepartmentID"
            value={values.departmentID}
            options={employeeServices.getDepartmentCollection()}
            onChange={handleInputChange}
          />
          <Control.DatePicker
            name="hireDate"
            label="HireDate"
            value={values.hireDate}
            onChange={handleDateChange}
          />

          <Control.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleCheckChange}
          />
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
