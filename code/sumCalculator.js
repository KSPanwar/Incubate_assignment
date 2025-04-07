function sumCalculator(s){
    // if(!s){
    //     return 0;
    // }                                 we can remove these line as the line 9 is working good for previous test cases also
    // if(s.length==1){
    //     const num = parseInt(s);
    //     return isNaN(num) ? 0 : num;
    // }
    const sum = s.split(/,|\n/).map(x => parseInt(x) || 0).reduce((a,b)=> a+b,0);
    return sum;
}

module.exports = sumCalculator;