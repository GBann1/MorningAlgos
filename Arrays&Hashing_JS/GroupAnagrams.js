//  Leetcode #49. Group Anagrams

/* This one algo I did almost entirely solo. I had difficulties formatting the values
as an array which I then googled and realized was as simple as changing strs[i] to [strs[i]].
I did make the mistake of thinking that I would store the indexes rather than strings. Then
after I was done I would loop back through the inital string and grab each value by its index.
Thankfully after running my code once I realized that I could simply store the string rather
than the index, and it was as simple as changing i to strs[i]
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // hashmap / object
    let hashmap = {};

    // loop through the array
    for (let i =0; i< strs.length; i++){
        // sort each entry
        let sorted = strs[i].split('').sort().join('');
        // see if entry is a match
        if(hashmap[sorted] !== undefined){
            // if it is a match push the unsorted string to that array
            hashmap[sorted].push(strs[i]);
        }else{
            // if not a match, start an array
            hashmap[sorted] = [strs[i]];
        };
    };

    // return only the array of arrays
    return Object.values(hashmap);
};

// ======================================================================
// Re-coding based upon leetcode provided solutions
/* 
Their idea was very similar to mine (hence why I chose it to re-explain for now).
Declare an object then loop through each string sorting it. After it has been
sorted determine if it is undefined
*/

var leetcodeSolution = function(strs) {
    let map = {}

    for(let str of strs){
        let s = str.split('').sort().join('')
        if(!map[s]) map[s] = []
        map[s].push(str)
    }
    return Object.values(map)
};

/* Things I liked:
1.  looping through using str of strs makes it much harder to run into the problem 
    I had with wanting to use the indexes rather than the values.
2.  Initalizing an empty array and then always pushing to it helped me better
    understand my own answer and how I struggled to figure out how to initalize the
    value as an array.
*/
/* Things I didn't like:
1.  Code is a little cramped, and the line with the if condition doesn't have any
    brackets. That made it a little harder for me to understand where things aligned.
2.  No semi-colons.
*/