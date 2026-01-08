/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // split, sort and hash each item of strs, if has the same key 
    // => same group of anagrams 
    // has map save each group of anagrams : map save the key and the value has that key
    const map = new Map()
    for (let i of strs){
        let key = i.split('').sort().join('') // convert all item into the same key 
        
        if (!map.has(key)){ // if hash map already has that key => save the anagram to the array
            map.set(key, [])
        } 
        map.get(key).push(i) // get the array of anagrams => push i 
    }
    return Array.from(map.values()) // return the array with map grouped anagrams 

};