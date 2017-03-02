function tip(bill_amount, service) {
  if (service == 'good') {
    bill_amount = bill_amount + (bill_amount * 0.2);
    console.log(bill_amount);
  }
  else if (service == 'fair') {
    bill_amount = bill_amount + (bill_amount * 0.15);
    console.log(bill_amount);
  }
  else if (service == 'poor') {
    bill_amount = bill_amount + (bill_amount * 0.10);
    console.log(bill_amount);
  }
}

tip(100, 'poor');
