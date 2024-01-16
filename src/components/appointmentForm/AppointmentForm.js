import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={({ target }) => setTitle(target.value)} value={title} type="text" required />
        <input onChange={({ target}) => setDate(target.value)} value={date} type="date" min={getTodayString} required />
        <input onChange={({ target}) => setTime(target.value)} value={time} type="time" required />
        <ContactPicker onChange={value => setContact(value)} value={contact} contacts={contacts} name={title} />
        <input type='submit' />
      </form>
    </>
  );
};
