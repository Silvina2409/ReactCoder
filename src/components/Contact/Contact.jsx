import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [valores,setValores] = useState({
    nombre: "",
    email: ""
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log( "Enviado:" , valores)
  }
  const handleValores = (e) => {
    setValores({...valores,
      [e.target.name]: e.target.value
    })

  }


  return (
    <div>
      <h3> Contacto</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Ingrese su nombre' value={valores.nombre} onChange={handleValores} name= "nombre" /> 
        <input type="email" placeholder='Ingrese su E-Mail' value={valores.email} onChange={handleValores} name= "email"/>
        <button type='submit'> ENVIAR </button>
          </form>
    </div>
  )
}

export default Contact