import shortid from 'shortid';
import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate()

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  render() {
    const { name, number, nameInputId } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={nameInputId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
            id={nameInputId}
          />
        </label>
        <label htmlFor={nameInputId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
            id={nameInputId}
          />
        </label>

        <button type="Submit">Add contact</button>
      </form>
    );
  }
}