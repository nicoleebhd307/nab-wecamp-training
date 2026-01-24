/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// hidden case : 2 s map to the same t 
var isIsomorphic = function(s, t) {
    let map = new Map()
    for (let i=0; i< s.length; i++){
        if (map.has(s[i])){
            if (map.get(s[i]) !== t[i]){
                return false 
            }
        } else {
            for (let [key, match] of map){
                if (match === t[i]) return false 
            }
            map.set(s[i], t[i])
        }
    }
    return true 
};

console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('9a9k', '1s1m'))
console.log(isIsomorphic('eggiik', 'addddk'))