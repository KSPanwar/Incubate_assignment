function sumCalculator(s){
    // if(!s){
    //     return 0;
    // }                                 we can remove these line as the line 9 is working good for previous test cases also
    // if(s.length==1){
    //     const num = parseInt(s);
    //     return isNaN(num) ? 0 : num;
    // }
    // let string = s;
    let regexpression = /[,\n]/;
    if(s.startsWith("//")){
        const parts = s.split("\n");
        const customDelimiter = parts[0][2];
        regexpression = new RegExp(`[${customDelimiter},\n]`);
    }
    const numbers= s.split(regexpression).map(x => parseInt(x) || 0) // only use of regular expression like splitting on the basis of ,;\n
    const negatives = numbers.filter(x => x < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(',')}`);
      }

    return numbers.reduce((a,b)=> a+b,0);
}

module.exports = sumCalculator;

