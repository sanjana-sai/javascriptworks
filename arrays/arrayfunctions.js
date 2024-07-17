

var arr=[10,11,12,13,14,15,16]

//arrow function
// if num<12  num-1

//if num>12 num+1

var result=arr.map((num)=>num>12?num+1:num<12?num-1:num)


console.log(result);
