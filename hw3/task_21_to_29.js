/*

21). JavaScript function to get all possible subset with a 
fixed length (for example 2) combinations in an array. 

*/

function getSubsets(arr, subsetLength) {
    let result = [];

    function backtrack(start, current) {
        
        if (current.length === subsetLength) {
            result.push([...current]); 
            return;
        }

        for (let i = start; i < arr.length; i++) {
            current.push(arr[i]);           
            backtrack(i + 1, current);      
            current.pop();                  
        }
    }

    backtrack(0, []);
    return result;
}


console.log(getSubsets([1, 2, 3], 2));


/*
22). JavaScript function that accepts two arguments, a string and a letter 
and the function will count the number of occurrences of the specified letter within the string. 
*/

function letterOccurence(str, lt){
    let count=0;
    for(let i=0; i< str.length; i++){
        if(str[i] === lt){
            count+=1;
        }
    }
    return count;
}

/*
23). JS func to find the first not repeated character.
*/

function firstNotRepeated(st){
    counts = {}
    for(let i=0; i<st.length; i++){
        let ch = st[i];
        if(counts[ch]){
            counts[ch] += 1;
        }
        else{
            counts[ch] = 1;
        }
    }

    for (let i = 0; i < st.length; i++) {
        let ch = st[i];
        if (counts[ch] === 1) {
            return ch;
        }
    }

    return null;
}

console.log(firstNotRepeated("aabbcdd"));

/*
24). JS function to apply Bubble Sort algorithm
*/

function bubbleSort(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        for(let j=0; j<n-i-1;j++){
            if(arr[j]<arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1], arr[j]];
            }
        }        

    }

    return arr
}

/*
25). JS function that accept a list of country names as input and returns the longest country name as output. 
*/

function longestCountryName(lst){
    let longestCountry = "";
    let long = 0;
    for(let st of lst){
        if(st.length>long){
            long = st.length;
            longestCountry = st;
        }

    }

    return longestCountry;
}

/*
26). JavaScript function to find longest substring in a given a string without repeating characters. 
*/

function longestSubString(st){
    let substr = "";
    let l=0,r=0;
    let freq = {};

    while(r<st.length){
        ch= st[r];

        if(freq[ch]){
            delete freq[st[l]];
            l++;
        }
        else{
            freq[ch] = true;
            if((r-l+1) > substr.length){
                substr = st.slice(l,r+1);
            }
            r++;
        }
        
    }
    return substr;
}

console.log(longestSubString("abcabcbb"));

/*
27). JS func that returns the longest palindrome in a given str
*/

function longestPalindrome(str) {
    if (str.length < 2) return str;

    let start = 0, maxLen = 1;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            if ((right - left + 1) > maxLen) {
                maxLen = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        expandAroundCenter(i, i);     // odd-length palindromes
        expandAroundCenter(i, i + 1); // even-length palindromes
    }

    return str.slice(start, start + maxLen);
}

console.log(longestPalindrome("babad")); 

/*
28). JavaScript program to pass a 'JavaScript function' as parameter. 
*/

function greet(name) {
    return "Hello, " + name;
}

function processUserInput(callback) {
    let name = "Charan";
    console.log(callback(name));
}

// Pass greet as a parameter
processUserInput(greet);


/*
29). JavaScript function to get the function name. 
*/

function sayHello() {
    return "Hi!";
}

console.log(sayHello.name);