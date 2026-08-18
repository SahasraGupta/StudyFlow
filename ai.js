function getAnswer() {

 let q = document.getElementById("question").value.toLowerCase().trim();
 let res = document.getElementById("response");

 const answers = {

  // Programming
  "what is java": "Java is an object-oriented programming language used to build software and apps.",

  "what is python": "Python is a simple and powerful programming language used in AI, web, and automation.",

  "what is c": "C is a procedural programming language used for system programming.",

  "what is c++": "C++ is an extension of C with object-oriented features.",

  "what is html": "HTML is used to create the structure of web pages.",

  "what is css": "CSS is used to style web pages with colors, layouts, and designs.",

  "what is javascript": "JavaScript adds interactivity to websites.",

  "what is array": "Array is a collection of elements stored in contiguous memory.",

  "what is loop": "Loop repeats a block of code multiple times.",

  "what is function": "Function is a reusable block of code designed to perform a task.",

  // DBMS
  "what is dbms": "DBMS stands for Database Management System. It stores and manages data.",

  "what is sql": "SQL is Structured Query Language used to interact with databases.",

  "what is primary key": "Primary key uniquely identifies each record in a table.",

  "what is foreign key": "Foreign key links one table with another table.",

  "what is normalization": "Normalization organizes database tables to reduce redundancy.",

  // OS
  "what is os": "Operating System manages hardware and software resources.",

  "what is process": "Process is a program in execution.",

  "what is thread": "Thread is the smallest unit of CPU execution.",

  "what is deadlock": "Deadlock occurs when processes wait for each other forever.",

  "what is scheduling": "CPU scheduling decides which process gets CPU next.",

  // DSA
  "what is dsa": "DSA means Data Structures and Algorithms.",

  "what is stack": "Stack follows LIFO principle.",

  "what is queue": "Queue follows FIFO principle.",

  "what is linked list": "Linked list is a linear data structure using nodes.",

  "what is tree": "Tree is a hierarchical data structure.",

  "what is graph": "Graph consists of vertices and edges.",

  "what is binary search": "Binary search finds an element in sorted array efficiently.",

  // CN
  "what is cn": "CN means Computer Networks.",

  "what is ip address": "IP Address identifies a device on network.",

  "what is router": "Router connects different networks.",

  "what is switch": "Switch connects devices in same network.",

  "what is protocol": "Protocol is a set of communication rules.",

  // AI / ML
  "what is ai": "AI means Artificial Intelligence, machines simulating human intelligence.",

  "what is ml": "ML means Machine Learning, systems learning from data.",

  "what is dl": "DL means Deep Learning using neural networks.",

  // Study Planning
  "study plan": "2 Hours Coding, 1 Hour DSA, 30 Min Revision, 30 Min Practice.",

  "exam plan": "Revise important topics, solve previous papers, and practice weak areas.",

  "motivate me": "Stay consistent. Small daily progress creates big success 🔥",

  "how to focus": "Keep phone away, use timer, study in blocks of 25 mins.",

  "how to crack placements": "Learn DSA, projects, aptitude, communication, and consistency.",

  // ================= ECE =================
 "what is diode": "A diode allows current to flow in one direction only.",
 "what is transistor": "A transistor is used as a switch or amplifier.",
 "what is amplifier": "Amplifier increases the strength of a signal.",
 "what is vlsi": "VLSI means Very Large Scale Integration.",
 "what is microprocessor": "Microprocessor is the CPU on a single chip.",
 "what is communication system": "It transfers information from sender to receiver.",

 // ================= EEE =================
 "what is transformer": "Transformer changes voltage levels using electromagnetic induction.",
 "what is motor": "Motor converts electrical energy into mechanical energy.",
 "what is generator": "Generator converts mechanical energy into electrical energy.",
 "what is power system": "Power system generates, transmits and distributes electricity.",

 // ================= MECH =================
 "what is thermodynamics": "Thermodynamics studies heat and energy transfer.",
 "what is lathe machine": "Lathe machine shapes material by rotating it.",
 "what is ic engine": "IC engine converts fuel energy into mechanical work.",
 "what is turbine": "Turbine converts fluid energy into mechanical energy.",

 // ================= CIVIL =================
 "what is rcc": "RCC means Reinforced Cement Concrete.",
 "what is beam": "Beam is a horizontal structural member carrying loads.",
 "what is cement": "Cement is a binding material used in construction.",
 "what is surveying": "Surveying measures land positions and boundaries.",
 "what is foundation": "Foundation transfers building load to soil.",

 // ================= GENERAL =================
 "study plan": "2 hrs main subject + 1 hr practice + 30 min revision.",
 "how to focus": "Use timer, remove distractions, study in short sessions.",
 "exam plan": "Revise concepts, solve papers, focus on weak topics."


 };

 if (answers[q]) {
   res.innerHTML = answers[q];
 } else {
   res.innerHTML = "Sorry 😅 I don't know that yet. Try asking about Java, DBMS, DSA, AI, Study Plan etc.";
 }
}