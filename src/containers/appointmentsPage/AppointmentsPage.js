import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import App from "../../App";

export const AppointmentsPage = ({ appointments, contacts, handleNewAppointment }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
    handleNewAppointment(name, contact, date, time);

    setName('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        contacts={contacts}
        title={name}
        setTitle={(name) => setName(name)}
        contact={contact}
        setContact={(contact) => setContact(contact)}
        date={date}
        setDate={(date) => setDate(date)}
        time={time}
        setTime={(time) => setTime(time)}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={appointments} contacts={contacts} />
      </section>
    </div>
  );
};