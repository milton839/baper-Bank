//Deposit and Balance system
document.getElementById('deposit-button').addEventListener('click', function(){
    //Update Deposit system
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    depositInput.value = '';

    const depositShow = document.getElementById('deposit-amount');
    const currentDepositAmountText = depositShow.innerText;
    const currentDepositAmount = parseFloat(currentDepositAmountText);
    
    const totalDepositAmount = currentDepositAmount + newDepositAmount;
    depositShow.innerText = totalDepositAmount;

    
    //Update total Balance
    const balance = document.getElementById('total-balance');
    const balanceAmount = balance.innerText;
    const currentBalanceAmount = parseFloat(balanceAmount);

    const totalBalance = currentBalanceAmount + newDepositAmount;
    balance.innerText = totalBalance;
})


//Withdraw and Balance system
document.getElementById('withdraw-button').addEventListener('click', function(){
    //update withdraw system
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    withdrawInput.value = '';

    const withdrawShow = document.getElementById('withdraw-total');
    const currentWithdrawAmountText = withdrawShow.innerText;
    const currentWithdrawAmount = parseFloat(currentWithdrawAmountText);

    const totalWithdraw = currentWithdrawAmount + newWithdrawAmount;
    withdrawShow.innerText = totalWithdraw;

    //Update Balance
    const balance = document.getElementById('total-balance');
    const balanceAmount = balance.innerText;
    const currentBalanceAmount = parseFloat(balanceAmount);

    const totalBalance = currentBalanceAmount - newWithdrawAmount;
    balance.innerText = totalBalance;
})