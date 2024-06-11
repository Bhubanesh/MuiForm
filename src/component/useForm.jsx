import { styled } from "@mui/material";
import React, { useState } from "react";

export const useForm = (props) => {
  const [values, setValues] = useState(props);

  const handleInputChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setValues({
      ...values,
      hireDate: date,
    });
  };

  const handleCheckChange = (e) => {
    const { name, checked } = e.target;
    setValues({
      ...values,
      [name] : checked
    })
  }

  return {
    values,
    setValues,
    handleInputChange,
    handleDateChange,
    handleCheckChange
  };
};

const TextFieldWrapper = styled("form")(({ theme }) => ({
  "& .MuiFormControl-root": {
    width: "60%",
    margin: theme.spacing(1),
  },
}));

export const Form = (props) => {
  return (
    <TextFieldWrapper autoComplete="off">{props.children}</TextFieldWrapper>
  );
};
