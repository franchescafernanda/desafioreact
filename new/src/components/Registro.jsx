import React from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';

const Registro = ({ onRegistration }) => {
  const socialButtons = [
    { icon: 'facebook' },
    //{ icon: 'google' }, con este codigo se me repetia 2 veces
  ];

  return (
      <div className="registration-form d-flex flex-column align-items-center">
        <h2>Crea una cuenta</h2>
        {socialButtons.map(({ icon }, index) => (
          <SocialButton key={index} icon={icon} />
        ))}
        <Formulario onRegistration={onRegistration} />
      </div>
  );
};

export default Registro;