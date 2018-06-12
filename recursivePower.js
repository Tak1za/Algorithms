var isEven = function(n){
    return n%2===0;
};

var isOdd = function(n){
    return !isEven(n);
}

var power = function(x, n){
    //base case
    if(n===0){
        return 1;
    }

    //recursive case 3: n is negative
    if(n<0){
        return 1/power(x, -n);
    }

    //recursice case 1: n is odd
    if(isOdd(n)){
        return power(x, n-1)*x;
    }

    //recursive case 2: n is even
    if(isEven(n)){
        var result=power(x, n/2);
        return result*result;
    }
};

console.log(power(3, -1));