import shortid from 'shortid';
import React from 'react';
import { FilterDiv,FilterLabel,FilterInput } from './filter.styled';

const Filter = ({ filter }) => {
  const filterID = shortid.generate();

  return (
    <FilterDiv>
      <FilterLabel htmlFor={filterID}>Find contacts by name
      <FilterInput
        type="text"
        name="name"
        id={filterID}
        onChange={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      </FilterLabel>
    </FilterDiv>
  );
};

export default Filter;
