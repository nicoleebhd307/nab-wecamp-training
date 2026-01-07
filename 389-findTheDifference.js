// FREQUENCY : use Map [key, frequency]
var findTheDifference = function(s,t){
    let map = new Map()
    for (let c of t){
        map.set(c, (get(c) || 0) +1)} // map(char, frequecy)
        // in the first loop, c(value) is unknown => +1 => c = 1
        // in the second loop, c =1 => c(value) =2 
        // => get(key) => value (frequency)
    for (let c of s){
        map.set(c,get(c)-1)
    }
    for (let [key,val] of map){
        if (val>0) return key // if the frequency remain > 0 => exist in t not in s 
    }
    
}