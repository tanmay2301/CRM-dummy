import './App.css'
import { useState } from 'react'
import database from './api'
import Header from './custom-components/Header'
import SideBar from './custom-components/SideBar'
import Cards from './custom-components/Cards'
import ContactUI from './custom-components/ContactUI'
import ContactManager from './custom-components/ContactManager'

function App() {
  const [contacts, setContacts] = useState(database.contacts);
  const [activeFilter, setActiveFilter] = useState('All');

  const addContact = (newContact) => {
    const currentDate = new Date().toLocaleDateString();
    const contactWithDefaults = {
      ...newContact,
      lastContact: currentDate
    };

    setContacts(prevContacts => [...prevContacts, contactWithDefaults]);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      activeFilter === "All" ||
      (activeFilter === "Media" && contact.type === "media") ||
      (activeFilter === "Partners" && contact.type === "partners") ||
      (activeFilter === "Beta Users" && contact.type === "beta")
  );

  return (
    <div className="main">
      <Header />
      <SideBar />
      <Cards />
      <ContactManager
        onAddContact={addContact}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <ContactUI contacts={filteredContacts} />
    </div>
  );
}

export default App;