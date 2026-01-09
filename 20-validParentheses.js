/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
        for (let i of s){
            if (i === ')' && stack[stack.length-1] === '('){
                stack.pop()
            } else if (i === ']' && stack[stack.length-1] === '['){
                stack.pop()
            }
            else if (i === '}' && stack[stack.length-1] === '{'){
                stack.pop()
            } else {
                stack.push(i)
            }
        }
        if (stack.length === 0) return true 
        return false 

};