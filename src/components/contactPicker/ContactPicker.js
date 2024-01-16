import React from "react";

export const ContactPicker = ({ onChange, value, contacts, name }) => {
  return (
    <>
      <select onChange={({ target }) => onChange(target.value)} value={value} name={name}>
        <option value="" default>No Contact Selected</option>
        {contacts.map(({ name }) => <option key={name} value={name}>{name}</option>)}
      </select>
    </>
  );
};
