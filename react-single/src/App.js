import React, { useState, useEffect } from 'react';

const App = ({ name }) => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
    <h1>{name}</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </>
  );
}

export default App