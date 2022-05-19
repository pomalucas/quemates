import './App.css';
import { ItemDetailContainer } from './ItemDetailContainer';
import { ItemListContainer } from './ItemListContainer';
import { Navbar } from './Navbar';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Cart } from './Cart';
import { CartContext } from './CartContext';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <CartContext>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer />} />
                        <Route path='/tipo/:id' element={<ItemListContainer />} />
                        <Route path='/item/:id' element={<ItemDetailContainer />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='*' element={<ItemListContainer />} />
                    </Routes>
                    <Footer />
                </CartContext>
            </BrowserRouter>
        </div>
    );
}

export default App;