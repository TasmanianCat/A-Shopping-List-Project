const calculateButton = document.getElementById('calculateButton');
const resetButton = document.getElementById('resetButton');
const totalQuantityElement = document.getElementById('totalQuantity');
const totalMoneyElement = document.getElementById('totalMoney');

calculateButton.addEventListener('click', calculateTotals);
resetButton.addEventListener('click', resetForm);


function calculateTotals() {
    let totalQuantity = 0;
    let totalMoney = 0;

    for (let i = 1; i <= 12; i++) {
        const itemQuantity = parseInt(document.getElementById('q' + i).value) || 0;
        const itemPrice = parseFloat(document.getElementById('i' + i).value) || 0;

        totalQuantity += itemQuantity;
        totalMoney += itemPrice * itemQuantity;
    }

    totalQuantityElement.textContent = totalQuantity;
    totalMoneyElement.textContent = totalMoney.toFixed(2); // Display total money with 2 decimal places
}

// RESET VALUES
function resetForm() {
    totalMoneyElement.textContent = '0.00';
    totalQuantityElement.textContent = '0';

    for (let i = 1; i <= 12; i++) {
        document.getElementById('i' + i).value = '';
        document.getElementById('q' + i).value = '';
        document.querySelectorAll('[name="name-1"], [name="name-2"], [name="name-3"], [name="name-4"]').forEach(element => {
            element.value = '';
        });

        // Another option to reset names of products bellow
        // ['name1', 'name2', 'name3'].forEach(id => {
        //     const element = document.getElementById(id);
        //     if (element) {
        //         element.value = '';
        //     }
        // });
    }
}