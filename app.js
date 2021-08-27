const billsAmount = document.querySelector("#billsAmount");
const enteredAmount = document.querySelector('#enteredAmount');
const nextBtn = document.querySelector('.next-btn');
const checkBtn = document.querySelector('.check-btn');
const errorMsg = document.querySelector('.errorMsg');
const noOfNotes = document.querySelectorAll('.no-of-notes');
const hideP = document.querySelector('.hide-p');
const hide = document.querySelector('.hide');
hide.style.display = "none";

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]


function checkBillAndUserAmount(){
    if (billsAmount.value > 0) {
        errorMsg.style.display = "none"
        checkUserAndBillAmount()
    }
    else {
        showErrorMsg("Your bill amount is less than zero, please check!")
    }
};

function checkUserAndBillAmount() {
    if (Number(enteredAmount.value) >= Number(billsAmount.value)) {
        // need to calculate the change
        const amountToBeReturned = enteredAmount.value - billsAmount.value
        calculateChange(amountToBeReturned)
    }
    else {
        showErrorMsg("Cash given should be greater or equal to the bill amount, please check!")
    }
};



function calculateChange(amountToBeReturned) {
    for(let i = 0; i < availableNotes.length; i++){
        const numberofNotes = Math.trunc(amountToBeReturned / availableNotes[i])
        // need to update the amount
        amountToBeReturned %= availableNotes[i]
        noOfNotes[i].innerText = numberofNotes;
    }
};



nextBtn.addEventListener('click', () => {
    const amount = billsAmount.value
    if (amount >= 1) {
        hide.style.display = "block" 
        hideP.innerText = ""
    }
    else{
        hideP.innerText = "Invalid Amount, please check!"
    }
});

checkBtn.addEventListener('click', checkBillAndUserAmount);


function showErrorMsg(message){
    errorMsg.style.display = "block"
    errorMsg.innerText = message
};