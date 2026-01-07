/**
 * @param {string} s
 * @return {number}
 */
// Minimum String Length after Removing Substrings  

var minLength = function(s) {
    const stack = [] // do not have Stack built in 
    for (let char of s){
        // get the lastest stack 
        let top = stack[stack.length-1] // start with 0
        if ((char === 'B' && top ==='A') || (char==='D' && top === 'C')){
            stack.pop() // get the highest stack out
        } else {
            stack.push(char)
        }     
    }
    return stack.length 
};

/*
Array: 1 2 3 4 5
Stack: 
5 
4
3
2
1
pop() : pop the last of Array + the highest of Stack */
