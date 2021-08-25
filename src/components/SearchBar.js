import { Formik, ErrorMessage, Field, Form } from 'formik';

function SearchBar({ name, setName, setMaxTeam, maxTeam }) {
  return (
    <div className="container">
      <h3 className="text-center m-3" style= {{ color: 'white' }}>Search Hero</h3>
      <div className="row">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-12">
        <Formik
        initialValues={{
          name: '',
          maxTeam: false,
        }}
        validate = { values => {
          let errors = {};
          if (!values.name) {
            errors.name = 'Coloque el nombre del heroe que desea buscar :)';
          };
          if (maxTeam) {
            errors.name = 'puede tener como máximo 6 integrantes su equipo';
          };
          return errors;
        }}

        onSubmit={(values, actions) => {
          setName(values.name);
        }}
        >
          { ({ errors, handleSubmit }) =>
            <Form>
                  <div className="form-group">
                    <Field
                     type="name"
                     name="name"
                     placeholder="Search Hero..."
                     className="form-control"
                    />
                    <ErrorMessage
                     name='name'
                     component='small'
                     className="alert-danger" role="alert"
                    />
                  </div>
                  <button className="btn btn-success m-1" type="submit">Search</button>
            </Form>
          }
        </Formik>
        </div>
      </div>
  </div>
  );
}

export default SearchBar;

// Punto 3. Buscador de Héroes
// ● Nombre del héroe.
// ● Imagen.
// ● Acciones para agregarlo al equipo
