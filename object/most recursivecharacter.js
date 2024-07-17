var text="pneumonoultramicroscopicsilicovolcanoconiosi"

//most recursive character

var letters={}

for (let l of text){

    if (l in letters){

        letters[l]+=1

    }

    else{

        letters[l]=1

    }

    
}

console.log(letters)

var nestedText=Object.entries(letters)

console.log(nestedText)


var maxLetter =nestedText.reduce((o1,o2)=>o1[1]>o2[1]?o1:o2)

console.log(maxLetter)