"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discr = b**2 - 4 * a * c;
  let r1, r2;

  if (discr > 0) {
    r1 = (-b + Math.sqrt(discr) )/(2 * a);
    r2 = (-b - Math.sqrt(discr) )/(2 * a);
    return arr = [r1, r2];
  } else if (discr === 0) {
    r1 = -b / (2 * a);
    return arr = [r1];
  } else {
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Ежемесячная процентная ставка
  let monthlyInterest = percent / 100 / 12;
  // Тело кредита
  let refundAmount = amount - contribution;
  // Ежемесячный платеж:  Платёж = S * (P + (P / (((1 + P)^n) - 1)))
  let monthlyPayment = refundAmount * (monthlyInterest + (monthlyInterest / (((1 + monthlyInterest)**countMonths) - 1)));
  // Общая сумма платежа
  let creditSum = monthlyPayment * countMonths;
  // Округляем платеж до двух знаков после запятой
  creditSum = creditSum.toFixed(2);

  return Number(creditSum);
}