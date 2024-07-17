
var str1="abc"

var str2="pqrst"

var output=""

str1.length>str2.length? smallestStr=str2:smallestStr=str1

console.log(smallestStr);

for(let i=0;i<smallestStr.length;i++){

   
         output+=str1[i]+str2[i]
        
}
        
  
console.log(output)


