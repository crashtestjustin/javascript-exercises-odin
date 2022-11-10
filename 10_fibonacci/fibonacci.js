const fibonacci = function(n) {
    if (n > 0) {
        let fib = [0,1];
        let a = 0;
        let b = 1;
        let c = n;
            for (let i=0; i < n; i++) {
                newFibItem = fib[a] + fib[b];
                fib.push(newFibItem);
                a++;
                b++;
            }
            return fib[n];
        } else {
            return "OOPS";
        }
};

// Do not edit below this line
module.exports = fibonacci;
