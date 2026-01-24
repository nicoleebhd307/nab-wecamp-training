function minOperations(logs){
    let stack =[]
    for (let i=0; i<logs.length; i++){
        if (logs[i] === '../'){
            stack.pop()
        } else if (logs[i] === './'){
            continue 
        } else {
            stack.push(logs[i])
        }
    }
    return stack.length
}
logs1=["d1/","d2/","./","d3/","../","d31/"]
logs2=["d1/","../","../","../"]
console.log(minOperations(logs1))
console.log(minOperations(logs2))