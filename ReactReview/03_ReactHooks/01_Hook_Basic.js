
/* 
    ******************* React Hooks **************
    Hooks were added to React in version 16.8.

    Hooks allow function components to have access to state and other React features.
    Because of this, class components are generally no longer needed.


    What is a Hook?

    Hooks allow us to "hook" into React features such as state and lifecycle methods.


    Hook Rules
    
    There are 3 rules for hooks:

    Hooks can only be called inside React function components.
    Hooks can only be called at the top level of a component.
    Hooks cannot be conditional
*/


// ************ Hook Example 

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}