import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(2018);

  return (
    <div>
      <p>You clicked {count} times</p>
      
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <button onClick={() => setCount(count + 1)}>Plus</button>   
    </div>
  );
}
export default Example;