import { useState } from "react";


const Counter = () => {
  const [counter, setCounter] = useState(0)

  const handleIncrease = ( number: number = 1 ): void => {
    setCounter( counter + number );
  }

  return(
    <div className="mt-5">
      <h3>Counter: { counter }</h3>
      <br/>
      <button className="btn btn-outline-primary mt-2" onClick={ () => handleIncrease() }>
        + 1
      </button>
      <button className="btn btn-outline-primary mt-2" onClick={ () => handleIncrease(2) }>
        + 2
      </button>
      <button className="btn btn-outline-danger mt-2" onClick={ () => setCounter(0) }>
        Reset
      </button>
    </div>
  )
}

export default Counter;