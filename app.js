const billAmount = document.querySelector("#billAmount")
const userAmount = document.querySelector('#userAmount')
const nextBtn = document.querySelector('.next-btn')
const checkBtn = document.querySelector('.check-btn')
const errorMsg = document.querySelector('.errorMsg')
const noOfNotes = document.querySelectorAll('.no-of-notes')
const pHide = document.querySelector('.p-hide')
const hide = document.querySelector('.hide')
hide.style.display = "none"

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]

checkBtn.addEventListener('click', checkBillAndUserAmount)

function checkBillAndUserAmount(){
    if (billAmount.value > 0) {
        errorMsg.style.display = "none"
        checkUserAndBillAmount()
    }
    else {
        showErrorMsg("Your bill amount is less than zero, please check")
    }
}

function checkUserAndBillAmount() {
    if (Number(userAmount.value) >= Number(billAmount.value)) {
        // need to calculate the change
        const amountToBeReturned = userAmount.value - billAmount.value
        calculateChange(amountToBeReturned)
    }
    else {
        showErrorMsg("Cash given should be greater or equal to the bill amount, please check")
    }
}

function calculateChange(amountToBeReturned) {
    for(let i = 0; i < availableNotes.length; i++){
        const numberofNotes = Math.trunc(amountToBeReturned / availableNotes[i])
        // need to update the amount
        amountToBeReturned %= availableNotes[i]
        noOfNotes[i].innerText = numberofNotes;
    }
}

function showErrorMsg(message){
    errorMsg.style.display = "block"
    errorMsg.innerText = message
}

nextBtn.addEventListener('click', () => {
    const amount = billAmount.value
    if (amount >= 1) {
        hide.style.display = "block" 
        pHide.innerText = ""
    }
    else{
        pHide.innerText = "Invalid Amount, please check"
    }
})


