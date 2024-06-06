import { TextField } from '@mui/material'
import React from 'react'

function Input(props) {
    const { name, value , label, variant }  = props;
  return (
    <TextField 
    variant = {variant} 
    name = {name}
    values = {value} 
    label = {label}
     />
  );
}

export default Input