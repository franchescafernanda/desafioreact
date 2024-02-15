import React from "react";

const Formulario = () => {
  return (
    <>
    <form className="formulario">
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

export default Formulario