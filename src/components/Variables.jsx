import React from 'react'

const Variables = () => {

const saludo = 'Hola desde constante'
const imagen = 'https://media.istockphoto.com/photos/surfing-picture-id160896636?k=20&m=160896636&s=612x612&w=0&h=Lh-q3Rx3xW2O6R12hXyAAGx3N_6grI4_-7LqaezaJYE='

  return (
    <div>
        <h2>Nuevo componentente {saludo}</h2>
        <img src={imagen} alt='' />
    </div>
  )
}

export default Variables