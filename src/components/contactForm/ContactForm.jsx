import styles from '../contactForm/contactForm.module.css'
import PropTypes from 'prop-types';
import { Component } from 'react';

class ContactForm extends Component {

  state={
    name:"dfsdf",
    number:"654654",
  }
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.name,this.state.number);
    this.props.addContact(this.state.name, this.state.number)
  };

  handleChange = e => {
    const { name, value } = e.target;
    // console.log(name);
    this.setState({
      [name]: value,
    });
  };
  
    render(){
    return (
         <form onSubmit={this.handleSubmit} className={styles.form__style}>
          <div className={styles.form__registration}>
            <p>Name</p>
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              className={styles.registration__input}
            />
            <p>Phone</p>
            <input
              onChange={this.handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              className={styles.registration__input}
            />
            <button type="submit" className={styles.button__submit}>Add Contact</button>
          </div>
        </form>     
    )};
  }

export default ContactForm;

ContactForm.propTypes={
addContact:PropTypes.func.isRequired,
}
