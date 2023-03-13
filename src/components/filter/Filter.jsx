import shortid from 'shortid';
import React from 'react';

const Filter = ({ filter }) => {
  const filterID = shortid.generate();

  return (
    <div>
      <label htmlFor={filterID}>FInd</label>
      <input
        type="text"
        name="name"
        id={filterID}
        onChange={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

export default Filter;
