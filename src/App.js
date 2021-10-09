import React, { Component } from 'react';
import shortid from 'shortid';
import './App.css';
import Form from './Components/Form/Form';
import Contacts from './Components/Form/ContactsList';
import Filter from './Components/FIlter/Filter';


class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }
  
  onFormSubmit = contactsData => {
    console.log(contactsData);
    console.log(this.state.contacts);
    const contact = {
      id: shortid.generate(),
      name: contactsData.name,
      number: contactsData.number,
    }
    return (this.state.contacts.find(contact => contact.name === contactsData.name))
      ? alert(`Контакт ${contactsData.name} уже существует!`)
      : this.setState(prevState => ({contacts: [contact, ...prevState.contacts]})     
      )}
  
  
  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form onSubmit={this.onFormSubmit} />
        <h2>Contacts</h2>
        <Filter />
        <Contacts contacts={this.state.contacts} />        
      </div>)
    
  };

}

export default App;

   