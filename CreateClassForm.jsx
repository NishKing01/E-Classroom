import { useState } from 'react';

export default function CreateClassForm({ teacher }) {
  const [name, setName] = useState('');

  const handleCreate = async () => {
    await fetch('http://localhost:3001/create-class', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, teacher })
    });
    alert('Class created!');
  };

  return (
    <div>
      <h3>Create Class</h3>
      <input placeholder="Class Name" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}
