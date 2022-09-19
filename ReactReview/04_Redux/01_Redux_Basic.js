
/* 
    What is Redux ?

    A state management system for corss-component or app-wide state 

    Don't we have React context already ?


    Core Redux concepts


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