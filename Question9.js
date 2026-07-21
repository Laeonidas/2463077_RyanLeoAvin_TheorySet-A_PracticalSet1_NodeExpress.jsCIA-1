const students = [
  { name: "Alice", id: 101, marks: 85 },
  { name: "Bob", id: 102, marks: 42 },
  { name: "Charlie", id: 103, marks: 92 },
  { name: "Diana", id: 104, marks: 78 }
];

const removedStudent = students.pop();
console.log(`Removed Student: ${removedStudent.name}`);

students.sort((a, b) => b.marks - a.marks);

console.log("Students sorted by marks (highest to lowest):", students);