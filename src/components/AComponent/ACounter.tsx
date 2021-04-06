import {useContext} from 'react';
import CountContext from '../../context/CountContext';
import AChildCounter from './AChildComponent/AChildCounter';
const ACounter = () => {
    const counterContext = useContext(CountContext);
    return (
        <>
        <span style={{color:'blue'}}> CounterA -</span>
        <button onClick={()=>  counterContext.countDispatch!({type:'INCREAMENT', payload: 1})}> +1 </button>
        <button onClick={()=>  counterContext.countDispatch!({type: 'DECREAMENT', payload: 1})}> -1 </button>
        <button onClick={()=>  counterContext.countDispatch!({type: 'RESET'})}> reset </button>

        {counterContext.count > 20 &&
            <>
             <h3> Changes Count from AChildCounter </h3>
             <AChildCounter/>
            </>
        }
       
        </>
    )
}

export default ACounter
