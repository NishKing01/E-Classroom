const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { login, signup } = require('./auth');
const { createClass, joinClass } = require('./classroom');
const { postAssignment, submitAssignment } = require('./assignments');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/signup', (req, res) => {
  const user = signup(req.body.username, req.body.password, req.body.role);
  user ? res.json(user) : res.status(409).send('User already exists');
});

app.post('/login', (req, res) => {
  const user = login(req.body.username, req.body.password);
  user ? res.json(user) : res.status(401).send('Invalid credentials');
});

app.post('/create-class', (req, res) => {
  const id = createClass(req.body.name, req.body.teacher);
  res.json({ classId: id });
});

app.post('/join-class', (req, res) => {
  joinClass(req.body.classId, req.body.student);
  res.send('Joined');
});

app.post('/post-assignment', (req, res) => {
  postAssignment(req.body.classId, req.body.title, req.body.description);
  res.send('Posted');
});

app.post('/submit-assignment', (req, res) => {
  submitAssignment(req.body.classId, req.body.student, req.body.answer);
  res.send('Submitted');
});

app.listen(3001, () => console.log('Backend running on port 3001'));
