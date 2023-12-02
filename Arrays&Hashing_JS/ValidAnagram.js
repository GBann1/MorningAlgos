// Leetcode #242. Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Inital thoughts (102ms)
    // const s1 = s.split('').sort().join('');
    // const t1 = t.split('').sort().join('');

    // if (t1 === s1){
    //     return true;
    // };
    // return false;
    
    // Revised for readability (66ms)
    // if (s.split('').sort().join('') === t.split('').sort().join('')){
    //     return true;
    // };

    // return false;

    // Single line (76ms) -???
    return (s.split('').sort().join('') === t.split('').sort().join(''))
};

let s = "anagram";
let t = "nagaram";
console.log(isAnagram(s,t));
s = "rat";
t = "car";
console.log(isAnagram(s,t));

// ======================================================================
// Re-coding based upon leetcode provided solutions
/* The concept is to make an array with 26 elements, one for each letter of the alphabet. 
As the computer loops over the each character in the first word it adds 1 to that characters corresponding index in the array.
As the computer loops over the second word it will decrement by 1 the index of each corresponding letter, leaving the array filled with 26 zeros.
*/

var leetcodeSolution1 = function(s,t){
    // edge case of mismatched lengths
    if (s.length !== t.length){
        return false;
    }

    // make array
    var alphabet = new Array(26).fill(0);

    // get a's charcodevalue
    let aCharCode = 'a'.charCodeAt(0)
    // add values to alphabet array
    for (let i = 0; i < s.length; i++){
        // adds values of one
        alphabet[s.charCodeAt(i) - aCharCode]++;
        // subtracts values of other
        alphabet[t.charCodeAt(i) - aCharCode]--;
    };
    return alphabet.every(count => count == 0);
};
/* Things learned: 
1. Array(26).fill(0)
    You can fill a newly made array with a certain value using the .fill(*value*) method
2. 'a'.charCodeAt(0)
    The UTF-16 value of each char can be found using the .charCodeAt() method
3. every(function(*value*))
    To check every element's value is the same you can use the .every built-in function
*/
