// Add the students array at the beginning of Question7.js
const students = [
  { name: "Alice", id: 101, marks: 85 },
  { name: "Bob", id: 102, marks: 42 },
  { name: "Charlie", id: 103, marks: 92 },
  { name: "Diana", id: 104, marks: 78 }
];


// Example 1: Skip students with marks below 50 using 'continue'
console.log("Students with passing marks:");
for (const student of students) {
  if (student.marks < 50) {
    continue; // Skip failing marks
  }
  console.log(`${student.name}: ${student.marks}`);
}

// Example 2: Stop early when finding a student with marks >= 90 using 'break'
console.log("\nStopping at first high performer:");
for (const student of students) {
  if (student.marks >= 90) {
    console.log(`Found top scorer: ${student.name} with ${student.marks} marks.`);
    break; // Stop loop immediately
  }
}