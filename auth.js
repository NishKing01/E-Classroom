const users = [];

function login(username, password) {
  return users.find(u => u.username === username && u.password === password);
}

function signup(username, password, role) {
  if (users.find(u => u.username === username)) return null;
  const user = { username, password, role };
  users.push(user);
  return user;
}

module.exports = { login, signup };
