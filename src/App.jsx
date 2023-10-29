import { ItemList } from "./components/ItemList/ItemList"
import { Navbar } from "./components/NavBar/Navbar"

function App() {

  return (
    <>
      <div className="container2">
        <Navbar />
        <ItemList greeting=' Hollywood Store ' />
      </div>
    </>

  )
}
export default App
