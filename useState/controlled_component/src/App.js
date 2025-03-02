import React, { useState } from 'react';

const ControlledForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', { name, email, message });
    alert(`Form submitted successfully!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div>
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
