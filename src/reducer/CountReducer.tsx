export const InitialState =  {
    count: 0,
}
export interface IState {
    count: number;
    countDispatch?:  (action: {type: string; payload?: any}) => void;
}

const CountReducer = ( state:IState, action:any) => {

    switch( action.type ){
        case 'RESET': 
            return InitialState;

        case 'INCREAMENT': 
            return {...state,count: state.count + action.payload};
        
        case 'DECREAMENT': 
            return  {...state,count: state.count - action.payload};

        default: 
            return state;
    }
}
export default CountReducer;