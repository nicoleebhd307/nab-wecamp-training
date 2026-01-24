function validPalindrome(string){
    // should use toLowerCase from begin O(n)
    // check the string and check lowercase of each item 
    let l = 0 
    let r = string.length - 1
    let s = []
    for (let c in string){
        if ((c >= 0 && c <= 9) || (c>='a' && c<='z') || (c>= 'A' && c<='Z')){
            s.push(c)
        }
    }
    while (left < right ){
        if (s[left].toLowerCase === s[right].toLowerCase){
            left ++
            right --
        }
        else {
            return false 
        }
    }
    return true 
}