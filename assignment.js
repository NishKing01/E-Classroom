let assignments = [];

function postAssignment(classId, title, description) {
  assignments.push({ classId, title, description, submissions: [] });
}

function submitAssignment(classId, student, answer) {
  const assignment = assignments.find(a => a.classId === classId);
  if (assignment) assignment.submissions.push({ student, answer });
}

module.exports = { postAssignment, submitAssignment };
