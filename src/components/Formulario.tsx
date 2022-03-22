
// import { ChangeEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';

interface FormData {
  email: string,
  nombre: string,
  edad: number,
}

export const Formulario = () => {
  // const [formulario, setFormulario] = useState({
  //   email: '',
  //   nombre: ''
  // })

  // const handleChange = ( { target }: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = target;
  //   setFormulario({
  //     ...formulario,
  //     [ name ]: value
  //   })
  // }

  const { formulario, handleChange } = useForm<FormData>({
    email: 'ludwing.ra@gmail.com',
    nombre: 'Ludwing Rivera',
    edad: 33
  });

  const { email, nombre, edad } = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input 
          type="email" 
          className="form-control"
          name="email"
          // onChange={ (ev) => habdleChange(ev) } // Se puede hacer así, pero recordemos que en JS podemos acortar cuando enviamos el mismo argumento lo enviamos a una función interna, podemos omitirlo
          value={ email }
          onChange={ handleChange }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input 
          type="text" 
          className="form-control"
          name="nombre"
          value={ nombre }
          onChange={ handleChange }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input 
          type="text" 
          className="form-control"
          name="edad"
          value={ edad }
          onChange={ handleChange }
        />
      </div>

      <pre> { JSON.stringify(formulario) } </pre>
    </form>
  )
}
