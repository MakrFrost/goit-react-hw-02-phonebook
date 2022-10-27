import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

import Form from './Form/Form';

class Phonebook extends Component {
  onFormSubmitData = data => {
    console.log(data);
  };

  render() {
    // const randomId = nanoid();

    return (
      <div>
        <Form onSubmit={this.onFormSubmitData} />
        <h1>Contacts:</h1>
        <ul></ul>
      </div>
    );
  }
}

export default Phonebook;
