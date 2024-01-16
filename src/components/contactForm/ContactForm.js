import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={({ target }) => setName(target.value)} value={name} type='text' />
        <input onChange={({ target }) => setPhone(target.value)} value={phone} type='tel' title="Please enter a valid phone number" pattern='[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}' />
        <input onChange={({ target }) => setEmail(target.value)} value={email} type='email' />
        <input type='submit' />
      </form>
    </>
  );
};

