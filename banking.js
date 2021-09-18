// const depositButton = document.getElementById('deposit-button');
// depositButton.addEventListener('click', function(){
//     const depositInput = document.getElementById('deposit-input');
//     const newDepositAmountText = depositInput.value;
//     const newDepositAmount = parseFloat(newDepositAmountText)
    
//     const depositTotal = document.getElementById('deposit-total');
//     const previousDepositText = depositTotal.innerText;
//     const previousDepositAmount = parseFloat(previousDepositText)

//     const newDepositTotal = previousDepositAmount + newDepositAmount;
//     depositTotal.innerText = newDepositTotal;

    
//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalanceText = balanceTotal.innerText;
//     const previousBalanceAmount = parseFloat(previousBalanceText)

//     const newBalanceTotal = previousBalanceAmount + newDepositAmount;
//     balanceTotal.innerText = newBalanceTotal;

//     depositInput.value = '';
// })


// const withdrawButton = document.getElementById('withdraw-button');
// withdrawButton.addEventListener('click', function(){
//     const withdrawInput = document.getElementById('withdraw-input');
//     const newWithdrawAmountText = withdrawInput.value;
//     const newWithdrawAmount = parseFloat(newWithdrawAmountText);

//     const withdrawTotal = document.getElementById('withdraw-total');
//     const previousWithdrawText = withdrawTotal.innerText;
//     const previousWithdrawAmount = parseFloat(previousWithdrawText);

//     const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
//     withdrawTotal.innerText = newWithdrawTotal;


//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalanceText = balanceTotal.innerText;
//     const previousBalanceAmount = parseFloat(previousBalanceText)

//     const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
//     balanceTotal.innerText = newBalanceTotal;

//     withdrawInput.value = '';
// })

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

// function getInputValue(inputId){
//     const inputField = document.getElementById(inputId);
//     const inputAmountText = inputField.value;
//     const amountValue = parseFloat(inputAmountText);
//     inputField.value = '';
//     return amountValue;
// }

// function updateTotalField(totalFieldId, amount){
//     // debugger;
//     const totalElement = document.getElementById(totalFieldId);
//     const totalText = totalElement.innerText;
//     const previousAmount = parseFloat(totalText);

//     totalElement.innerText = previousAmount + amount;
// }

// function getCurrentBalance(){
//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalanceText = balanceTotal.innerText;
//     const previousBalanceAmount = parseFloat(previousBalanceText);
//     return previousBalanceAmount;
// }

// function updateBalance(amount, isAdd){
//     const balanceTotal = document.getElementById('balance-total');
//     // const previousBalanceText = balanceTotal.innerText;
//     // const previousBalanceAmount = parseFloat(previousBalanceText)
//     const previousBalanceAmount = getCurrentBalance();
//     if(isAdd == true){
//         balanceTotal.innerText = previousBalanceAmount + amount;
//     }
//     else{
//         balanceTotal.innerText = previousBalanceAmount - amount;
//     }
// }

// const depositButton = document.getElementById('deposit-button');
// depositButton.addEventListener('click', function(){
//     // const depositInput = document.getElementById('deposit-input');
//     // const newDepositAmountText = depositInput.value;
//     // const newDepositAmount = parseFloat(newDepositAmountText)

    
//     // const depositTotal = document.getElementById('deposit-total');
//     // const previousDepositText = depositTotal.innerText;
//     // const previousDepositAmount = parseFloat(previousDepositText)

//     // depositTotal.innerText = previousDepositAmount + newDepositAmount;
   
    
//     // const balanceTotal = document.getElementById('balance-total');
//     // const previousBalanceText = balanceTotal.innerText;
//     // const previousBalanceAmount = parseFloat(previousBalanceText)
//     // balanceTotal.innerText = previousBalanceAmount + depositAmount;
    
//     // depositInput.value = '';

//     const depositAmount = getInputValue('deposit-input');
//     if(depositAmount > 0){
//         updateTotalField('deposit-total', depositAmount)
//         updateBalance(depositAmount, true)  
//     }
// })


// const withdrawButton = document.getElementById('withdraw-button');
// withdrawButton.addEventListener('click', function(){
//     // const withdrawInput = document.getElementById('withdraw-input');
//     // const newWithdrawAmountText = withdrawInput.value;
//     // const newWithdrawAmount = parseFloat(newWithdrawAmountText);

//     // const withdrawTotal = document.getElementById('withdraw-total');
//     // const previousWithdrawText = withdrawTotal.innerText;
//     // const previousWithdrawAmount = parseFloat(previousWithdrawText);
//     // withdrawTotal.innerText = previousWithdrawAmount + newWithdrawAmount;
    

//     // const balanceTotal = document.getElementById('balance-total');
//     // const previousBalanceText = balanceTotal.innerText;
//     // const previousBalanceAmount = parseFloat(previousBalanceText)
//     // balanceTotal.innerText = previousBalanceAmount - withdrawAmount;

//     // withdrawInput.value = '';

//     const withdrawAmount = getInputValue('withdraw-input');
//     const currentBalance = getCurrentBalance();
//     if(withdrawAmount > 0 && withdrawAmount < currentBalance){
//         updateTotalField('withdraw-total', withdrawAmount)
//         updateBalance(withdrawAmount, false);
//    }

// })


// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

// deposit and withdraw input value
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}

// deposit and withdraw function
function updateTotal(fieldId, amount){
    // const totalTag = document.getElementById(fieldId);
    // const previousTotalInText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalInText);
    // const newTotal = previousTotal + amount;
    // totalTag.innerText = newTotal;
    // return newTotal;
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}

// every innerText value use er jnno
function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}

// update total balance 
function updateBalance(amount, isAdd){
    // const balanceTag = document.getElementById('balance-total');
    // const balanceInText = balanceTag.innerText;
    // const previousBalance = parseFloat(balanceInText);
    // let newBalance = previousBalance;
    // if(isAdd == true){
    //     newBalance = previousBalance + amount
    // }
    // else{
    //     newBalance = previousBalance - amount
    // }
    // balanceTag.innerText = newBalance;

    const previousBalance = getInnerTextValue('balance-total');
    let newBalance = previousBalance;
    if(isAdd == true){
        newBalance = previousBalance + amount
    }
    else{
        newBalance = previousBalance - amount
    }
    document.getElementById('balance-total').innerText = newBalance;
}


// deposit button
document.getElementById('deposit-button').addEventListener('click', function() {
    const amount = getInputValue('deposit-input');
    if(amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
})
// withdraw button
document.getElementById('withdraw-button').addEventListener('click', function() {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if(amount > 0 && amount <= balance){
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
})