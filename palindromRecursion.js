var firstCharacter=function(str){
    return str.slice(0, 1);
};

var lastCharacter=function(str){
    return str.slice(-1);
};

var middleCharacters = function(str){
    return str.slice(1, -1);
};

var isPalindrome = function(str){
    //base case 1
    if(str.length === 0 || str.length === 1){
        return true;
    }
    
    //base case 2
    if(firstCharacter(str)!==lastCharacter(str)){
        return false;
    }

    //recursive case
    return isPalindrome(middleCharacters(str));
};

console.log(isPalindrome("naman"));