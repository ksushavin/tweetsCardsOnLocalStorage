import Phonebook from "components/Phonebook/Phonebook";
import css from 'pages/ContactsPage/ContactsPage.module.css'

export default function ContactsPage () {
    return (
        <>   
            <div className={css.contact__container}>
                <h1 className={css.title}>My phonebook</h1>
                <Phonebook />
            </div>
        </>
    )
}