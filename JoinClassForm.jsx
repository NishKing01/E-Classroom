import { useState } from 'react';

export default function JoinClassForm({ student }) {
  const [classId, setClassId] = useState('');

  const handleJoin = async () => {
    await fetch('http://localhost:3001/join-class', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ classId, student })
    });
    alert('Joined class!');
  };

  return (
    <div>
      <h3>Join Class</h3>
      <input placeholder="Class ID" value={classId} onChange={e => setClassId(e.target.value)} />
      <button onClick={handleJoin}>Join</button>
    </div>
  );
}
