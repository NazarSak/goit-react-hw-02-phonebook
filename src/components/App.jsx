import React, { Component } from 'react';
import { Form } from './form/Form';
// import shortid from 'shortid';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // handleSubmit = ({ name, number }) => {
  //  const nameId = shortid.generate()
  //   const string = this.state.contacts.filter(el => el.name === name);
  //   string.length !== 0
  //     ? this.hendleCoincidence(name)
  //     : this.setState(({ contacts }) => ({
  //         contacts: [...contacts, { id: nameId, name, number }],
  //       }));
  // };





  formSubmitHandler = data => {

    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };





  // formSubmitHandler = data => {
  //   console.log(data);
  //   data.id = nanoid();
  //   this.setState(prevState => ({
  //     contacts: [data, ...prevState.contacts],
  //   }));
  // };

  render() {
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} contacts={this.state.contacts}/>
      </>
    );
  }
}
