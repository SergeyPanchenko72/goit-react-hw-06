import css from "./App.module.css";
// import { useState } from "react";
// import initialContacts from "../../startContacts.json";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
// import * as Yup from "yup";
// import { useEffect } from "react";

function App() {
  // const initialValues = {
  //   id: "",
  //   name: "",
  //   number: "",
  // };

  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem("saved-contacts");
  //   console.log(savedContacts);
  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   }
  // });
  // const [search, setSearch] = useState("");

  // const addContact = (newContact) => {
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, newContact];
  //   });
  // };

  // const delContact = (contactId) => {
  //   setContacts((prevContacts) => {
  //     return prevContacts.filter((contact) => contact.id !== contactId);
  //   });
  // };

  // const FeedbackSchema = Yup.object().shape({
  //   name: Yup.string()
  //     .min(3, "Too Short!")
  //     .max(50, "Too Long!")
  //     .required("Required"),
  //   number: Yup.string()
  //     .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
  //     .required("Required"),
  // });

  // useEffect(() => {
  //   window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
