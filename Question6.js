const students = [
  { name: "Alice", id: 101, marks: 85 },
  { name: "Bob", id: 102, marks: 42 },
  { name: "Charlie", id: 103, marks: 92 },
  { name: "Diana", id: 104, marks: 78 }
];

for (let i = 0; i < students.length; i++) {
  console.log(`ID: ${students[i].id}, Name: ${students[i].name}, Marks: ${students[i].marks}`);
}