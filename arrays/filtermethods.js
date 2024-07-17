var arr=[10,11,12,13,14,15,16]

//filter()

//numGtFifteen   (number greater than fifteen)


var numGtFifteen=arr.filter(num=>num>15)

console.log(numGtFifteen)


//  odd numbers


var odd=arr.filter(num=>num%2!=0)

console.log(odd)

//even  numbers

var even=arr.filter(num=>num%2==0)

//console.log(even)


// map()


var arr1=["program","project","profile","profession","python"]

var upperCaseStrings=arr1.map(w=>w.toUpperCase())

//console.log(upperCaseStrings)


//print length of each string object in the array

var lengthString=arr1.map(l=>l.length)

//console.log(lengthString)

//return words starting with "pro"

var wordsStart=arr1.filter(w=>w.startsWith("pro"))

//console.log(wordsStart)


//reduce()

//total,max,min,product

//var total=arr.reduce((n1,n2)=>n1+n2)

//console.log(total)


var product=arr.reduce((n1,n2)=>n1*n2)

//console.log(product)

//var maxDigit=arr.reduce((n1,n2)=>n1>n2?n1:n2)

//console.log(maxDigit)

var minDigit=arr.reduce((n1,n2)=>n1<n2?n1:n2)

//console.log(minDigit)



//print longest word in a array

var longestWord=arr1.reduce((w1,w2)=>w1.length>w2.length?w1:w2)

//console.log(longestWord);

var shortestWord=arr1.reduce((w1,w2)=>w1.length<w2.length?w1:w2)

//console.log(shortestWord)


//sort() 

var arr2=[20,22,27,14,17,19]

arr2.sort()

console.log(arr2);





