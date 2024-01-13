import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="flex flex-col p-3 rounded-md bg-gray-400 shadow-2xl my-3">
      <span>From:</span>
      <DatePicker
        showIcon
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="dd/MM/yyyy"
        todayButton="Today"
        minDate={new Date()}
        calendarStartDay={1}
        className="rounded-md"
      />
      <span>To:</span>
      <DatePicker
        showIcon
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="dd/MM/yyyy"
        todayButton="Today"
        calendarStartDay={1}
        className="rounded-md"
      />
    </div>
  );
};

export default Calendar;
