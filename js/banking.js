// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    //update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    //update account Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    //clear the deposit input field
    depositInput.value = "";
})

// handle withdraw event handler
document.getElementById('withdrow-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdrow-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    //set withdrow total
    const withdrowTotal = document.getElementById('withdrow-total');
    const previousWithdrowText = withdrowTotal.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowText);
    const newWithdrowTotal = previousWithdrowTotal + withdrawAmount;
    withdrowTotal.innerText = newWithdrowTotal;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the withdrow input field
    withdrawInput.value = "";
})