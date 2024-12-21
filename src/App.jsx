import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Cards from './components/Cards'
import ContactManager from './components/ContactManager'

function App() {
  return (
    <div className="main">
      <Header />
      <SideBar />
      <Cards />
      <ContactManager />
      
    </div>
  )

}
export default App