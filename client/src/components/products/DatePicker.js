import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function SelectedDate() {
  const [expireDate, setExpireDate] = useState(new Date());
  return (
    <DatePicker selected={expireDate} onChange={(date) => setExpireDate(date)} />
  );
};