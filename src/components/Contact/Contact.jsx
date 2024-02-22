import React from 'react'
import {useForm} from "react-hook-form"

const Contact = () => {

 const {register, handleSubmit} = useForm()
 const enviar = (data) => {
  console.log (data)
 }

  return (
    <div>
      <h3> Contacto</h3>
      <form onSubmit={handleSubmit(enviar)} >
        <input type='text' placeholder='Ingrese su nombre' {...register ("nombre")} /> 
        <input type="email" placeholder='Ingrese su E-Mail'{...register ("email")} />
        <button type='submit'> ENVIAR </button>
          </form>
    </div>
  )
}

export default Contact