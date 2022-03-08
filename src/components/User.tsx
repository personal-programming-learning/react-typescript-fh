import { useState } from 'react';

interface IUser {
  uuid: string,
  name: string,
}

export const User = () => {
  
  const [user, setUser] = useState<IUser>();

  const login = () => {
    setUser({
      uuid: 'abcdf-12345',
      name: 'Ludwing Rivera'
    });
  }
  
  return (
    <div className='mt-5'>
      <h3>Usuario: { user?.name }</h3>

      <button 
        onClick={ login }
        className='btn btn-outline-primary'>
        Login
      </button>

      {
        user ? <pre className='mt-2'>{ JSON.stringify( user ) }</pre>
        : <pre className='mt-2'>No hay usuario</pre>
      }
    </div>
  )
}
