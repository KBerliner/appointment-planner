import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const makeNewContact = (name, phoneNumber, email) => {

    // Checking for empty fields
    if (!name || !phoneNumber || !email) {
      alert('All fields must be filled out!');
      return;
    }

    // Checking for duplicate contact
    if (contacts.find((contact) => contact.name === name && contact.phoneNumber === phoneNumber && contact.email === email) !== undefined) {
      alert('This contact is already in the system!');
    } else {
      setContacts(prev => [...prev, { "name": name, "phoneNumber": phoneNumber, "email": email }]);
    }
  }

  const makeNewAppointment = (name, contact, date, time) => {

    // Checking for empty fields
    if (!name || !contact || !date || !time) {
      alert('All fields must be filled out!');
      return;
    }

    // Checking for duplicate appointment
    if (appointments.find((appointment) => appointment.name === name && appointment.contact === contact && appointment.date === date && appointment.time === time) !== undefined) {
      alert('This appointment is already in the system!');
    } else {
      setAppointments(prev => [...prev, { "name": name, "contact": contact, "date": date, "time": time }]);
    }
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
