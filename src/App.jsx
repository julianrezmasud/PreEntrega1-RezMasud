
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import NavBar from "./components/Navbar/NavBar"

function App() {

    return (
        <BrowserRouter>
            <div className="container border border-5 border-primary">
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting='Filmmakers' />} />
                    <Route path='/category/:cid' element={<ItemListContainer greeting='Filmmakers' />} />

                    <Route path='/detail/:pid' element={<ItemDetailContainer />} />

                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}

export default App