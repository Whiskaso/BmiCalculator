
function calculatingBMI(){

    //COLECTING DATA FROM INPUTS 
    const height = document.getElementById('heightInput').value;
    const weight = document.getElementById('weightInput').value;

    //CALCULATING BMI
    const bmi = weight / (height * height);

    let weightCategory = '';

    if (bmi < 18.5) {
        weightCategory = 'underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        weightCategory = 'normal';
    } else if (bmi >= 25 && bmi < 30) {
        weightCategory = 'overweight';
    } else {
        weightCategory = 'obesity';
    }


    //INSERT DATA TO HTML DOCUMENT
    document.querySelector('h2').innerHTML = `Your BMI is ${bmi.toFixed(1)}.`
    document.querySelector('h3').innerHTML = `You weight is: ${weightCategory}.`
    
    document.getElementById('printBmiCategories').innerHTML =  `BMI Categories:<br>Underweight = <18.5<br>Normal weight = 18.5–24.9<br>Overweight = 25–29.9<br>Obesity = BMI of 30 or greater`
}