import Counter from "./components/Counter";
import { CounterRed } from "./components/CounterRed";
import { Formulario } from "./components/Formulario";
import { TimerPater } from "./components/TimerPater";
import { User } from "./components/User";


function App() {
  return (
    <>
      <h1>
        React + Typescript
      </h1>
      <hr />

      <h2>useState</h2>
      <Counter />
      <User />

      <h2>useEffect - useRef</h2>
      <hr />

      <TimerPater />
      <hr />

      <h2>useReducer</h2>
      <CounterRed />
      <hr />

      <h2>customHooks</h2>
      <Formulario />
      <hr />
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}

export default App;
