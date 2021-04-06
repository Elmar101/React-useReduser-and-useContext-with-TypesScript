import {useContext} from 'react';
import CountContext from '../../../context/CountContext';

const AChildCounter = () => {
    const counterContext = useContext(CountContext);
    return (
        <>
        <span style={{color:'yellow'}}> CounterAChild -</span>
        <button onClick={()=>  counterContext.countDispatch!({type:'INCREAMENT', payload: 20})}> +20 </button>
        <button onClick={()=>  counterContext.countDispatch!({type: 'DECREAMENT', payload: 20})}> -20 </button>
        <button onClick={()=>  counterContext.countDispatch!({type: 'RESET'})}> reset </button>
        </>
    )
}

export default AChildCounter