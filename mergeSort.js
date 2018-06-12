var merge = function(array, p, q, r){
    var lowHalf=[];
    var highHalf=[];

    var k=p;
    var i;
    var j;
    for(i=0; k<=q; i++, k++){
        lowHalf[i]=array[k];
    }
    for(j=0; k<=r; j++, k++){
        highHalf[j]=array[k];
    }

    k=p;
    i=0;
    j=0;

    while(i<lowHalf.length && j<highHalf.length){
        if(lowHalf[i]<highHalf[j]){
            array[k]=lowHalf[i++];
        }
        else{
            array[k]=highHalf[j++];
        }
        k++;
    }

    while(i<lowHalf.length){
        array[k++]=lowHalf[i++];
    }

    while(j<highHalf.length){
        array[k++]=highHalf[j++];
    }
};

var mergeSort = function(array, p, r){
    if(p<r){
        var q = Math.floor((p+r)/2);
        mergeSort(array, p, q);
        mergeSort(array, q+1, r);
        merge(array, p, q, r);
    }
};

var array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(array, 0, array.length-1);
console.log(array);