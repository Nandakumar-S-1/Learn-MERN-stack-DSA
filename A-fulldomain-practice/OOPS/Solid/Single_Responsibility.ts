class CreditPayment {
  process(amount: number) {
    console.log("Processing credit:", amount);
  }
}

class PaypalPayment {
  process(amount: number) {
    console.log("Processing PayPal:", amount);
  }
}

class UpiPayment {
  process(amount: number) {
    console.log("Processing UPI:", amount);
  }
}