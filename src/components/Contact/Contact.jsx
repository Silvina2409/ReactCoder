import React from 'react'
import {useForm} from "react-hook-form"
import styles from "./Contact.module.css"

const Contact = () => {

 const {register, handleSubmit} = useForm()
 const enviar = (data) => {
  console.log (data)
 }

  return (
    <div className={styles.Contact1}>
      <h3  className={styles.Contact2}> Contacto</h3>
      <h4  className={styles.Contact3}> Nos pondremos en contacto a la brevedad</h4>
      <form onSubmit={handleSubmit(enviar)} className={styles.Contact4}>
        <input type='text' placeholder='Ingrese su nombre' {...register ("nombre")} className={styles.Contact5} />
        <input type="text" placeholder='Ingrese su apellido' {...register ("apellido")} className={styles.Contact5} />
        <input type="email" placeholder='Ingrese su E-Mail'{...register ("email")} className={styles.Contact5}  />
        <input type="number" placeholder='Ingrese su número de teléfono' {...register ("telefono")} className={styles.Contact5} />
        <button type='submit'className={styles.Contact6}> ENVIAR </button>
          </form>
    </div>
  )
}

export default Contact