const products = [
    { id: '1', name: 'Producto 1', category: 'scripts', price: 300, stock: 10, description: 'Back to the Future Complete Movie Manuscript', imageUrl: "https://cdn.europosters.eu/image/750/posters/back-to-the-future-i2795.jpg" },
    { id: '2', name: 'Producto 2', category: 'scripts', price: 300, stock: 10, description: 'Forrest Gump Complete Movie Manuscript', imageUrl: "https://storage.googleapis.com/pod_public/1300/179937.jpg" },
    { id: '3', name: 'Producto 3', category: 'scripts', price: 300, stock: 10, description: 'Pulp fiction Complete Movie Manuscript', imageUrl: "https://cdn.europosters.eu/image/750/posters/pulp-fiction-cover-i1288.jpg" },
    { id: '4', name: 'Producto 4', category: 'scripts', price: 300, stock: 10, description: 'The Godfather Complete Movie Manuscript', imageUrl: "https://cdn.europosters.eu/image/750/posters/the-godfather-cat-b-w-i106941.jpg" },
    { id: '5', name: 'Producto 5', category: 'slates', price: 800, stock: 5, description: 'Professional Black and White Slate', imageUrl: "https://www.filmtools.com/media/catalog/product/f/i/filmtools_engraved_camera_slate_1.jpg" },
    { id: '6', name: 'Producto 6', category: 'slates', price: 800, stock: 5, description: 'Professional Color Slate', imageUrl: "https://static.bhphoto.com/images/images500x500/1587735945_1555914.jpg" },

]

export const mFetch = (id) => new Promise((res, rej) => {

    setTimeout(() => {
        res(id ? products.find(product => product.id === id) : products)
    }, 1000)
})