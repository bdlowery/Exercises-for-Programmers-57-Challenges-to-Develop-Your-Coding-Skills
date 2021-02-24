let detectClick = false;

let calculateTip = () => {

  //initialize billAmount
  const billAmount = parseInt(document.getElementById('billAmount').value);
  //initialize tipRate
  const tipRate = parseInt(document.getElementById('tipRate').value);
  const tipRateDisplay = document.getElementById('tipRateDisplay');
  const totalBill = document.getElementById('totalBill');


  

  if(detectClick = false) {

   if (tipRate > 0 && billAmount > 0) {
    let parsedTipRateDisplay = 0;
    let parsedTotalBill = 0;

     parsedTipRateDisplay = billAmount * (tipRate / 100);
     parsedTotalBill = billAmount + parsedTipRateDisplay;

    tipRateDisplay.textContent = "Tip RatE:" + parsedTipRateDisplay;
    totalBill.textContent = "Total BILL:" + parsedTotalBill;
   }

    
  }
}