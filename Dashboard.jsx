export default function Dashboard({ user }) {
  return (
    <div>
      <h2>Welcome, {user.username}</h2>
      <p>Role: {user.role}</p>
    </div>
  );
}
