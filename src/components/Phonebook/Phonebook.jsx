
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addContact, removeContact } from 'redux/contacts/contacts-operations';
import selectors from 'redux/selectors';
import { fetchContacts } from "redux/contacts/contacts-operations";
import ContactForm from "components/ContactForm/ContactForm";
import { GetFilteredContacts } from 'components/GetFilteredContacts';
import { setFilter } from 'redux/filter/filter-slice';
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import css from 'components/Phonebook/Phonebook.module.css'

export default function Phonebook() {
    const contacts = GetFilteredContacts();

    const filter = useSelector(selectors.getFilterFromState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])

    const onAddContact = ({ name, number }) => {
        dispatch(addContact({ name, number }));
        dispatch(fetchContacts())
    }
    
    const onRemoveContact = (id) => {
        const action = removeContact(id);
        dispatch(action);
    }

    const handleFilterChange = (e) => {
        const { value } = e.target;
        dispatch(setFilter(value));
    }

   return (
        <div className={css.box}>
            <div className={css.contactForm}>
                <h1 className={css.title}>Add Contacts</h1>
                <ContactForm onSubmit={onAddContact} />
            </div>
           
            <div className={css.contactsWrapper}>
                <h2 className={css.title}>Contacts</h2>
                <Filter onChange={handleFilterChange} value={filter} />
                
                {contacts.length>0 && (<ContactList items={contacts} removeContact={onRemoveContact} />)}
            </div>
        </div>
    )
}