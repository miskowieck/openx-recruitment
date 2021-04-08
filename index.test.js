const { expressionStatement } = require("@babel/types");
const { test, expect } = require("@jest/globals");
const { EXPECTED_COLOR } = require("jest-matcher-utils");
const {calculator,Node} = require("./index");

test("Should return median: 8",()=>{
    expect(calculator.median([9,10,5,3,8])).toBe(8);
});

test("Should return median: 6.5", ()=>{
    expect(calculator.median([12,9,1,7,6,2])).toBe(6.5);
});

test("Should return sum: 15",()=>{
    expect(calculator.sum([3,1,5,2,4])).toBe(15);
});

test("Should return sum: -9",()=>{
    expect(calculator.sum([-2,5,-7,-5])).toBe(-9);
});

root = new Node(5);
root.left = new Node(3);
root.left.left = new Node(2);
root.left.right = new Node(5);
root.right = new Node(7);
root.right.left = new Node(1);
root.right.right = new Node(0);
root.right.right.right = new Node(8);
root.right.right.left = new Node(2);
root.right.right.right.right = new Node(5);

test("Should return values: [3,2,5]",()=>{
    expect(calculator.add(root.left)).toStrictEqual([3,2,5]);
});

test("Should return sum, median, average value: 38, 4, 3.8", ()=>{
    expect(calculator.calculate(root)).toStrictEqual([38,4,3.8]);
});