import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import Navbar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './CartContext';

function App() {

    return (
        <CartContextProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/category/:categoryId"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="/detail/:id"
                        element={<ItemDetailContainer />}
                    />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App