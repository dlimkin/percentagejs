PercentageJS
=============
JavaScript and TypeScript percentage library

## Get Started

### Install

```sh
npm i percentagejs -S
```

### Use

#### Node

```js
//…
const Percentage = require("percentagejs");
//…
```
#### Browserify

```js
<script src="percentage.js"></script>
<script>
//…
var res = Percentage.addPerc(200, 10);  // 220
//…
</script>
```

## Description
```js
class Percentage {
    // Considers the percentage of the amount equivalent to multiplying by the percentage
    // Example: 10% of 200 = x {20}
    static percOfSumAsPart(percent: number | string, sum: number | string): number;
    
    // Believes the amount, the specified portion which is the specified percent
    // Example: 10% of x = 20 {200}
    static partOfPercAsSum(percent: number, part: number): number;
    
    // Considers how much percent of the amount is part.
    // Example: 10 of 200 = x% {5%}
    static partOfSumAsPerc(part: number, sum: number): number;
    
    // Subtracts from the number of percentages
    // Example: 200 - 10% = x {180}
    static subPerc(num: number, percent: number): number;
    
    // Adds to the number of percentages
    // Example: 200 + 10% = x {220}
    static addPerc(num: number, percent: number): number;
    
    // Returns the difference with respect to the first day of the second of percentages
    // Example: 10 - 12 = x {-16.6% (12-16.6% = 10)}
    // Example: 12 - 10 = x {20% (10 + 20% = 12)}
    static subNumsAsPerc(num1: number, num2: number): number;
    
    // Example: 4 - 2 = 50%
    // Example: 2 - 4 = -100%
    static diffNumsAsPerc(num1: number, num2: number): number;
    
    // Returns the difference of two numbers as a percentage of the module (with sign)
    // Example: 4 - 2 = x {50%}
    // Example: 2 - 4 = x {-50%}
    static compareNumsAsPerc(num1: number, num2: number): number;
}
```
