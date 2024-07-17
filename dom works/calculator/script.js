var pointFrequency=1

function displayNumber(event){

    //let num =event.target.value

   // document.querySelector("#result").value+=num

 
   const operator=["+","-","*","/","."]

   
   let textBox=document.querySelector("#result")  

    // extract currentexpression

   let currentExpression=textBox.value;

   // extract displaynumber

   let currentDisplayNumber=event.target.value

   if(currentDisplayNumber=="." && pointFrequency==1){

    pointFrequency=0
   }
   else if(currentDisplayNumber=="." && pointFrequency==0){

    return

   }

   
   

   // extract last charcter from  currentexpression

   let curExpLastchar=currentExpression.slice(-1)

   // chk  whether displayNumber and curExplastchar are operators

   if (operator.includes(currentDisplayNumber) && operator.includes(curExpLastchar)){

    //remove the last character from currentExpression

       currentExpression=currentExpression.slice(0,-1)
   }

    // append the displaynumber with currentExpression

   textBox.value=currentExpression+currentDisplayNumber
}


function clearNumber() {
    
    document.querySelector("#result").value=""


}

function evaluateExpression(){

    let currentExpression=document.querySelector("#result").value

    let result=eval(currentExpression)

    document.querySelector("#result").value=result

}

function backSpace(){

    let currentExpression=document.querySelector("#result").value
  
    let result=currentExpression.slice(0,-1)

    document.querySelector("#result").value=result

}

