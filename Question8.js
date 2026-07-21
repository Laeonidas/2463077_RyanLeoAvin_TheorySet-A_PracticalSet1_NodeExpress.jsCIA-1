const students = [
  { name: "Alice", id: 101, marks: 85 },
  { name: "Bob", id: 102, marks: 42 },
  { name: "Charlie", id: 103, marks: 92 },
  { name: "Diana", id: 104, marks: 78 }
];

students.push({ name: "Evan", id: 105, marks: 95 });

let topStudent = students[0];

for (let i = 1; i < students.length; i++) {
  if (students[i].marks > topStudent.marks) {
    topStudent = students[i];
  }
}

console.log(`Top Student: ${topStudent.name} with ${topStudent.marks} marks.`);