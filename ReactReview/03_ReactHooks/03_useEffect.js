

/* 
                React useEffect Hooks

        The useEffect Hook allows you to perform side effects in your components.

        Some examples of side effects are: fetching data, directly updating the DOM, and timers.

        useEffect accepts two arguments. The second argument is optional.

        useEffect(<function>, <dependency>)


*/
// ************* Use setTimeout() to count 1 second after initial render:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}



// *****************  1. No dependency passed
useEffect(() => {
    //Runs on every render
  });




  // ***********************  2. An empty array:

  useEffect(() => {
    //Runs only on the first render
  }, []);




// ****************** 3. Props or state values:

useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
  }, [prop, state]);



/* ************************** 
  Here is an example of a useEffect Hook that is dependent on a variable. 
  If the count variable updates, the effect will run again:

*/

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}




// ********************* Effect Cleanup

/* 
    Some effects require cleanup to reduce memory leaks.

    Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

    We do this by including a return function at the end of the useEffect Hook.

*/

// Clean up the timer at the end of the useEffect Hook:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
        let timer = setTimeout(() => {
        setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}


