
/* 
        Styling React Using CSS

    There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:

    Inline styling
    CSS stylesheets
    CSS Modules
*/


// ************ Inline Styling

const Header = () => {
    return (
      <>
        <h1 style={{color: "red"}}>Hello Style!</h1>
        <p>Add a little style!</p>
      </>
    );
  }

// ************* JavaScript Object

const Header = () => {
    const myStyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Sans-Serif"
    };
    return (
      <>
        <h1 style={myStyle}>Hello Style!</h1>
        <p>Add a little style!</p>
      </>
    );
  }


// *************** CSS Stylesheet

// App.css

body {
    background-color: #282c34;
    color: white;
    padding: 40px;
    font-family: Sans-Serif;
    text-align: center;
  }


  // index.js

  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './App.css';
  
  const Header = () => {
    return (
      <>
        <h1>Hello Style!</h1>
        <p>Add a little style!.</p>
      </>
    );
  }


  // *********** CSS Modules

  // my-style.module.css:

  .bigblue {
    color: DodgerBlue;
    padding: 40px;
    font-family: Sans-Serif;
    text-align: center;
  }


  // Car.js:

import styles from './my-style.module.css'; 

const Car = () => {
  return <h1 className={styles.bigblue}>Hello Car!</h1>;
}

export default Car;

