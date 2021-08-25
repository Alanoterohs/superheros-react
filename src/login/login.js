import React from 'react';
import axios from 'axios';
import { Formik, ErrorMessage, Field, Form } from 'formik';
// col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-12
// style = {{ width: 239, height: 300 }}
// <img className="images-login" style = {{ width: 40  , height: 40 }} src={'https://source.unsplash.com/300x300/?superheroes'}/>
// <h2 className="text-center" style= {{ color: 'white' }}>Form Login</h2>
function Login({ setIsAuth }) {
  return (
    <div className="container">
      <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-12 rounded" style = {{ backgroundColor: '#0f0e17' }}>
        <div class="col-md-6 mx-auto text-center m-5">
            <h1 style = {{ color: 'white' }}>
                 Superheroes Team
            </h1>
        </div>
        <div className="col-auto p-5 text-center rounded" style = {{ backgroundColor: 'white' }}>
          <div className="text-center" style = {{ backgroundColor: 'white' }}>
            <img
              className="p-3"
              src="https://img.icons8.com/ios/100/000000/lock--v1.png"
              alt="lock"
              style = {{ backgroundColor: 'white' }}/>
          </div>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validate = { values => {
              let errors = {};
              if (!values.email) {
                errors.email = 'email is required!';
              };

              if (!values.password) {
                errors.password = 'password is required!';
              } else if (values.password.length < 6) {
                errors.password = 'password must contain more than 6 letters or numbers';
              }

              return errors;
            }}

            onSubmit={(values, actions) => {

              axios.post('http://challenge-react.alkemy.org', {
                email: 'challenge@alkemy.org',
                password: 'react', //los datos validos para obtener el token
              })
              .then((response)=> {
                //console.log(response);
                localStorage.setItem('token', response.data.token); //Guardo el token en el LS.
                setIsAuth(true); //le permito cambiar de ruta hacia el Home
              })
              .catch((err) => {
                alert(err); //genero la alerta al error de la Api(punto del Login)
              });
            }}
            >
            { ({ errors, handleSubmit }) =>
            <Form style = {{ backgroundColor: 'white' }}>
              <div className="form-group m-2" style = {{ backgroundColor: 'white' }}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  />
                <ErrorMessage
                  name='email'
                  component='small'
                  className="alert-danger" role="alert"
                  />
              </div>
              <div className="form-group m-2" style = {{ backgroundColor: 'white' }}>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  />
                <ErrorMessage
                  name='password'
                  component='small'
                  className="alert-danger" role="alert"
                  />
              </div>
              <div className="text-center" style = {{ backgroundColor: 'white' }}>
                <button className="btn btn-success m-1" type="submit">Login</button>
              </div>
            </Form>
          }
        </Formik>
      </div>
    </div>
    </div>

  );
}

export default Login;
