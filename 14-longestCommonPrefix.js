function longestCommonPrefix(strs){
    let first = strs[0]
    let res =''
    for (let i = 0; i < first.length; i++){ // compare each with the first item 
        for (let j = 1; j < strs.length; j++){ // loop big items 
            if (i >= strs[j].length || strs[j][i] !== first[i]) {
                return res
            }        
        }
        res += first[i]

    } 
    return res 
}

console.log(longestCommonPrefix(["flower","flow","flight"]))