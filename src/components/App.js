import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import NavBar from "./NavBar"
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer';

function App() {

    const usuarios = ["Juan", "Pedro", "Maria"]

    return (
        <>
            <Header />
            <NavBar />
                <ItemListContainer/>
            <Main nombre="Lucas" apellido="Poma" usuarios={usuarios}>
            <ItemDetailContainer />
            </Main>
            <Footer />
        </>
    )
}

export default App