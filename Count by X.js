https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
    function countBy(x, n) {
        let arr = [];
        for(let i = x; i <= n * x; i+=x ) {
            arr.push(i)
        }
        return arr;
    }