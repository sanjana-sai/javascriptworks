

var number=1634;


//3**3=27
//5**3
//1**3=1

//result=153
var original=number

var number_count=String(number).length

var total=0

while(number!=0){

    let digit=number%10;

    let  cube=digit**number_count;

    total=total+cube;

    number=Math.floor(number/10);


}

console.log(total);

console.log(original==total? "armstrong":"not armstrong");


