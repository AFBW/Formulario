import React, { Fragment, useState } from 'react'

const Eventos = () => {

    const [texto, setTexto] = useState('Texto desde estado')

    const eventoClick = () => {
        console.log('Me distes un Click')
        setTexto('Cambiando el texto...')
    }

  return (
    <Fragment>
        <hr/>
        <h2>{texto}</h2>
        <button onClick={() => eventoClick()}>Click</button>
    </Fragment>
  )
}

export default Eventos