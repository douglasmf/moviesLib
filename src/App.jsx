import { Outlet } from "react-router-dom"
import Navbar from "./layout/Navbar"

function App() {

  return (
    <div className="App">
      <header>
      <Navbar/>
      </header>
      <Outlet/>
    </div>
  )
}

export default App
