import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import CartWidget from './CartWidget';

const Main = (props) => {

    return (
        <main>
            <ItemDetailContainer/>
        </main>
    );
}

export default Main;