import ContactForm from './contactForm/ContactForm';
import { Component } from 'react';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter:'',
  };

  componentDidMount(){
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)
    if(parsedContacts){
      this.setState({
        contacts: parsedContacts,
      })
    }
  }

  componentDidUpdate(prevProps, prevState){
    const { contacts } = this.state
    if( contacts.length !== prevState.contacts.length){
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  }

  
  addContact = (name, number) => {
    const { contacts } = this.state;
    const result = contacts.find(item => item.name.toLowerCase() === name.toLowerCase());
    if (result) {
        alert(`${name} уже есть в списке`);
        return;
    }

    this.setState(prevState => {
      const { contacts } = prevState;
      const newBook = {
        id: nanoid(),
        name,
        number,
      };
      return {
        contacts: [...contacts, newBook],
      };
    });
  };
  getFilteredPeople() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    
    const filterStr = filter.toLowerCase()
    const result = contacts.filter(item => {
        const title = item.name.toLowerCase();
        return title.includes(filterStr);
    });
    return result;
}
removeHuman = (bookId) => {
  this.setState(prevState => {
      const { contacts } = prevState;
      const newItems = contacts.filter(item => item.id !== bookId);
      return {
        contacts: newItems
      }
  })
}
handleChange = e => {
  const { name, value } = e.target;
  // console.log(name);
  this.setState({
    [name]: value,
  });
};
  render() {
    
    const { filter } = this.state;
    const FilteredPeople = this.getFilteredPeople();
    return (
      <div className='registration__form'>
        <h1>Phonebook</h1>
        <ContactForm  addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={filter}  />
        <ContactList names={FilteredPeople} removeHuman={this.removeHuman} />
      </div>
    );
  }
}

export default App;

