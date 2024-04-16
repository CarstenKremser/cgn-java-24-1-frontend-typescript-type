/*
In this task, the goal is to define the type "Student" in TypeScript. Each student
should have a first name, last name, age, and a property "grades" that contains a
list of grades. In this first step, a grade should be an integer from 1 to 6.
Choose suitable English names for the attributes. Then create a student and output
it in the console.



Please work together, one of you should create a Vite project with TypeScript.

Step 1: Write a function that outputs a student with their grades, where a student
should be output with first name, last name, age, and a list of grades.


Highlight the output of the first and last names, age, and grades with a line
of 30x "=".
Example:


Anton Meier (17)
==============================
Grades: 1,4,3,1,3,2,1,2


Step 2: Allow strings and numbers as grades
Task:


Ensure that besides grades as numbers (German system), values A to F (American system)
are also supported as grades. The function should output the student's grades.


Example:


Anton Meier (17)
==============================

 Noten:
A,2,F,3,1,B,2,5


Step 3: Allow undefined as a value (displayed as *)
Task:


Ensure that "undefined" is now supported as a value in the grades. The function
should output the student's grades and represent "undefined" as "*". (For example,
if the student was absent and not graded).


Example:


Anton Meier (17)
===========================

 Noten:
A,2,*,3,1,B,*,5


Step 4: Print a list of all students in the console
Task:


Write a function that prints a list of all students in the console.


Example:


Anton Meier (16)
===========================
Grades: 1,4,3,1,A,*,1,2

Berta Müller (17)
===========================
Grades: A,*,1

Cäsar Schmidt (17)
==========================
Grades: A,1,*,3,2,4,5


Please post the link to your GitHub repository where you solved this task together.
Enter answer here

If you have already completed this task early, you may work on the bonus task on
the next page.
Before you come back, please submit this form.

--------------------------------------------------------------------------------

Bonus:
Task:


Write a function that highlights the names of the students with "=====". For each
character in the entry, the same number of "=" characters should be used as needed
for the name and age of the student.
Example:


Anton Meier (16)
===================
Grades: 1,4,3,1,A,*,1,2

Berta Müller (17)
==================
Grades: A,*,1

Cäsar Schmidt (17)
===============
Grades: A,1,*,3,2,4,5


Bonus:
Task:


Restructure the student and the transcript in such a way that grades can be assigned
to specific subjects. Afterwards, the student should be formatted with the
corresponding grades per subject.


Florian Weber (14)
 ==============

Noten:
Sport: A,1,*
Kunst: 3,2,4,5
Mathe: 1,2,A


Bonus average grade:
Calculate the average grade for each student and later for the entire list of
students. Discuss together how you want to design the calculation exactly
(including handling undefined, weighting if one student has more grades than
others, etc).


 */
type Grade = undefined | 1 | 2 | 3 | 4 | 5 | 6 | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades: Grade[];
}

function printStudent(student: Student):void {
    console.log();
    let personInfo: string = student.firstName + " " + student.lastName + " (" + student.age + ")";
    console.log(personInfo);
    let highliter: string = ""
    for (let i = 0; i < personInfo.length; i++) { highliter = highliter.concat("=")}
    console.log(highliter);
    const logGrades: string[] = []
    student.grades.forEach((grade: Grade) => {logGrades.push(g2S(grade))});
    console.log("Grades: " + logGrades.toString());
    console.log();
}

function g2S(grade: Grade):string {
    if (!grade) {
        return '*'
    }
    return grade.toString()
}

function s2G(gradeString: string):Grade {
    if (gradeString === "*") {
        return undefined as unknown as Grade
    }
    return gradeString as unknown as Grade
}

function printAllStudents(students: Student[]):void {
    students.forEach((student: Student) => {printStudent(student)})
}


let students:Student[] = [
    {firstName:"Anton", lastName:"Meier", age:16, grades:[s2G('A'),2,s2G('*'),3,1,s2G('B'),s2G('*'),5]},
    {firstName:"Berta", lastName:"Müller", age:17, grades:[s2G('A'),s2G('*'),1]},
    {firstName:"Cäsar", lastName:"Schmidt", age:17, grades:[s2G('A'),1,s2G('*'),3,2,4,5]}

]

//printStudent(students[0])

printAllStudents(students)

