import React, { useState } from 'react'

function Formulario({ handleSubmit, email, setEmail, contrasena, setContrasena, confirmContrasena, setConfirmContrasena }) {
  const [nombre, setNombre] = useState('')

  return (
    <form onSubmit={(e) => handleSubmit(e, email, contrasena, confirmContrasena)}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          //placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          //placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="password"
          //placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          //placeholder="Confirmar contraseña"
          value={confirmContrasena}
          onChange={(e) => setConfirmContrasena(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" style={{display: 'block', margin: '0 auto' }}>Registrarse</button>
    </form>
  )
}

export default Formulario