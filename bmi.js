var weightInKg=75;

var heightInCm=165;

var heightInMeter=heightInCm/100;



var bmi=Math.round((weightInKg)/(heightInMeter**2));

console.log(bmi);



if(bmi<18.5){

    console.log("body is underweight");
}

else if(bmi>18.5 && bmi<24.9){

    console.log("normal");
}
else if(bmi>25 && bmi<=30){

    console.log("overweight");

}