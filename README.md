[![Netlify Status](https://api.netlify.com/api/v1/badges/e0744cae-0065-4894-bda3-39cb20685d12/deploy-status)](https://app.netlify.com/sites/quemates/deploys)

# quemates

## Proyecto final del curso ReactJs de CoderHouse comisión 25470

Sitio Web: [quemates.netlify.app](https://quemates.netlify.app/)

Soy Lucas Poma, realicé este proyecto para el curso de React de CoderHouse.

Se usó firestore como base de datos, que es un servicio de Firebase, para persistir los productos que se muestran y sus datos, además de las ordenes de compra que se generan.

### Características

- Navegabilidad entre catalogo completo, filtrado por categorias, ordenadas por precio y detalle individual del producto.
- Botón de agregar al carrito para varios items con control según stock.
- Cada producto tiene una etiqueta que al ser seleccionada filtra por categoria y muestra los productos que pertenecen a ella.

### Instalación y manejo de la app con comandos

Primero hay que clonar el repositorio:
>`git clone https://github.com/pomalucas/quemates.git`

Luego moverse a la carpeta "quemates"
>`cd quemates`

Después instalar npm:
>`npm install`

Luego hacer:
>`npm run start` 

y la app estará corriendo.

### Dependencias instaladas:

  *  firebase v 9.6.9: a modo de base de datos de los productos.
  *  react-router-dom v 6.2.2: para navegación. 
  *  react-toastify v 8.2.0: para proporcionar notificaciones al usuario.
  *  animate.css v 4.1.1: para animación al loader.