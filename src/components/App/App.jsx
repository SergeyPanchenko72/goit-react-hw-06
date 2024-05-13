import css from "./App.module.css";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import * as Yup from "yup";

function App() {
  const initialValues = {
    name: "",
    number: "",
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
      .required("Required"),
  });

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm
        initialValues={initialValues}
        FeedbackSchema={FeedbackSchema}
      />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
