function countStudents(students, sandwiches) {
    let fail = 0 // number of tried 
    while (students.length !== fail && students.length){
        if (students[0] === sandwiches[0]){ // match 
            students.shift()
            sandwiches.shift() // (!!!) index(0) is the top 
            fail = 0
        } else {
            let stu = students.shift() // remove the first student 
            students.push(stu) // go to the end 
            fail++
        }
    }
    return students.length
};

console.log(countStudents ([1,0,1,0],[0,1,0,1]))

console.log(countStudents ([1,0,1,0],[0,0,0,0]))
console.log(countStudents ([1,1,1,1],[0,1,0,1]))
console.log(countStudents ([1,1,1,1],[0,0,0,0]))

console.log(countStudents ([1,1,1,0,0,1],[1,0,0,0,1,1]))