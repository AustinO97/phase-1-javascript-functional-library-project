//function that checks to see if the colleciton is an obj or arr
//it uses the ternary operator to check if collection is an array
//if it is an array it slices the collection and returns a new collection
//it it's an object it used Object.values to return a new collection
const arrOrObj = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection)
}

//iterates over the collection of elements
//passing each element to the callback function
//return the original unmodified collection

function myEach(collection, callback) {
    const newCollection = arrOrObj(collection)

    for (let i = 0; i < newCollection.length; i++)  {
        callback(newCollection[i])
    }
    return collection
}

//create a new empty array
//use a for loop to iterate over the collection
//push the new collection through the callback function 
//and return an array without modifying the original
//prodeces a new array of values 
function myMap(collection, callback) {
    const newCollection = arrOrObj(collection)

    const newArr = [];

    for (let i = 0; i < newCollection.length; i++) {
        newArr.push(callback(newCollection[i]))
    }
    return newArr
}
myMap()
//myReduce takes 3 parameters
//returns a single value
//reduce iterates through a collection or values and boils it down into a sigle value
//accumulater starts at the value that's passed in as an argument
//with each successive step is updated to the return value of callback
//if a start value is not passed to myReduce the first value in the collection
//should be used as the start value

function myReduce(colleciton, callback, acc) {
    let newCollection = arrOrObj(colleciton)

    //this if statement handles the case where there is no start value
    //passed in for the accumulator
    //if acc is null it is set equal to the first value in newCollection
    //the first value is sliced from newCollection
    //since the first value has alrady been accounted for
    if(!acc) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }

    for(let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection)
    }
    return acc
}

//looks through each value in the collection
//returning the first one that passes the truth test(predicate)
//or undefinded if no value passes the test
function myFind(colleciton, predicate) {
    const newCollection = arrOrObj(colleciton)

    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) return newCollection[i]
    }
    return undefined
}

//looks throug each value in the collection 
//returning an array of all the values that pass a truth test
//if no matching values found 
//return and empty array
function myFilter(colleciton, predicate) {
    const newCollection = arrOrObj(colleciton)

    let newArr = []

    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) newArr.push(newCollection[i]) 
    }
    return newArr
}

//return the number of values in the collection
function mySize(collection) {
    const newCollection = arrOrObj(collection)

    for (let i = 0; i < newCollection.length; i++) {
        return newCollection.length
    }
}


// returns the first element of an array 
//passing n will return the first n element of the array
function myFirst(arr, n) {
    return (n) ? arr.slice(0, n) : arr[0]    
}

//returns the last element of an array
//passing n will return the last elements of the array
function myLast(arr, n) {
    return (n) ? arr.slice(arr.length-n, arr.length) : arr[arr.length -1]
}

function myKeys(obj) {
    return Object.keys(obj)
}

function myValues(obj) {
    return Object.values(obj)
}

//return a sorted copy of arr ranked in ascending order by the results
//of running each value through callback
//the values from the original array should be return in the sorted copy
// in ascending order by the value returned by callback

//construct a compareFunction so that it will handle either numeric or string values
function mySortBy(arr, callback) {
    const newArr = [...arr]

    return newArr.sort((a, b) => {
        if (callback(a) > callback(b)) {
            return 1
        } else if (callback(b) > callback(a)) {
            return -1
        } else {
            return 0
        }
    })
}

