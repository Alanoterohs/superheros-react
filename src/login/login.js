import React from 'react';
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
              alert(JSON.stringify(values, null, 2));
              console.log(values);
              console.log(actions);
              actions.setSubmitting(false);
            }, 2000);
            setIsAuth(true); //le permito cambiar de ruta hacia el Home
          }}
          >
            { ({ errors, handleSubmit }) =>
              <Form>
                    <div class="form-group">
                      <Field
                       type="email"
                       name="email"
                       placeholder="Email"
                       className="form-control"
                      />
                      <ErrorMessage
                       name='email'
                       component='small'
                       class="alert-danger" role="alert"
                      />
                    </div>
                    <div class="form-group">
                      <Field
                       type="password"
                       name="password"
                       placeholder="Password"
                       className="form-control"
                      />
                      <ErrorMessage
                       name='password'
                       component='small'
                       class="alert-danger" role="alert"
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
