// 1. Create a class called as Student. The class should have the following functionality.
// a) Create
// b) fetchDetails
// c) setMarks
// d) getMarks

// Use this class functionality in your main project
// Explore concepts like constructor, static methods, variables

// Try to use the best practices to write above assignment

class Student{
    static noOfStudents=0; //static variable 

    constructor(name,rollNumber,marks){
        this.name=name;
        this.rollNumber=rollNumber;
        this._marks=marks;//private variable 
        Student.noOfStudents++; 
    }
    displayDetails(){
        return `Name: ${this.name}, Roll Number: ${this.rollNumber}, Marks: ${this._marks}`;
    }
    get ViewMarks(){
        return this._marks;
    }
    set UpdateMarks(marks){
        if(marks < 0 || marks > 100){
            throw new Error("Marks should be between 0 and 100");
        }
        this._marks = marks;
    }
    static getTotalStudents(){
        return Student.noOfStudents;
    }

    

}
const student1=new Student("John Doe", 101, 85);
console.log(student1.displayDetails());
student1.UpdateMarks=90; // updating marks using setter
console.log(`Updated Marks: ${student1.ViewMarks}`); // accessing marks using getter
console.log(`Total Students: ${Student.getTotalStudents()}`); 