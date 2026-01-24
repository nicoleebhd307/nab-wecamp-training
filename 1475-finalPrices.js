/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let res = [...prices]   // copy mảng gốc
    let stack = []          // lưu INDEX

    for (let i = 0; i < prices.length; i++) {
        let current = prices[i]

        while (
            stack.length &&
            prices[stack[stack.length - 1]] >= current
        ) {
            let idx = stack.pop()
            res[idx] = prices[idx] - current
        }

        stack.push(i)
    }

    return res
};
