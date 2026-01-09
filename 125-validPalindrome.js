/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let filtered_s = []
    //let filtered_s = s.replace(/[^a-zA-Z0-9]/g, '')

    for (let c of s) { // xử lý ký tự thuộc ASCII
        if (
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        ) {
            filtered_s.push(c)
        }
    }
    let left = 0 
    let right = filtered_s.length -1 // gán biến theo độ dài sau khi xử lý 
    while (left < right){
        if (filtered_s[left] === filtered_s[right]){
            left ++
            right --
        } else {
            return false
        }
    }
    return true 

};