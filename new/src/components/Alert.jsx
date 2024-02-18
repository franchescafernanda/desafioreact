import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Alert = ({ errorMessage, successMessage }) => {
  if (errorMessage) {
    return (
      <div className="alert alert-danger mt-3" role="alert">
        {errorMessage}
      </div>
    );
  }

  if (successMessage) {
    return (
      <div className="alert alert-success mt-3" role="alert">
        {successMessage}
      </div>
    );
  }

  return null;
};

export default Alert;