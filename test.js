// @  1 Print numbers from 1 to 10
for (let i = 1; i <= 10; console.log(i), i++);

//@ 2 Print numbers from 1 to 10, but 'a' if divisible by 2
for (let i = 1; i <= 10; console.log(i % 2 ? i : 'a'), i++);

//@ 3 Print numbers from 1 to 10, but 'a' if divisible by 2, 'b' if divisible by 3
for (let i = 1; i <= 10; console.log(i % 3 ? (i % 2 ? i : 'a') : 'b'), i++);

//@ 4 Print numbers from 1 to 10, but 'a' if divisible by 2, 'b' if divisible by 3, and  'ab' if divisible by both 2 and 3
for (let i = 1; i <= 10; console.log(i % 6 ? (i % 3 ? (i % 2 ? i : 'a') : 'b') : 'ab'), i++);

//@ 5 Function to convert 24-hour time to 12-hour format
const convert12h = (t) => {
    let [ h, m ] =  t.split(':') ;
    return ` ${(h %= 12) || 12}:${m}${t < '12' ? 'AM' : 'PM'}  `;
};

console.log(convert12h('09:53'));
console.log(convert12h('17:29'));
