import React, { useState } from 'react'
import Registro from './components/Registro'
//import Formulario from './components/Formulario'
//import SocialButton from './components/SocialButton'
//import Alert from './components/Alert'

function App() {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  return (
    <div>
      <Registro errorMessage={errorMessage} successMessage={successMessage} />
    </div>
  )
}

export default App
