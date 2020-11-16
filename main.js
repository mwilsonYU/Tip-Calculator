var btn = document.getElementById('button');

btn.addEventListener('click', function(){
  var billAmount = Number(document.getElementById('bill_amount').value);
  var tipPercentage = Number(document.getElementById('tip_percentage').value);

  
  var tipAmount = document.getElementById('tip_amount').value = billAmount * tipPercentage;
  document.getElementById('total_bill').value = parseFloat(billAmount) + parseFloat(tipAmount);

 })
