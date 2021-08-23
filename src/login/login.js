import React from 'react';
import axios from 'axios';
import { Formik, ErrorMessage, Field, Form } from 'formik';

function Login({ setIsAuth }) {
  return (
    <div className="container my-auto">
      <h2 className="text-center m-3" style= {{ color: 'white' }}>Form Login</h2>
      <div className="row">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-12">
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
            setTimeout(() => {
              //alert(JSON.stringify(values, null, 2));
              // console.log(values);
              // console.log(actions);
              // actions.setSubmitting(false);
            }, 2000);

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
              <Form>
                    <div className="form-group">
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
                    <div className="form-group">
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
                    <button className="btn btn-success" type="submit">Submit</button>
              </Form>
            }
          </Formik>
        </div>
      </div>
  </div>
  );
}

export default Login;
