// basic tip function with bill splitting capability built in.

function tip(bill_amount, service, diners) {
  if (service == 'good') {
    bill_amount = bill_amount + (bill_amount * 0.2);
    bill_amount = bill_amount / diners;
    console.log(bill_amount);
  }
  else if (service == 'fair') {
    bill_amount = bill_amount + (bill_amount * 0.15);
    bill_amount = bill_amount / diners;
    console.log(bill_amount);
  }
  else if (service == 'poor') {
    bill_amount = bill_amount + (bill_amount * 0.10);
    bill_amount = bill_amount / diners;
    console.log(bill_amount);
  }
}

tip(100, 'poor', 1);
