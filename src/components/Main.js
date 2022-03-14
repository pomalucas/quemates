const Main = (props) => {

    console.log(props)

    return (
        <main className="container">
            {props.children}
        </main>
    )
}

export default Main