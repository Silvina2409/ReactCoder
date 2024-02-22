import React from 'react'
import styles from "./Nosotros.module.css"

const Nosotros = () => {
  return (
    <div>
        <h2 className={styles.nosotros} > Nosotros</h2>
        
        <p className={styles.nosotros2}> Somos una empresa dedicada al diseño y fabricación de mobiliario funcional con proósito, desarrollamos productos pensados para personas en distintas etapas y con diferentes estilos de vida. Nuestra filosofia se basa en cubrir todos los detalles para mejorar la calidad en los espacios del ser humano  </p>
        <p className={styles.nosotros2} > En Furniture transformamos la estética convencional de los muebles, obteniendo productos de diseños exclusivos y funcionales de gran impacto en el mercado.  </p>
        <p className={styles.nosotros2}> Contamos con un equipo altamente comprometido, capacitado y profesional que garantiza una excelente atención y asesoría, la eficiencia en todas las operaciones y la calidad de los productos con orientación a la satisfacción de nuestros clientes </p>
    </div>
  )
}

export default Nosotros