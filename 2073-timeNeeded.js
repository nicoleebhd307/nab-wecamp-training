/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let time = 0
    while (true){
        tickets[0] --
        time ++ // when buying occurs 

        if (k===0 && tickets[0] === 0) return time // if k finish

        if (tickets[0] === 0){ // if someone finish buying 
            tickets.shift()
            k--
        } else {
            tickets.push(tickets[0]) // return at the end of line 
            tickets.shift()

            if (k!==0){ // update k position 
                k--
            } else {
                k = tickets.length-1
            }
    }
    }
};