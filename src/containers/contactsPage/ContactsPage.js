import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState('');
  const [duplicateName, setDuplicateName] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    // Submit the Contact information
    !duplicateName ? props.handleNewContact(name, phoneNumber, email) : alert('The name is a duplicate. Therefor the contact cannot be submitted!');
   
    // Clear form on successful submission
    setName('');
    setPhoneNumber('');
    setEmail('');
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    if (props.contacts.find(contact => contact.name === name) !== undefined) {
      alert('This name is already in the system!');
      setDuplicateName(true);
    } else {
      if (duplicateName) {
        setDuplicateName(false);
      }
    }
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name} 
        setName={(name) => setName(name)}
        phone={phoneNumber}
        setPhone={(phone) => setPhoneNumber(phone)}
        email={email}
        setEmail={(email) => setEmail(email)}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts} />
      </section>
    </div>
  );
};
