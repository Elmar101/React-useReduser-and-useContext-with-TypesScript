
import {useContext} from 'react';
import countContext from '../../context/CountContext';

const CCounter = () => {
    const counterContext = useContext(countContext);
    return (
        <>
        <span style={{color:'green'}}> CounterC -  </span>
        <button onClick={()=>  counterContext.countDispatch!({type:'INCREAMENT',payload: 5})}> +10 </button>
        <button onClick={()=>  counterContext.countDispatch!({type: 'DECREAMENT',payload: 5})}> -10 </button>
        <button onClick={()=>  counterContext.countDispatch!({type: 'RESET'})}> reset </button>
        </>
    )
}
export default CCounter