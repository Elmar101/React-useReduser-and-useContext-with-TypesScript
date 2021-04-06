import ACounter from './components/AComponent/ACounter';
import BCounter from './components/BComponent/BCounter';
import CCounter from './components/CComponent/CCounter';
import {useReducer} from 'react';
import CountReducer, {InitialState} from './reducer/CountReducer';
import CountContext from './context/CountContext'
function App() {

  const [counter , dispatch] = useReducer(CountReducer, InitialState);
  return (
    <div style={{width: '45%' ,margin:'25vh auto',border: '1px solid black',padding:'15px'}}>
      <CountContext.Provider value={{count: counter.count, countDispatch: dispatch}}>
        <h1>Count: {counter.count}</h1>
        <h3>----------------------------------------</h3>

        <ACounter />
        {counter.count > 5 && <>
            <h1> --------------------------------------- </h1>
            <BCounter />
        </>
        }
       

       {counter.count > 10 && <>
            <h1> --------------------------------------- </h1>
            <CCounter />
        </>
        }
      </CountContext.Provider>
    </div>
  );
}

export default App;
