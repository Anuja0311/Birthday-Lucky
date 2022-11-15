const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-no");
const checkButton = document.querySelector("#submit-button");
const outputBox= document.querySelector(".output");

function compareValues(sum,luckyNumber){
    if(sum%luckyNumber==0)
    {
        outputBox.innerText="hoorree!,Your birthday is lucky 💃";
    }else{
        outputBox.innerText="your birthday is not lucky 😢";
    }
}

function checkBirthDateIsLucky(){
    dateOfB=dateOfBirth.value;
    const sum=calculateSum(dateOfB);
    if(sum&&dateOfB)
    compareValues(sum,luckyNumber.value)
    else
    outputBox.innerText="Please enter both the fields 😡"
}
 
function calculateSum(){
    dateOfB=dateOfB.replaceAll("-","");
    let sum=0;
    for(let i=0;i<dateOfB;i++){
        sum=sum+Number(dateOfB.charAt(i));
    }
    return sum;
}


checkButton.addEventListener('click', checkBirthDateIsLucky)
