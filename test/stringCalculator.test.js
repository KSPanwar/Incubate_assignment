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