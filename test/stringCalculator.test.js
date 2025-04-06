const sumCalculator = require('../code/sumCalculator');

// STEP 1 TEST CASES :
test('empty string',()=>{
    expect(sumCalculator('')).toBe(0);   // test case for empty String
})

test('single number',()=>{
    expect(sumCalculator('1')).toBe(1);
    expect(sumCalculator('!')).toBe(0);  // test case for single number
})

test('two numbers',()=>{
    expect(sumCalculator('1,2')).toBe(3);  // only two numbers
    expect(sumCalculator(',4')).toBe(4);
})

test('any amount of numbers',()=>{
    expect(sumCalculator('1,2,3,4,5')).toBe(15);  // any amount of numbers
    expect(sumCalculator(',,3,4,%,6')).toBe(13);  // if there is some special char
    expect(sumCalculator('10,2,1')).toBe(13); // double digit
})