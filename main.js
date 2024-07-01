var exchangeform = document.querySelector(".exchangeform");

exchangeform.onsubmit = function(e){
    e.preventDefault();
    var Amount = e.target.amount.value;
    var currency = document.getElementById("exchange").value;
    function Convert(Amount,currency){
        if(currency == "USD"){
            return Amount * 3.5 + " " + currency;
        } else if (currency == "JOR") {
            return Amount * 5 + " " + currency;
        } else {
            return Amount + " " + currency ;
        }   
    }
    document.querySelector(".result").innerHTML= Amount + " = "+ Convert(Amount, currency);

}



