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
    const sum = s.split(regexpression).map(x => parseInt(x) || 0).reduce((a,b)=> a+b,0);  // only use of regular expression like splitting on the basis of ,;\n
    return sum;
}

module.exports = sumCalculator;

