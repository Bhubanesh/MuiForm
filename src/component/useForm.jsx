import { styled } from "@mui/material";
import React, { useState } from "react";

export const useForm = (props) => {
  const [values, setValues] = useState(props);

  const handleInputChange = (e) => {
    const { name, values } = e.target;
    setValues({
      ...values,
      [name]: values,
    });
  };

  return {
    values,
    setValues,
    handleInputChange,
  };
};


const TextFieldWrapper = styled('form')(({ theme }) => ({
    "& .MuiFormControl-root": {
      width: "60%",
      margin: theme.spacing(1),
    },
  }));

export const Form = (props) => {
  return (
    <TextFieldWrapper>
        {props.children}
    </TextFieldWrapper>
  )
}

