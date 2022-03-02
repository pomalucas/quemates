const Main = (props) => {

    console.log(props)

    return (
        <main className="container">
            <p>Tengo {props.tipos} tipos de mates</p>
            {props.children}
        </main>
    )
}

export default Main