/**
 * Created by dlimkin on 28.10.16.
 * Copyright (c) 2016, limkin.org
 */

export default class Percentage {

  private static pf(num: any): number {
    return parseFloat(num);
  }

  // Considers the percentage of the amount equivalent to multiplying by the percentage
  // Example: 10% of 200 = x {20}
  public static percOfSumAsPart(percent: number|string, sum: number|string): number {
    return (this.pf(sum) * this.pf(percent)) / 100;
  }


  // Believes the amount, the specified portion which is the specified percent
  // Example: 10% of x = 20 {200}
  public static partOfPercAsSum(percent: number, part: number) {
    percent = this.pf(percent);
    return (percent === 0) ? 0 : (this.pf(part) * 100) / percent;
  }

  // Considers how much percent of the amount is part.
  // Example: 10 of 200 = x% {5%}
  public static partOfSumAsPerc(part: number, sum: number) {
    sum = this.pf(sum);
    return (sum === 0) ? 0 : (this.pf(part) * 100) / sum;
  }

  // Subtracts from the number of percentages
  // Example: 200 - 10% = x {180}
  public static subPerc(num: number, percent: number) {
    return this.pf(num) - this.percOfSumAsPart(percent, num);
  }


  // Adds to the number of percentages
  // Example: 200 + 10% = x {220}
  public static addPerc(num: number, percent: number) {
    return this.pf(num) + this.percOfSumAsPart(percent, num);
  }


  // Returns the difference with respect to the first day of the second of percentages
  // Example: 10 - 12 = x {-16.6% (12-16.6% = 10)}
  // Example: 12 - 10 = x {20% (10 + 20% = 12)}
  public static subNumsAsPerc(num1: number, num2: number): number {
    return this.partOfSumAsPerc(this.pf(num1) - this.pf(num2), num2);
  }


  // TODO
  // Example: 4 - 2 = 50%
  // Example: 2 - 4 = -100%
  public static diffNumsAsPerc(num1: number, num2: number) {
    return 100 - this.partOfSumAsPerc(num2, num1);
  }

  // Returns the difference of two numbers as a percentage of the module (with sign)
  // Example: 4 - 2 = x {50%}
  // Example: 2 - 4 = x {-50%}
  public static compareNumsAsPerc(num1: number, num2: number) {
    let rev = false;
    num1 = this.pf(num1);
    num2 = this.pf(num2);

    if (num2 > num1) {
      let buf = num1;
      num1 = num2;
      num2 = buf;
      rev = true;
    }

    const res = 100 - this.partOfSumAsPerc(num2, num1);

    return rev ? res * -1 : res;
  }
}
