/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map()
    // create a map to save the letter and its frequency 
    for (let i of s){
        map.set(i, (map.get(i) || 0) +1) // add the item to map respectively 
    }
    for (let [key, freq] of map){
        if (freq === 1){ // occur only once 
            for (let i = 0; i<s.length; i++){
                if (s[i] === key) return i
            }
        }
    }
    return -1 
};