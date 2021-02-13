
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({
    amount: 10000,
    years: 15,
    rate: 4
  })).toEqual('73.97')

  expect(calculateMonthlyPayment({
    amount: 30000,
    years: 30,
    rate: 5
  })).toEqual('161.05')
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({
    amount: 0,
    years: 15,
    rate: 4
  })).toEqual('0.00')
});

/// etc
