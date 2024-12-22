import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Cards from './components/Cards'
import ContactUI from './components/ContactUI'
import ContactManager from './components/ContactManager'

function App() {
  return (
    <div className="main">
      <Header />
      <SideBar />
      <Cards />
      <ContactManager />
      <ContactUI />
    </div>
  )

}
export default App