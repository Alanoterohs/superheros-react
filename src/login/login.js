import React from 'react';

function Login() {
  return (
    <div class="container">
      <div class="row">
        <div class="col align-self-center">
          <input
          type='text'
          placeholder='email'
          />
        </div>
        <div class="col align-self-center">
          <input
          type='text'
          placeholder='password'
          />
        </div>
        <div class="col align-self-center">
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
