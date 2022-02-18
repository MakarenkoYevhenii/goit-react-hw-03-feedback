import styles from '../contactList/contactForm.module.css'
import PropTypes from 'prop-types';

    const ContactList = ({names, removeHuman}) => {
        const elements = names.map(item => <li key={item.id} className={styles.items}>
            <p className={styles.people__items}>{item.name}: {item.number}</p> <button className={styles.form__delete__button} onClick={()=>removeHuman(item.id)}>Delete</button>
        </li>);
    
        return (
            <ul>
                {elements}
            </ul>
        )
    }

export default ContactList;

ContactList.propTypes={
    names: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
    
        })
      ).isRequired,
      removeHuman:PropTypes.func.isRequired,
}