
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/Navbar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

    return (
        <>
            <div>
                <NavBar />
                <ItemListContainer greeting='Hollywood Store' />
            </div>
        </>
    )
}

export default App