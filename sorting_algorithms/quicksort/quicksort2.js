/*
 * Quick Sort Implementation:
 *
 * http://stackoverflow.com/questions/5185864/javascript-quicksort
 */

 var array = [8, 2, 5, 7, 4, 3, 12, 6, 19, 11, 10, 13, 9];
console.log(quickSort(array, 0, array.length -1)) 
// [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 19 ]

function  quickSort(arr, left, right)
{
    var i = left;
    var j = right;
    var tmp;
    pivotidx = (left + right) / 2;
    var pivot = parseInt(arr[pivotidx.toFixed()]);  
    // The parseInt() function parses a string and returns an integer.
    // The toFixed() method converts a number into a string, keeping a specified number of decimals.
    
    /* partition */
    while (i <= j)
    {
        while (parseInt(arr[i]) < pivot)
            i++;
        while (parseInt(arr[j]) > pivot)
            j--;
        if (i <= j)
        {
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
            j--;
        }
    }

    /* recursion */
    if (left < j)
        quickSort(arr, left, j);
    if (i < right)
        quickSort(arr, i, right);
    return arr;
}