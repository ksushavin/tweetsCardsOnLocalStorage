import { useSelector } from "react-redux";
import selectors from 'redux/selectors';


export function GetFilteredContacts() {
    
    const contacts = useSelector(selectors.getContacts);
    const filter = useSelector(selectors.getFilterFromState);

    if (!filter) {
        return contacts;
        
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    
    const filteredContacts = contacts.filter(({ name }) => {
        const normalizedName = name.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter);
        return result;
    });
    return filteredContacts;
}