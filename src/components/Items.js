const productos = [
    {
        id: 1,
        nombre: "Mate Imperial Uruguayo Camionero Premium",
        descripcion: "Mate Premium Alpaca Cincelada Uruguayo Camionero Premium",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_921080-MLA47381906809_092021-F.webp",
        precio: 3500,
        category: "Mates",
        stock: 5
    },
    {
        id: 2,
        nombre: "Mate Torpedo Uruguayo",
        descripcion: "Mate Torpedo Uruguayo Cuero Premium Virola Acero Inoxidable",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_773503-MLA45990864712_052021-F.webp",
        precio: 4500,
        category: "Mate",
        stock: 3
    },
    {
        id: 3,
        nombre: "Bombilla Pico De Loro",
        descripcion: "Mate Premium Alpaca Cincelada Uruguayo Camionero Premium",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_908803-MLA49337868294_032022-F.webp",
        precio: 1000,
        category: "Bombillas",
        stock: 7
    },
];

export const traerProductos = (id) => {
    return new Promise((resolve, reject) => {
        const itemFiltrados = productos.filter((prod) => prod.category === id);
        setTimeout(() => {
            id ? resolve(itemFiltrados) : resolve(productos);
        }, 1000);
    });
};

export const traerProducto = (id) => {
    return new Promise((resolve, reject) => {
        const item = productos.find((prod) => prod.id === parseInt(id));
        setTimeout(() => {
            resolve(item);
        }, 1000);
    });
};