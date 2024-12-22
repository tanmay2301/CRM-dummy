import './App.css'
import { useState } from 'react'
import database from './api'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Cards from './components/Cards'
import ContactUI from './components/ContactUI'
import ContactManager from './components/ContactManager'

function App() {

  const [contacts, setContacts] = useState(database.contacts);

    const addContact = (newContact) => {
        // Add current date as lastContact
        const currentDate = new Date().toLocaleDateString();
        const contactWithDefaults = {
            ...newContact,
            status: 'Active', // Default status
            type: 'General', // Default type
            lastContact: currentDate
        };
        
        setContacts(prevContacts => [...prevContacts, contactWithDefaults]);
    };



  return (
    <div className="main">
      <Header />
      <SideBar />
      <Cards />
      <ContactManager onAddContact={addContact} />
      <ContactUI contacts={contacts} />
    </div>
  )

}
export default App