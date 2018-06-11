var insert = function(array, rightIndex, value){
    for(var i=rightIndex; i>=0 && value < array[i]; i--){
        array[i+1]=array[i];
    }
    array[i+1]=value;
};

var insertionSort=function(array){
    for(var i=1; i<array.length; i++){
        insert(array, i-1, array[i]);
    }
};

var array= [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log(array);

var array= [-99, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log(array);
