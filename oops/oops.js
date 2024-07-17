

class Student{
    
    //setStudent(name,course,degree){
    constructor(name,course,degree){     //constructor is used to intialize the variable
        this.name=name;
        this.course=course;
        this.degree=degree;
    }
    printStudent(){
        console.log(this.name,this.course,this.degree);
    }
}

var obj=new Student("vipin","django","bsc cs")    // creating an obj to call the class  constructor variables value cangive here.


//obj.setStudent("vipin","django","bsc cs")    

obj.printStudent()