"use strict";
var Percentage = (function () {
    function Percentage() {
    }
    Percentage.pf = function (num) {
        return parseFloat(num);
    };
    Percentage.percOfSumAsPart = function (percent, sum) {
        return (this.pf(sum) * this.pf(percent)) / 100;
    };
    Percentage.partOfPercAsSum = function (percent, part) {
        percent = this.pf(percent);
        return (percent === 0) ? 0 : (this.pf(part) * 100) / percent;
    };
    Percentage.partOfSumAsPerc = function (part, sum) {
        sum = this.pf(sum);
        return (sum === 0) ? 0 : (this.pf(part) * 100) / sum;
    };
    Percentage.subPerc = function (num, percent) {
        return this.pf(num) - this.percOfSumAsPart(percent, num);
    };
    Percentage.addPerc = function (num, percent) {
        return this.pf(num) + this.percOfSumAsPart(percent, num);
    };
    Percentage.subNumsAsPerc = function (num1, num2) {
        return this.partOfSumAsPerc(this.pf(num1) - this.pf(num2), num2);
    };
    Percentage.diffNumsAsPerc = function (num1, num2) {
        return 100 - this.partOfSumAsPerc(num2, num1);
    };
    Percentage.compareNumsAsPerc = function (num1, num2) {
        var rev = false;
        num1 = this.pf(num1);
        num2 = this.pf(num2);
        if (num2 > num1) {
            var buf = num1;
            num1 = num2;
            num2 = buf;
            rev = true;
        }
        var res = 100 - this.partOfSumAsPerc(num2, num1);
        return rev ? res * -1 : res;
    };
    return Percentage;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Percentage;
