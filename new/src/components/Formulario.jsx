import React, { useState } from 'react'

function Formulario({ handleSubmit, email, setEmail, contrasena, setContrasena, confirmContrasena, setConfirmContrasena }) {
  const [nombre, setNombre] = useState('')

  return (
    <form onSubmit={(e) => handleSubmit(e, email, contrasena, confirmContrasena)}>
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