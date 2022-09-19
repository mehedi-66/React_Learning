/*
       Redux package name:
      => npm install redux 

      // node js run the this file

    
    ------------  Reducer Function (not useReducer() hook, => has to change the data by mutating)  if dispatch() fucntion call
    |                                 then reducer function mutating the data or change the data
    |                    |
    |                    |
    |                    |
    |                Central Data (State)
 action                 Store
    |                     |
    |                     | Subscription (notifie if data change on the component)
 Dispatch                 |
      -----------   Components 


*/
const redux = require('redux');
   

// reducer function (oldState , dispatch_Action)
// always return new state object 
/* 
    key point 
    Should be a pure function  ---> same input leads to same output
   this reducer function not fetch from url or local storage nothing 
    */

   // give default value of state = {}
const counterReducer = (state = {counter: 0}, action) =>{
    return {
        // old state + 1
        counter: state.counter+1,
    };
};


const store = redux.createStore(counterReducer);


// subcription or component 
const counterSubscriber = ()=>{
   const latestState =  store.getState(); // lestest store snape short give by redux store 
    console.log(latestState);
}

store.subscribe(counterSubscriber);


// action or dispatch

store.dispatch({
    type: 'increment'
});








// ********************** Go more details by type property in dispitch function *************

const redux = require('redux');
   

// reducer function (oldState , dispatch_Action)
// always return new state object 
/* 
    key point 
    Should be a pure function  ---> same input leads to same output
   this reducer function not fetch from url or local storage nothing 
    */

   // give default value of state = {}
const counterReducer = (state = {counter: 0}, action) =>{
   
    if(action.type === 'increment'){
        return {
            // old state + 1
            counter: state.counter+1,
        };
    }
    else if(action.type === 'decrement')
    {
        return {
            counter: state.counter - 1;
        }
    }

    // default only old state 
    return state;
   
   
    
};


const store = redux.createStore(counterReducer);


// subcription or component 
const counterSubscriber = ()=>{
   const latestState =  store.getState(); // lestest store snape short give by redux store 
    console.log(latestState);
}

store.subscribe(counterSubscriber);


// action or dispatch

store.dispatch({type: 'increment');
store.dispatch({type: 'decrement'});


