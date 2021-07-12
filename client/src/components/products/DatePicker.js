import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function SelectedDate() {
  const [expireDate, setExpireDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" style={{
      backgroundColor: "#D7F9FA"
     }}   onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <DatePicker
      selected={expireDate} 
      onChange={(date) => setExpireDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
};