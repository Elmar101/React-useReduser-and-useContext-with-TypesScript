import {IState} from '../reducer/CountReducer';
import React from 'react';
   const CountContext = React.createContext({} as IState);
export default CountContext;