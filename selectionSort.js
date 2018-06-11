var swap = function(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

var indexOfMinimum = function(array, startIndex) {
  var minValue = array[startIndex];
  var minIndex = startIndex;

  for (var i = minIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
      minIndex = i;
    }
  }
  return minIndex;
};

var selectionSort = function(array) {
  for (var i = 0; i < array.length-1; i++) {
    var index = indexOfMinimum(array, i);
    swap(array, i, index);
  }
};

var array = [10, 12, 4, 9, 7];
selectionSort(array);
console.log(array);
