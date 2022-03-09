import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import NavBar from "./NavBar"
import ItemListContainer from './ItemListContainer'

function App() {

    const usuarios = ["Juan", "Pedro", "Maria"]

    return (
        <>
            <Header />
            <NavBar />
                <ItemListContainer/>
            <Main nombre="Lucas" apellido="Poma" usuarios={usuarios}>
            </Main>
            <Footer />
        </>
    )
}

export default App