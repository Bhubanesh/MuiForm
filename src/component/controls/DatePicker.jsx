import {
  LocalizationProvider,
  DatePicker as MuiDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";

const DatePicker = (props) => {
  const { name, label, value, onChange } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        name={name}
        label={label}
        value={dayjs(value)}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
