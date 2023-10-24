// Write a function that takes an array of numbers and returns an array containing only the even numbers.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function returnEvenNumbers(arr){
    let evenArray =[]
    let j = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenArray[j] = arr[i];
            j++
        }
    }  
return evenArray;
}
console.log(returnEvenNumbers(array));