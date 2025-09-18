//1).  Write a JS func that reverse a number

function rev(num){
    let res = "";
    let dig = 0;
    while(num>0){
        dig = num%10;
        res += dig;
        num = Math.floor(num/10);
    }

    return parseInt(res); //convert str into number

}

let n = parseInt(prompt("enter the num:"));
console.log("reverse of the number is:", rev(n));


// 2). checks whether a passed string is palindrome or not? 

function palindrome_or_not(str){
    let n = str.length;
    let l=0;
    let r=n-1;

    while(l<r){
        if(str[l]!=str[r]){
            return false;
        }
        else{
            l+=1;
            r-=1;
        }

        }
    return true;
}

// let st = prompt("enter a string:");
// console.log("given string is palindrom or not:", palindrome_or_not(st));

// 3). JS func that generates all combinations of a string

function genCombinations(str){
    let res =[];
    for(let i=0; i<str.length;i++){
        let combo= "";
        for(let j=i; j<str.length; j++){
            combo += str[j];
            res.push(combo);
        }
    }
    return res;
}

let st = prompt("enter the str:");
console.log("all combinations of given string are:", genCombinations(st));

// 4). JS func that returns a passed string with letters in alphabetical order.

function alphaOrder(str){
    return str.split("").sort().join("");
}

// 5). JS func that accepts a string as a parameter and converts the 1st letter of each word of string to Upper Case.

function func(str){
    let res = "";
    res += str[0].toUpperCase();

    for(let i=1; i<str.length; i++){
        if(str[i-1] === " "){
            res += str[i].toUpperCase();
        }
        else{
            res += str[i];
        }

    }
    return res;
}

// 6). JS func that accepts string as a paramenter and find the longest word within that string.

function longestWord(str){
    let maxLen = 0;
    let current = "";
    let longest = "";

    for(let i=0; i<str.length; i++){
        if(str[i]!==" "){
            current += str[i];
        }
        else{
            if(current.length > maxLen){
                maxLen = current.length;
                longest = current;
            }
            current = "";
        }
    }

    if(current.length > maxLen){
        longest = current;
    }
    return longest;
}

// 7). JS func that accepts a string as a parameter and counts the number of vowels within the string.

function vowelCount(str){
    let count = 0;
    let vowels = "aeiouAEIOU";

    for(let ch of str){
        if(vowels.includes(ch)){
            count +=1;
        }
    }
    return count;
}


// 8). Prime or not

function prime(num){
    if(num<=1){
        return "num is not a prime"
    }
    for(let i=2; i<=Math.sqrt(num);i++){
        if(num%i==0){
            return "num is not a prime";
        }
    }
    
    return "num a prime";
    
}


// 9). JS func which accepts an argument and returns the type

function detectType(value) {
    return typeof value;
}

// console.log(detectType(123));           // "number"
// console.log(detectType("hello"));       // "string"
// console.log(detectType(true));          // "boolean"
// console.log(detectType(undefined));     // "undefined"
// console.log(detectType(function(){}));  // "function"
// console.log(detectType({a:1})); // "object"

// 10). JS func which returns the n rows by n columns identity matrix

function identityMatrix(num){
    let res = [];
    for(let i=0; i<num; i++){
        let arr = [];
        for(let j=0; j<num; j++){
            if(i==j){
                arr.push(1);
            }
            else{
                arr.push(0);
            }
        }
        res.push(arr);
    }
    return res;
}