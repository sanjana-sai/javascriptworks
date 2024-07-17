//inheritance


class Parent{
    m1(){
        console.log("inside the parent class");
    }
}

class Child extends Parent{

    m2(){
        
        console.log("inside the child class");
    }
}


var ch =new Child()

ch.m2()

ch.m1()