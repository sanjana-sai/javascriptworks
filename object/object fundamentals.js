
// creating a student object

var students={

    name:"krish",

    course:"django",

    degree:"bsc",

    total:450,

    points:10

}

console.log(students.name);

console.log(students.degree);

students.grade="a"      // to add grade property in student object

console.log(students);    // to print student object


//total property students objectil indo illayo check cheeyane 


if ("total" in students){

    console.log("present");

}

else{
    console.log("not present");
}


// if points exist add 10 to current point else add points as 15

if ("points" in students){

    students.points +=10
}
else{

    students.points=15
}

console.log(students);

