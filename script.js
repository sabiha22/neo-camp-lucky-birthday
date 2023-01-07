const dateOfBirth= document.querySelector("#date-of-birth");
const luckyNumber= document.querySelector("#lucky-number");
const checkNumberButton= document.querySelector("#check-number");
const outputBox= document.querySelector("#output-box");

function compareValues(sum,luckyNumber){
    //console.log(sum,luckyNumber);
    if(luckyNumber>0) 
    {
        if(sum%luckyNumber==0)
            outputBox.innerHTML="Your Birthday is lucky";
        else{
            outputBox.innerHTML="Your Birthday is not lucky";
        }
    }
    else
        outputBox.innerHTML="Please enter number greater than 0";
}
function checkBirthdayIsLucky(){
    const dob = dateOfBirth.value;
    //console.log(dob);
    const sum=calculateSum(dob);
    //console.log(sum);
    if(sum&&dob)
        compareValues(sum,luckyNumber.value);
    else
        outputBox.innerText= "Please enter both the fields";
}

function calculateSum(dob){
    dob=dob.replaceAll("-","");
    //console.log(dob);
    let sum=0;
    //console.log(dob.length);
    //console.log(Number(dob.charAt(0)));
    for(let i=0; i<dob.length;i++){
        sum+=Number(dob.charAt(i));
    }
    return sum;
}
checkNumberButton.addEventListener('click',checkBirthdayIsLucky);
