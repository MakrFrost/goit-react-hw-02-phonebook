import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

import Form from './Form/Form';

class Phonebook extends Component {
  state = {
    contacts: [],
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
    // const randomId = nanoid();

    return (
      <div>
        <Form onSubmit={this.onFormSubmitData} />
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
