import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './form/Form';
import { Header } from './header/Header';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = ({ name, number }) => {
    const ID = nanoid();
    const string = this.state.contacts.filter(el => el.name === name);
    string.length !== 0
      ? this.hendleCoincidence(name)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, { id: ID, name, number }],
        }));
  };

  hendleCoincidence(name) {
    alert(`${name} is already in contacts`);
  }

  hendleSearch = event => {
    const value = event.currentTarget.value.toLowerCase().trim();
    this.setState({ filter: value });
  };

  hendeleClickDelete = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Header title={"Phonebook"}/>
        <Form onSubmit={this.handleSubmit} contacts={contacts} />
        <Header title={"Contacts"}/>
        <Filter filter={this.hendleSearch} />

        <ContactList
          contacts={contacts}
          filter={filter}
          remove={this.hendeleClickDelete}
        />
      </>
    );
  }
}
