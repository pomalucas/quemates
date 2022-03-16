import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import CartWidget from './CartWidget';

const Main = (props) => {

    return (
        <main className="container">
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                <Route path="/carrito" element={<CartWidget/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes>
        </main>
    );
}

export default Main;