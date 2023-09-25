import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { increment, decrement } from '../features/number/numberSlice';
import { selectNumber } from './../features/number/numberSlice';

const Number = () => {

    const number = useSelector(selectNumber); 
     const dispatch = useDispatch();
    return (
        <div>
            <h2>Number is {number}</h2>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>

        </div>
    );
};

export default Number;