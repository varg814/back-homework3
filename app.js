// 1) Create a countdown bomb:
// bombTimer(seconds) logs each second until it hits 0 and then logs "💥 Boom!".
// Add a defuse() function that can be called anytime before 0 to cancel the countdown. If successful, log “🧯 Defused!”.

// function bombTimer(seconds) {
//   let interval = 0;
//   interval = setInterval(() => {
//     console.log(seconds--);
//     if (seconds <= -1) {
//       clearInterval(interval);
//       console.log("boom");
//     }
//   }, 1000);
// }

// bombTimer(10);

// 2) Create a function that takes a string and logs each character one by one every 200ms — like a typewriter effect.
// Example:
// typeText("Hello world");
// Should log:
// H (0.2s)...e...l...

// function spelling(string) {
//   let interval = 0;
//   let index = 0;
//   interval = setInterval(() => {
//     console.log(string[index]);
//     index++;
//     if (index >= string.length) {
//       clearInterval(interval);
//     }
//   }, 200);
// }

// spelling("Hi world")

// 3) Create a function that takes a random special number like 11, 22, 33, 44 ... 99, this function randomly should log random 2 digit special number 11, 22, 33... 99 and stops when argument and random number are same.
// Example: randomNum(22)
// should log:
// 22 11,
// 22, 77
// 22, 22 //should stop.

// function random(num) {
//   let interval = 0;
//   const nums = [11, 22, 33, 44, 55, 66, 77, 88, 99];
//   interval = setInterval(() => {
//     let rndnum = Math.floor(Math.random() * 9);
//     console.log(num, nums[rndnum]);
//     if (num === nums[rndnum]) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }

// random(44)

// 4)Create a function that imitates to return fake data, use setTimeout. make both async/await and .then.catch methods.



// 5) Create a sleep function. make a function that takes a ms as an argument and when you call this function waits untill this function resolved. use setTimeout and promises.
// eg: console.log('first')
// await sleep(2000)
// console.log('second')
// second should sleep after 2 seconds
