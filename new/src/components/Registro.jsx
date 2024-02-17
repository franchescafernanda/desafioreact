import React from 'react'
import Formulario from './Formulario'
import SocialButton from './SocialButton'
import Alert from './Alert'

const Registro ({errorMessage, successMessage}) => (
  <div>
    <h1>Registro</h1> 
    <Formulario/>
    <SocialButton />
    <Alert errorMessage={errorMessage} successMessage={successMessage} />
  </div>
)

export default Registro