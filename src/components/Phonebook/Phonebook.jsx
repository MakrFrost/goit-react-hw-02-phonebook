import React, { Component } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class Phonebook extends Component {
  state = {
    ...INITIAL_STATE,
  };

  onFilterChange = () => {
    this.setState({ filter });
  };

  onAddContact = contact => {
    const { contacts } = this.state;
    if (contacts.filter(({ name }) => name === contact.name).length !== 0) {
      alert(contact.name + 'is already in contacts!');
      return;
    }
  };

  onFormSubmitData = data => {
    console.log(data);
    const contact = {
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <div>
        <Form onAddContact={this.onFormSubmitData} />
        <Filter filter={filter} onFilterChange={this.onFilterChange} />
        <h1>Contacts:</h1>
        <ul>
          <li>{this.state.contacts[1]}</li>
          <li>{this.state.contacts[2]}</li>
        </ul>
      </div>
    );
  }
}

export default Phonebook;
