//find the costlyone
 
var items={potatto:45,tomato:50,ginger:250,garlic:300,onion:35}

//  object shouls xhange into nested array

var nestedArray=Object.entries(items)

///var items=[

    //["potato",45],
    //["tomato",50],       nested array
   // ["ginger",250],
    //["garlic",300],
   // ["onion",35]
///]

//reduce

var costlyItems=nestedArray.reduce((p1,p2)=>p1[1]>p2[1]?p1:p2)

console.log(costlyItems);