// src/01-closures/2620-counter.js

/**
 * Problem 2620: Counter
 * Focus: Mutating state inside a Lexical Environment (Closure)
 */

// Approach 1
function createCounter(n) {
    let count = n;
    return function() {
        return count++; // Returns current value, then increments
    };
}

// Approach 2: Ultra-Concise Arrow Function Single-Liner (Modern ES6+)
// Because arguments to functions act like local variables, we can mutate 'n' directly!
const createCounterModern = (n) => () => n++;


// --- Local Testing Wrapper ---
const counter = createCounter(10);
console.log(counter()); // Output: 10
console.log(counter()); // Output: 11
console.log(counter()); // Output: 12

var createCounter = function(n) {
    return function() {
        return n++;
    };
};