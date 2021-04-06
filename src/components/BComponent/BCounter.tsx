
import {useContext} from 'react';
import countContext from '../../context/CountContext';

const BCounter = () => {
    const counterContext = useContext(countContext);
    return (
        <>
        <span style={{color:'red'}}> CounterB -  </span>
        <button onClick={()=>  counterContext.countDispatch!({type:'INCREAMENT',payload: 5})}> +5 </button>
        <button onClick={()=>  counterContext.countDispatch!({type: 'DECREAMENT',payload: 5})}> -5 </button>
        <button onClick={()=>  counterContext.countDispatch!({type: 'RESET'})}> reset </button>
        </>
    )
}

export default BCounter