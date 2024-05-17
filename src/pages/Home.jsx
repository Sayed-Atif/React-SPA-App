import React, { useState, useEffect } from 'react';
import '../App.css'

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has been updated to: ${count}`);
  }, [count]); // This effect runs every time 'count' changes

  return (
    <div className='home'>
      <h2 className='heading'>Home Page</h2>
      <p className='p1'>Welcome to the Home Page!</p>
      <p className='p2'>Current Count: {count}</p>
      <button className='btn' onClick={() => setCount(count + 1)}>Increment</button>
      <button className='btn' onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Home;