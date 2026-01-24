/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    filterS = filteredStr(s)
    filterT = filteredStr(t)
    if (filterS.length!== filterT.length) return false 
    for (let i=0; i<filterS.length; i++){
        if (filterS[i] !== filterT[i]) return false 
    }
    //console.log(filterS, filterT)
    return true 
};

function filteredStr(s){
    let stack = []
    for (let i =0; i<s.length ; i++){
        if (s[i]==='#'){
            stack.pop() 
        } else {
            stack.push(s[i])
        }
    }
    return stack
}

console.log((backspaceCompare('#k9#', '2##k'))) // true 
