/**
 * @param {string} s
 * @return {string}
 */
// bad Pair of letter : là cùng 1 ký tự nhưng in hoa - in thường 
var makeGood = function (s) {
    if (s.length === 0) return s
    let stack = []

    for (let i = 0; i < s.length; i++) {
        let top = stack[stack.length - 1] || ''
        if (s[i] !== top && (s[i].toLowerCase() === top.toLowerCase())) { // thay vì đi theo khẳng định thì thử chọn phủ định 
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }

    return stack.join('')
};