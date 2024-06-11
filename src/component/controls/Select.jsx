import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from "@mui/material";
import React from "react";

function Select(props) {
  const { name, value, options, label, onChange } = props;
  return (
    <FormControl>
      <InputLabel id="department-select">Department</InputLabel>
      <MuiSelect
        name={name}
        id="departmenrt-select"
        labelId="departmenrt-select"
        value={value}
        label={label}
        onChange={onChange}
      >
      <MenuItem key="">none</MenuItem>
        {
          options.map((item)=>(
            <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
          ))
        }
      </MuiSelect>
    </FormControl>
  );
}

export default Select;
