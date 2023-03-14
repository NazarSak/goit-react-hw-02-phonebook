import React from "react";
import { List,ContactLi,ContactName,ContactNumber,DeleteBut } from "./contactList.styled";
import PropTypes from "prop-types"

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

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
}

export default ContactList;
