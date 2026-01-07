/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let seen = new Map()
    if (s.length !== t.length) return false 
    for ( let i of s){
        seen.set(i, (seen.get(i) || 0) +1)
    }
    for (let j of t){
        if (seen.has(j)){
            seen.set(j, (seen.get(j) -1))
        }
    }
    for (let [key, pair] of seen){
        if (pair!==0){
            return false
        }
    }
    return true 

};