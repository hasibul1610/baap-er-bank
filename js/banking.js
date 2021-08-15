// Deposit button handler 
document.getElementById('deposit-button').addEventListener('click',function(){

    // Getting the deposit input 
    const depositField = document.getElementById('deposit-input');
    const newDepositAmount = depositField.value ;

    // Get and set the deposit total 
    const depositTotal = document.getElementById('deposit-total');

    //Update deposit total 
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount); 

    depositTotal.innerText = newDepositTotal;

    //Update balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousbalanceTotal = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousbalanceTotal) + parseFloat(newDepositTotal); 

    balanceTotal.innerText = newBalanceTotal;

    // Clear the input field 
    depositField.value = '';


});
// withdraw button handler 
document.getElementById('withdraw-button').addEventListener('click',function(){

    // Getting the withdraw input 
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawField.value ;

    // Get and set the withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');

    //Update withdraw total 
    const previousWithdrawAmount = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount); 

    withdrawTotal.innerText = newWithdrawTotal;

    //Update balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousbalanceTotal = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousbalanceTotal) - parseFloat(newWithdrawTotal); 

    balanceTotal.innerText = newBalanceTotal;

    // Clear the input field 
    withdrawField.value = '';


});

