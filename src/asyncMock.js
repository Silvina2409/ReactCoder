const datos = [
    {
        id: "1",
        name: "Mesa de comedor moderna",
        price: "235000",
        category: "mesa",
        image:  "https://acdn.mitiendanube.com/stores/001/120/603/products/comedor-4-7340e910968ff2475316648034755556-480-0.webp",
        stock: 15,
        description: "Mesa Fabricada en melamina de 18mml y 25mml la tapa. Medidas 140x140.Pata central pata CUBO."
    },
    {
        id: "2",
        name: "Silla tapizada",
        price: "90000",
        category: "silla",
        image: "https://acdn.mitiendanube.com/stores/001/120/603/products/black-21-72b63a2c425f3ec46f16578225366011-480-0.webp",
        stock: 13,
        description: "Medidas: Alto total: 74cm Altura hasta el asiento: 37cm Ancho: 58cm Profundidad: 49cm. Tapizado en tela antimanchas. Color a eleccion, sujeto a disponibilidad."
    },
    {
        id: "3",
        name: "Sillón cabecero con brazos",
        price: "100000",
        category: "sillon",
        image: "https://acdn.mitiendanube.com/stores/001/120/603/products/cabecero-11-51ee5b5f0f919bfd6716578249120269-480-0.webp" ,
        stock: 18,
        description: "Medidas: Altura total: 100mt Profundidad total=55cm Asiento: 47cm profundidad Apoyabrazos: 32cm Altura asiento respaldo=48cm Altura asiento apoyabrazos =20cm Ancho interior apoyabrazos=42cm Altura piso asiento: 50cm Tapizado en tela antimanchas. Color a eleccion, sujeto a disponibilidad. "
    },
    {
        id: "4",
        name: "Silla matera reforzada",
        price: "85000",
        category: "silla",
        image:  "https://acdn.mitiendanube.com/stores/001/120/603/products/black-211-986a29b4b96306851916578232723781-480-0.webp",
        stock: 15,
        description: "Medidas aproximadas: Alto hasta el asiento: 0,43cm. Alto hasta el respaldo:  0,73cm.Profundidad: 0,60cm.Frente: 0,60cm.     Tapizada en tela antimanchas. Color a eleccion, sujeto a disponibilidad. "
    },
    
    {
        id: "5",
        name: "Silla matera con brazos",
        price: "95000",
        category: "silla",
        image: "https://acdn.mitiendanube.com/stores/001/120/603/products/black-221-1e21d7daf26ce904dd16578234722453-480-0.webp",
        stock: 4,
        description: "Medidas aproximadas: Alto hasta el asiento: 0,43cm. Alto hasta el respaldo:  0,73cm.Profundidad: 0,60cm.Frente: 0,60cm.     Tapizada en tela antimanchas. Color a eleccion, sujeto a disponibilidad. "
    },

]
export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() =>{
            resolve(datos)
        },500)
    })
} 
export const pedirItemPorId = (id) =>{
    return new Promise((resolve, reject) => {
        const item = datos.find((el) => el.id == id)
        if (item) {
            resolve (item)
        }else {
            reject ({
                error: "El producto no se encontró"
            })
        }
    })

}
