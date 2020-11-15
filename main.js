let btn = document.getElementById('button');

btn.addEventListener('click', function(){
  let billAmount = Number(document.getElementById('bill-amount').value);
  let tipPercentage = Number(document.getElementById('tip-percentage').value);

  
  let tipAmount = document.getElementById('tip_amount').value = billAmount * tipPercentage;
  document.getElementById('total_bill').value = parseFloat(billAmount) + parseFloat(tipAmount);

 })
