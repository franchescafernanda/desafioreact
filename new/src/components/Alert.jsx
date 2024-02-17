import React from 'react'

function Alert({ errorMensaje, successMensaje }) {
  return (
    <div>
      {errorMensaje && <div className="alert danger">{errorMensaje}</div>}
      {successMensaje && <div className="alert success">{successMensaje}</div>}
    </div>
  )
}

export default Alert