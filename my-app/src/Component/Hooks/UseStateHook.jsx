import React, { useState } from 'react';

export default function UseStateHook() {
  const [name, setName] = useState('');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>UseState Hook for Input</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name || 'stranger'}!</p>
    </div>
  );
}