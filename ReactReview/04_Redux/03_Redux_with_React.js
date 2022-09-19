/* 
    *********** React with Redux *************
    => npm install redux
    => npm install redux-react

    redux-react  is connected with react with redux 

    src / store  => folder create and
    store / index.js   => redux logic here 

*/
// *********************** store / index.js  ********************

import redux from 'redux';

const counterReducer = (state = {counter: 0}, action)=>{
    if(action.type === 'increment')
    {
        return {
            counter: state.counter + 1,
        }
    }
    else if(action.type === 'decrement')
    {
        return {counter: state.counter - 1}
    }

    return state;
}

const store = redux.createStore(counterReducer);

export default store;






// ***************************** src/ index.js **************************
// height level of our component Tree 
// add Provider component and store props on it to

import { Provider } from 'react-redux';
import store from './store/index';

reactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));





// ********************** where the store data need    Counter.js Component ***************

import {useSelector} from 'react-redux';

// selector hook select what is need


const Counter = ()=>{

    // part of the store or specific or hole state  select => subscription 

    let counter =  useSelector(sate => state.Counter);
    
    const toggleCounterHandler = ()=>{};

    return <main>
        <h1>Redux Counter</h1>
        <div>{counter}/div>
        <button>Toggle Counter</button>
    </main>
}



// ******************** Change the data of store by dispacth function call 

import {useSelector, useDispatch} from 'react-redux';

// for chaning the dispach hook helps to change 


const Counter = ()=>{

    // part of the store or specific or hole state  select => subscription 

    let counter =  useSelector(sate => state.Counter);
    
    // dispatch hooks gives us a function to change the stroe valu and action change

    let dispatch = useDispatch( );
    
    const incrementHandler = ()=>{
        dispatch({type: 'increment'});

    }
    const decrementHandler = ()=>{
        dispatch({type: 'decrement'});
    }
    
    const toggleCounterHandler = ()=>{};

    return <main>
        <h1>Redux Counter</h1>
        <div>{counter}/div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}></button>
        <button>Toggle Counter</button>
    </main>
}