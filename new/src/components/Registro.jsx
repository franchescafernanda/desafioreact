import 

const SocialButton = ({}) => {
  const btn=[
    {
      img: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-facebook-5.png',
      url: 'https://web.facebook.com/?locale=es_LA&_rdc=1&_rdr',
      ref: 'Icons facebook',
    },
    {
      img: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-5.png',
      url: 'https://github.com/franchescafernanda',
      ref: 'Icons github',
    },
    {
      img: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-5.png',
      url: 'https://www.linkedin.com/in/franchesca-fernanda-rivera-chiguay-7b9839292/',
      ref: 'Icons linkedin',
    }
  ]

  return (
    <div>
      <main>
        <h1>Crea una cuenta</h1>
      </main>
      <SocialButton buttons={btn}/>
    </div>
  )
}

export default SocialButton




/*import React from "react"
//import SocialButton from './SocialButton'

const Registro = ({ iconName, showAlert, setShowAlert, onFormSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()

    onFormSubmit({ message: 'Registro exitoso', variant: 'success' })
  }

  return (
    <div>
      {showAlert && <CustomAlert variant={showAlert.variant}>{showAlert.message}</CustomAlert>}
      <CustomForm onSubmit={handleFormSubmit}>
        {}
        <SocialButton iconName={iconName} /> {}
        <CustomButton variant="primary" type="submit">Submit</CustomButton>
      </CustomForm>
    </div>
  )
}

export default Registro*/