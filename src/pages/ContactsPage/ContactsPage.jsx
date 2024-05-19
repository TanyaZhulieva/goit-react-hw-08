import { useDispatch } from "react-redux";
import ContactEditor from "../../components/ContactEditor/ContactEditor";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations.js";
import { useEffect } from "react";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div>
      <ContactEditor />
      <ContactList />
    </div>
  );
}
