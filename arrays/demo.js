//array [] perserved,duplicates,allowed,mutable

//object


var expenses=[10000,15000,45000,32000]

//             0      1      2     3


console.log(expenses[0]);

expenses[0]=20000 // to update the 1st value

console.log(expenses);


console.log("-------------")//seperation


//iterate

for(let i=0;i<expenses.length;i++){

    console.log(expenses[i]);
}

console.log("-------------")//seperation
// using   "of"  we can iterate


for(let num  of expenses){

    console.log(num);
}

