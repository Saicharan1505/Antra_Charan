/*

11). Write a JavaScript function which will take an array of numbers stored and find the second lowest 
and second greatest numbers, respectively. 

*/

function func(arr) {
  // Remove duplicates
  let uniqueArr = [...new Set(arr)];

  // Sort numerically
  uniqueArr.sort((a, b) => a - b);

  let n = uniqueArr.length;

  if (n < 2) {
    console.log("Not enough unique elements");
    return;
  }

  console.log("second lowest is:", uniqueArr[1]);
  console.log("second greatest is:", uniqueArr[n - 2]);
}


/*
12). Perfect Number
*/

function perfectNumber(num){
    let sum=0;

    for(let i=1; i<num; i++){
        if(num%i==0){
            sum+=i;
        }
    }

    if((sum==num) && ((sum+num)/2 == num)){
        return 'Perfect Number';
    }
    else{
        return 'Not a perfect number';
    }
}


/*
13). JS func to compute the factors of a positive integer.
*/

function factors(num){
    let factor_lst = [];

    for(let i=1; i<=num; i++){
        if(num%i==0){
            factor_lst.push(i);
        }
    }

    return factor_lst;
}

console.log(factors(12));


/*
14). JavaScript function to convert an amount to coins
*/

function amountToCoin(amt, coins_lst){
    let quotient = 0;
    let rem = amt;
    let res=[];

    for(let i=0; i<coins_lst.length; i++){
        if(coins_lst[i]<=rem){
            quotient = Math.floor(rem / coins_lst[i]);
            rem = rem%coins_lst[i];

            if(quotient>0){
                while(quotient!=0){
                    res.push(coins_lst[i]);
                    quotient--;
                }
            }
        }
    }

    return res;

}

console.log(amountToCoin(46, [25,10,5,2,1]));


/*
15).  JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
Accept b and n from the user and display the result. 

*/

function expBase(b,n){
    return b**n;
}

/*
16). JavaScript function to extract unique characters from a string. 
*/

function extractUnique(str){
    let res = "";

    for(let i=0; i<str.length; i++){
        if(!res.includes(str[i])){
            res += str[i];
        }
    }

    return res;
}


/*
17). JavaScript function to get the number of occurrences of each letter in specified string. 
*/

function charCount(st){
    let counts = {};

    for(let i=0; i<st.length; i++){
        ch = st[i];

        if(counts[ch]){  //if already exists
            counts[ch] += 1;
        }
        else{   //doesn;t exist previously
            counts[ch]=1;
        }
    }
    return counts;
}


/*
18). Write a function for searching JavaScript arrays with a binary search. 
*/

function binarySearch(arr,tar){
    let low=0;
    let high=arr.length-1;

    while(low<=high){

        let mid = Math.floor((low+high)/2);

        if(arr[mid]==tar){
            console.log("we found the target at index:", mid);
            return mid;
        }
        else if(arr[mid]<tar){
            low = mid+1;
        }
        else{  //arr[mid]>tar
            high = mid-1;
        }
        
    }

    console.log("Target not found");
    return -1;
}

let arr = [2, 5, 8, 12, 16, 23, 38];
binarySearch(arr, 16);


/*
19). JS function that returns array elements larger than a number
*/

function largeeEle(arr,num){
    let res=[];
    for(i=0; i<arr.length; i++){
        if(arr[i]>num){
            res.push(arr[i]);
        }
    }
    return res;
}


/*
20). JavaScript function that generates a string id (specified length) of random characters. 
*/

function genString(len){
    let res = "";
    let char_lst = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(let i=0; i<=len; i++){
        let random_idx = Math.floor((Math.random * char_lst.length));
        res += char_lst[random_idx];
    }

    return res;
}




