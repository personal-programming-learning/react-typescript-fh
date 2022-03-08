import { Timer } from './Timer';

import { useState } from 'react';


export const TimerPater = () => {

  const [milliseconds, setMilliseconds] = useState(1000)

  return (
    <>
      <span>Milisegundos { milliseconds }</span>

      <br/>
      <button 
        onClick={ () => setMilliseconds(1000) }
        className="btn btn-outline-success">
        1000
      </button>
      <button 
        onClick={ () => setMilliseconds(2000) }
        className="btn btn-outline-success">
        2000
      </button>

      <Timer milliseconds={ milliseconds } />
    </>
  )
}
