import React, { useState } from 'react'
import Formulario from './Formulario'
import SocialButton from './SocialButton'
import Alert from './Alert'

const Registro = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const [email, setEmail] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [confirmContrasena, setConfirmContrasena] = useState('')

  const handleSubmit = (e, email, contrasena, confirmContrasena) => {
    e.preventDefault()
    if (emailIsValid(email) && contrasena === confirmContrasena) {
      setSuccessMessage('Registro exitoso')
    } else {
      setErrorMessage('Error en el registro')
    }
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  };

  return (
    <div>
      <h1>Registro</h1>
      <Formulario handleSubmit={handleSubmit} email={email} setEmail={setEmail} contrasena={contrasena} setContrasena={setContrasena} confirmContrasena={confirmContrasena} setConfirmContrasena={setConfirmContrasena} />
      <SocialButton />
      <Alert errorMessage={errorMessage} successMessage={successMessage} />
    </div>
  )
}

export default Registro