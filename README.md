# Incubyte_assignment
Incubate Assessment - String calculator 

we will do the assignment in the following steps:

# Step 1: Given a String s , it contains two number comma separater return the sum of the numbers
 For the given test case base cases can be 
 1. if the string is empty return 0;
![ScreenShot](./images/EmptyStringFail.jpg)
![ScreenShot](./images/EmptyStringPass.jpg)
 2. if the string contains only one number return that number;

 3. if the string contains two numbers return the sum of the two numbers;
![ScreenShot](./images/TwoNumbers.jpg)
![ScreenShot](./images/TwoNumbersPass.jpg)
 4. Last code refactor for Step1 
 ![ScreenShot](./images/Step1LastRefactor.jpg)
 # Step 2:  Given String s contains any amount of number comma separated
 no chnages in code function as all the test cases passed with the last refactor of Step1
 ![ScreenShot](./images/AnyAmountOfNumbers.jpg)

 # Step 3: Given String s contains any amount of number but  each place can have \n
 Support new line character \n

 ![ScreenShot](./images/nextLineFail.jpg)
 ![ScreenShot](./images/nextLinePass.jpg)
# Step 4 : Given String s ,return sum that split on the basis of different delimeter

Approach we know we have the string like this "//[delimeter]\n[numbers]" 
just get the delimeter and add it to the regular expression to split the string.
![ScreenShot](./images/DelimeterBetweenNumbersCode.jpg)
![ScreenShot](./images/DelimeterBetweenNumbersPass.jpg)
now its work with regexpression varibale 

now to support different delimeters we dynamically take the delimeter and add to regexpression variable
![ScreenShot](./images/AnyDelimeterBetweenNumberfinalcode.jpg)
![ScreenShot](./images/AnyDemileterTestCase.jpg)

# Step 5 : Throw Error if a -ve number is present in the string
Test Case fails
![ScreenShot](./images/ErrorFails.jpg)
Test Case Passes
![ScreenShot](./images/ErrorPass.jpg)