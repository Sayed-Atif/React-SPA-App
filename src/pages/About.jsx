import React, { useState, useEffect } from 'react';
import '../App.css'

const About = () => {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  useEffect(() => {
    console.log('About component has been mounted.');
  }, []); // This effect runs only once, when the component mounts

  return (
    <div className='about'>
      <h2>About Page</h2>
      <p>Welcome to the About Page!</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button className='a_btn' type="submit">Submit</button>
      </form>
      {submittedName && <p>Submitted Name: {submittedName}</p>}
    </div>
  );
};

export default About;