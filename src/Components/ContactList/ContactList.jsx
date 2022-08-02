import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { removeContact } from 'redux/contacts/contactsOperations';

const ContactList = () => {
  const { items, filter } = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  let filterNameArr = items.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLocaleLowerCase());
  });

  if (!filterNameArr) {
    filterNameArr = items;
  }
  return filterNameArr.map(el => {
    return (
      <li key={nanoid()} className="item">
        <p>
          {el.name}: {el.phone}
        </p>
        <button className="btn" onClick={() => dispatch(removeContact(el.id))}>
          Del
        </button>
      </li>
    );
  });
};
ContactList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  filter: PropTypes.string,
  contacts: PropTypes.array,
};
export default ContactList;
