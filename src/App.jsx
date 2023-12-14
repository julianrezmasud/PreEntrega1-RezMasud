
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import NavBar from "./components/Navbar/NavBar"
import { CartContextProvider } from "./components/contexts/Cartcontext"
import { CartContainer } from "./components/CartContainer/CartContainer"
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

    return (
        <BrowserRouter>
            <CartContextProvider>
                <div className="container">
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer greeting='Filmmakers' />} />
                        <Route path='/category/:cid' element={<ItemListContainer greeting='Filmmakers' />} />

                        <Route path='/detail/:pid' element={<ItemDetailContainer />} />
                        <Route path='/cart' element={<CartContainer />} />

                        <Route path='*' element={<Navigate to='/' />} />
                    </Routes>

                </div>
            </CartContextProvider>
        </BrowserRouter>
    )
}

export default App

