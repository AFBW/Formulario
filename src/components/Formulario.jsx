import React from 'react'

const Formulario = () => {
    // Estados o Hooks
    const [fruta, setFruta] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [lista, setLista] = React.useState([])

    const guardarDatos = (e) => {
        // Evita /? procesar atravez del metodo GET ,lo que haga por defecto HTML
        e.preventDefault()
        
        if(!fruta.trim()){
            console.log('Fruta esta Vacio')
            return
        }
        if(!description.trim()){
            console.log('Descripcion esta Vacio')
            return
        }
        // Detectamos los campos y lo enviamos a la base de datos
        console.log('Procesando datos...'+ fruta + description)
        setLista([
            //Usamos el operador de propagacion
            ...lista,
            {nombreFruta: fruta, nombreDescription: description}
        ])
        // Limpiamos los campos una vez que le damos al boton Agregar
        e.target.reset()
        // Limpiamos tambien los Hooks
        setFruta('')
        setDescription('')
    }

  return (
    <div>
        <h2>Formulario</h2>
        
        <form onSubmit={ guardarDatos }>
            <input 
                type="text"
                placeholder='Ingrese Fruta'
                className='form-control mb-2'
            // Va a recibir nuestro evento y vamos a detectar cada cosa que escriba el usuario en el input
                onChange={(e) =>setFruta(e.target.value) }
             />

            <input 
                type="text"
                placeholder='Ingrese Descripccion'
                className='form-control mb-2'
            // Va a recibir nuestro evento y vamos a detectar cada cosa que escriba el usuario en el input
                onChange={(e) => setDescription(e.target.value)}
             />
             <button className='btn btn-primary me-md-2' type='submit'>Agregar</button>
        </form>
        <ul>
            {
                // Recorremos los elementos
                lista.map((item, index) => (
                    <li key={index}>
                        {item.nombreFruta} - {item.nombreDescription}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Formulario