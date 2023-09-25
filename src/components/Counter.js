import React, { useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
//import store from '../app/store';
import { selectCounter } from '../features/counter/counterSlice';
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';

const Counter = () => {

    //const counter = useSelector(store=>store.counter.counterValue)
    const counter = useSelector(selectCounter); 
     const dispatch = useDispatch();

     const [value,setValue] = useState(2);
    return (
        <div>
            <h2>Counter is {counter}</h2>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <input type="number" value={value} onChange={e=>setValue(e.target.value)} />
            <button onClick={()=>dispatch(incrementByAmount(+value))}>IncrementByAmount</button>
        </div>
    );
};

export default Counter;