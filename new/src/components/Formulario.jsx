import React, { useState } from 'react'
import Alert from './Alert'


function Formulario() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [confirmContrasena, setConfirmContrasena] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (emailIsValid(email) && contrasena === confirmContrasena) {
      alert('Registro exitoso')
    } else {
      alert('Error en el registro')
    }
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirmar contraseña"
        value={confirmContrasena}
        onChange={(e) => setConfirmContrasena(e.target.value)}
      />
      <button type="submit">Registrarse</button>
    </form>
  )
}

export default Formulario








/*import React from "react";

const Formulario = () => {
  return (
    <>
    <form className="Registrar">
      <div className="form-group">
        <input type="text" placeholder="Nombre"
        name="nombre"
        className="form-control"/>
      </div>
      <div className="form-group">
        <input type="text" placeholder="tuemail@ejemplo.com"
        name="correo"
        className="form-control"/>
      </div>
      <div className="form-group">
        <input type="text" placeholder="Contraseña"
        name="password"
        className="form-control"/>
      </div>
      <div className="form-group">
        <input type="text" placeholder="Confirma tu contraseña"
        name="password2"
        className="form-control"/>
      </div>
      <button type="submit" className="btn btn-primary">Registrate</button>
    </form>
    </>
  )
}
//console.log(Formulario)

export default Formulario
*/