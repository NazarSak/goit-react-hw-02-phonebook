import React from "react";
import { List,ContactLi,ContactName,ContactNumber,DeleteBut } from "./contactList.styled";

const ContactList = ({ contacts, filter, remove }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        const lowerCase = name.toLowerCase();
        if (lowerCase.includes(filter)) {
          return (
            <ContactLi key={id}>
              <ContactName>{name}</ContactName>:
              <ContactNumber>{number}</ContactNumber>
              <DeleteBut onClick={() => remove(id)}>Delete</DeleteBut>
            </ContactLi>
          );
        }
      })}
    </List>
  );
};

export default ContactList;
