import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import NavBar from "./NavBar"
import ItemListContainer from './ItemListContainer'

function App() {

    const tipos = 2;
    const usuarios = ["Juan", "Pedro", "Maria"]

    return (
        <>
            <Header />
            <NavBar />
                <ItemListContainer greeting="Lleve su mate ahora con un paquete de yerba regalo" />
            <Main nombre="Lucas" apellido="Poma" tipos={tipos} usuarios={usuarios}>
                <p>Imperial</p>
                <p>Alpaca</p>
            </Main>
            <Footer />
        </>
    )
}

export default App