import React from 'react';
import Registro from './components/Registro';
import './App.css' /*no me tomo en css*/

function App() {
  const [message, setMessage] = React.useState('');
  const [messageType, setMessageType] = React.useState('');

  const handleRegistration = (message, messageType) => {
    setMessage(message);
    setMessageType(messageType);
  };

  return (
    <div className="App">
      <Registro onRegistration={handleRegistration} />
      {message && <Alert message={message} messageType={messageType} />}
    </div>
  );
}

export default App;