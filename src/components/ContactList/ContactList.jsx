import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors.js";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className={css.contact}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
