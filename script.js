function alertUser(){
    alert('Taking you to payment page');
}

function cancelOrder(){
    if(confirm('Are you sure you want to cancel your order?') == true){
        alert('Order has been canceled. Redirecting you back to homepage');
        location.href='https://www.google.com/';
    }
}

function changePlan(){
    if(confirm('Change your plan?') == true){
        alert('Please select your new plan at the current available options.');
    }
}