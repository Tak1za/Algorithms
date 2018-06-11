var binarySearch = function(array, target){
    var min = 0;
    var max = array.length - 1;
    var guess;
    var numOfGuess = 0;

    while(max >= min){
        guess=Math.floor((min+max)/2);
        numOfGuess++;
        if(array[guess] === target){
            console.log("Number of guesses it took: ", numOfGuess);
            return guess;
        }
        else if(array[guess] > target){
            max = guess - 1;
        }
        else if(array[guess] < target){
            min = guess + 1;
        }
    }
    return -1;
}

var numbers = [1, 2, 3, 4, 5, 8, 10, 12, 15, 17, 20, 22, 25, 27, 28, 30, 31, 32, 33, 36];
var result = binarySearch(numbers, 15);
if(result === -1){
    console.log("The target number is not present in the array");
}
else{
    console.log("The target number is at index: ", result);
}
