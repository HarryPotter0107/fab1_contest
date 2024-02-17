/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    const studentsOver50 = arr.filter(student => student.marks > 50);
    console.log(studentsOver50);
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(student => {
      if (student.marks > 50) {
        console.log(student);
      }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    const newStudent = { id: 4, name: "Bhanu", age: "23", marks: 99 };
    arr.push(newStudent);
    console.log(newStudent);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    const passedStudents = arr.filter(student => student.marks >= 50);
    arr = passedStudents;
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newStudents = [
      { id: 4, name: "Bhanu", age: "23", marks: 99 },
      { id: 5, name: "Harry", age: "24", marks: 98 },
      { id: 6, name: "Potter", age: "25", marks: 27 }
    ];
    arr = arr.concat(newStudents);
    console.log(arr);
  }
  