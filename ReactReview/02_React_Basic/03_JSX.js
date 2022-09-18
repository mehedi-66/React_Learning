/* 
    What is JSX?
JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.



Coding JSX
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

JSX converts HTML tags into react elements.



*/

/* 
    You are not required to use JSX, but JSX makes it easier to write React applications.
*/

// ********* using JSX *********

const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);


// ************ without JSX ************

const myElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);


// ************** With JSX you can write expressions inside curly braces { }.

const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

