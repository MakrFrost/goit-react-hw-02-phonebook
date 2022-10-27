import React, { Component } from 'react';

class Form extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  inputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  clearForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  onFormSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state);

    this.clearForm();
  };

  render() {
    // const randomId = nanoid();

    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>
            Name:
            <input
              value={this.state.name}
              onChange={this.inputChange}
              name="name"
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <br />
          <label>
            Number:
            <input
              value={this.state.number}
              onChange={this.inputChange}
              name="number"
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <button type="submit">Add contact!</button>
        </form>
      </div>
    );
  }
}

export default Form;
