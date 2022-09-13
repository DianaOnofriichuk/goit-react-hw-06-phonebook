import './ContactList.css'
import { useSelector, useDispatch } from 'react-redux'
import actions from '../../Redux/actions'

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items)
  const filter = useSelector((state) => state.contacts.filter)
  const dispatch = useDispatch()

  return (
    <ul>
      {contacts
        .filter(
          (contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase()) ||
            contact.number.includes(filter),
        )
        .map((contact) => {
          return (
            <li className="contacts-item" key={contact.id}>
              {contact.name}:{' '}
              <span className="contacts-number">{contact.number}</span>
              <button
                className="button"
                type="button"
                onClick={() => dispatch(actions.deleteContact(contact.id))}
              >
                Delete
              </button>
            </li>
          )
        })}
    </ul>
  )
}

export default ContactList
