

/* 
    React Props
    
    Props are arguments passed into React components.

    Props are passed to components via HTML attributes.
*/

// ***************** Car *********************
function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
  
  function Garage() {
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" />
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);


