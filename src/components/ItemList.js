import Item from "./Item"

const ItemList = ({ productos }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-around',
                margin: '30px',
                border: '3px solid pink',
                backgroundColor: 'pink',
                borderRadius: '5px',
                padding: '10px',
            }}
        >
            <section className="productos">
                {productos.map((producto) => {
                    return <Item key={producto.id} producto={producto} />
                })}
            </section>
            </div>
    );
};

            export default ItemList