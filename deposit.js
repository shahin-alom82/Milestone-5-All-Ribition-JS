// // Deposit Section

// document.getElementById('Submit-btn').addEventListener('click', function () {
//     // Deposit Input Feild
//     const depositInputFeild = document.getElementById('user-deposit');
//     const depositInputString = depositInputFeild.value;
//     const depositInputValue = parseFloat(depositInputString)

//     // Deposit Feild
//     const depositValue = document.getElementById('deposit-mooney');
//     const depositValueString = depositValue.innerText;
//     const deposit = parseFloat(depositValueString)

//     const sum = depositInputValue + deposit;
//     depositValue.innerText = sum;

//     // Balance Feild
//     const balanceFeild = document.getElementById('balance-feild');
//     const balanceFeildString = balanceFeild.innerText;
//     const balance = parseFloat(balanceFeildString)

//     const newBalance = depositInputValue + balance;
//     balanceFeild.innerText = newBalance;
//     depositInputFeild.value = ''

// })


// document.getElementById('deposit').addEventListener('click', function () {
//     const depositInputFeild = document.getElementById('user-deposit');
//     const depositInputString = depositInputFeild.value;
//     const depositInputValue = parseFloat(depositInputString);

//     const depositValue = document.getElementById('deposit-mooney');
//     const depositInputValueString = depositValue.innerText;
//     const deposit = parseFloat(depositInputValueString)

//     const sum = depositInputValue + deposit
//     depositValue.innerText = sum;

//     // Balance Feild

//     const balanceFeild = document.getElementById('balance-feild');
//     const balanceFeildString = balanceFeild.innerText;
//     const balance = parseFloat(balanceFeildString);

//     const newBalance = depositInputValue + balance;
//     balanceFeild.innerText = newBalance;

//     depositInputFeild.value = '';

// })



document.getElementById('deposit').addEventListener('click', function () {
    const depositInputFeild = document.getElementById('user-deposit');
    const depositInputString = depositInputFeild.value;
    const depositInputValue = parseFloat(depositInputString)

    // Deposit Balance
    const depositValue = document.getElementById('deposit-mooney');
    const depositValueString = depositValue.innerText;
    const deposit = parseFloat(depositValueString)

    const sum = depositInputValue + deposit;
    depositValue.innerText = sum;

    // Balance
    const balanceFeild = document.getElementById('balance-feild');
    const balanceFeildString = balanceFeild.innerText;
    const balance = parseFloat(balanceFeildString);


    const newBalance = depositInputValue + balance;
    balanceFeild.innerText = newBalance;

    depositInputFeild.value = '';
})



// Withdraw Section
// document.getElementById('Withdraw').addEventListener('click', function () {
//     // Withdraw Input Feild
//     const withdrawInputFeild = document.getElementById('user-withdraw');
//     const withdrawStringFeild = withdrawInputFeild.value;
//     const windrawInputValue = parseFloat(withdrawStringFeild)
//     // Withdraw Feild
//     const withdrawValue = document.getElementById('withdraw-money');
//     const withdrawValueString = withdrawValue.innerText;
//     const windraw = parseFloat(withdrawValueString)

//     const withdrawTotalBalance = windrawInputValue + windraw;
//     withdrawValue.innerText = withdrawTotalBalance;

//     const balanceFeilds = document.getElementById('balance-feild');
//     const balanceFeildStrings = balanceFeilds.innerText;
//     const balances = parseFloat(balanceFeildStrings)

//     const ammount = balances - windrawInputValue;
//     balanceFeilds.innerText = ammount;

//     withdrawInputFeild.value = '';

// })


document.getElementById('Withdraw').addEventListener('click', function () {

    // Withdraw Input Feild
    const withdrawInputFeild = document.getElementById('user-withdraw');
    const withdrawStringFeild = withdrawInputFeild.value;
    const windrawInputValue = parseFloat(withdrawStringFeild);


    // Withdraw Mooney Feild
    const withdrawValue = document.getElementById('withdraw-money');
    const withdrawValueString = withdrawValue.innerText;
    const withdraw = parseFloat(withdrawValueString)

    

    const withdrawTotalBalance = windrawInputValue + withdraw;
    withdrawValue.innerText = withdrawTotalBalance;

    // Balance Feild
    const balanceFeilds = document.getElementById('balance-feild');
    const balanceFeildStrings = balanceFeilds.innerText;
    const balances = parseFloat(balanceFeildStrings);

    const ammount = balances - windrawInputValue;
    balanceFeilds.innerText = ammount;

    // if (windrawInputValue > withdraw) {
    //     Swal.fire({
    //         icon: "error",
    //         title: "আপনার একাউন্টে পর্যাপ্ত পারিমান টাকা নেই দয়া করে  আবার চেষ্টা করুন !",
    //         text: "ধন্যবাদ",
    //     });
    //     return;
    // }

    withdrawInputFeild.value = '';

})


