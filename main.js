let btn = documents.getElementById('button');

btn.addEventListener('click', function(){
  let billAmount = document.getElementById('bill-amount').value;
  let tipPercentage = document.getElementById('tip-percentage').value;

  
  let tipAmount = document.getElementById('tip_amount').value = billAmount / tipPercentage;
  document.getElementById('total_bill').value = parseFloat(billAmount) + parseFloat(tipAmount);

 })
