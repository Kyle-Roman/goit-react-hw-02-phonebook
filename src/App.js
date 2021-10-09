import React, { Component } from 'react';
import shortid from 'shortid';
import Form from './Components/Form/Form';
import Contacts from './Components/ContactList/ContactsList';
import Filter from './Components/FIlter/Filter';
import s from './App.module.css';


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
    const contact = {
      id: shortid.generate(),
      name: contactsData.name,
      number: contactsData.number,
    }
    return (this.state.contacts.find(contact => contact.name === contactsData.name))
      ? alert(`Контакт ${contactsData.name} уже существует!`)
      : this.setState(({contacts}) => ({contacts: [contact, ...contacts]})     
      )
  }
  
  handleFilterChange = e => {
        this.setState({filter: e.currentTarget.value})
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }
  
  render() {
    const {  filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div className={s.app}>
        <h1 className={s.title}>Phonebook</h1>
        <Form onSubmit={this.onFormSubmit} />
        <h2 className={s.title}>Contacts</h2>
        <Filter value={filter} onChange={ this.handleFilterChange}/>
        <Contacts contacts={filteredContacts} onDelete={this.deleteContact}/>
      </div>)
    
  };

}

export default App;

   