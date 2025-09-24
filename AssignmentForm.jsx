import { useState } from 'react';

export default function AssignmentForm({ classId }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlePost = async () => {
    await fetch('http://localhost:3001/post-assignment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ classId, title, description })
    });
    alert('Assignment posted!');
  };

  return (
    <div>
      <h3>Post Assignment</h3>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <button onClick={handlePost}>Post</button>
