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
//Step 2 Test Cases
test('any amount of numbers',()=>{
    expect(sumCalculator('1,2,3,4,5')).toBe(15);  // any amount of numbers
    expect(sumCalculator(',,3,4,%,6')).toBe(13);  // if there is some special char
    expect(sumCalculator('10,2,1')).toBe(13); // double digit
})
// Step 3 Test Cases
test('\n in between number',()=>{
    expect(sumCalculator('1\n2,3')).toBe(6);  // test case for \n
    expect(sumCalculator('1\n2')).toBe(3);
    expect(sumCalculator('4,1\n2')).toBe(7);
    expect(sumCalculator('40,10\n2')).toBe(52);
})
//Step 4 Test Cases
test('Delimeter between Numbers',()=>{
    expect(sumCalculator('//;\n1;2')).toBe(3);  // test case for ;
    expect(sumCalculator('//-\n3-5')).toBe(8); // it will work for any delimiter now 
})
//Step 5 Test Cases
test('throws error for negative numbers', () => {
    expect(()=>sumCalculator('//;\n3;-5')).toThrow('Negative numbers not allowed: -5');
    expect(()=>sumCalculator('//;\n3;-5;-6;-8,9')).toThrow('Negative numbers not allowed: -5,-6,-8');
    expect(()=>sumCalculator('-5,-3')).toThrow('Negative numbers not allowed: -5,-3');
    expect(()=>sumCalculator('1\n-3,-5')).toThrow('Negative numbers not allowed: -3,-5');
});

  


