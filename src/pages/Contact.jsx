import React, { useState, useEffect } from 'react';
import '../App.css'

const Contact = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchMessages = async () => {
      const initialMessages = await new Promise((resolve) =>
        setTimeout(() => resolve(['Hello', 'How are you?']), 1000)
      );
      setMessages(initialMessages);
    };

    fetchMessages();
  }, []); // This effect runs only once, when the component mounts

  return (
    <div className='contact'>
      <h2 className='c_h'>Contact Page</h2>
      <p className='c_p'>Welcome to the Contact Page!</p>
      <form onSubmit={handleSendMessage}>
        <label className='c_l'>
          Message:
          <input className='c_i' type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <button className='c_btn' type="submit">Send</button>
      </form>
      <ul className='c_ul'>
        {messages.map((msg, index) => (
          <li className='c_li' key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;