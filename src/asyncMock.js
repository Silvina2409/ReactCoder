const products = [
    {
        id: "1",
        nombre: "mesa de comedor retro",
        precio: "35000",
        categoria: "mesa",
        imagen: "",
        stock: 15,
        descripcion: "descripcion de mesa de comedor retro"
    },
    {
        id: "2",
        nombre: "silla de comedor retro",
        precio: "15000",
        categoria: "silla",
        imagen: "",
        stock: 13,
        descripcion: "descripcion de silla de comedor retro"
    },
    {
        id: "3",
        nombre: "sillon de living vitage Paris",
        precio: "50000",
        categoria: "sillon",
        imagen: "",
        stock: 18,
        descripcion: "descripcion de sillon"
    }    
]
export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve (products)
            
        }, 500)
        
    })
}