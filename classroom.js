let classrooms = [];

function createClass(name, teacher) {
  const id = Date.now().toString();
  classrooms.push({ id, name, teacher, students: [] });
  return id;
}

function joinClass(classId, student) {
  const classroom = classrooms.find(c => c.id === classId);
  if (classroom) classroom.students.push(student);
}

module.exports = { createClass, joinClass };
