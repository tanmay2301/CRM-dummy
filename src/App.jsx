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

    const addContact = (newContact) => {
        
        const currentDate = new Date().toLocaleDateString();
        const contactWithDefaults = {
            ...newContact,
            status: 'Active', 
            type: 'General', 
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