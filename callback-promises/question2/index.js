// two promises are defined but when we console.log them they both are in pending state . resolve this both promise  and print promise 1 solved and promise 2 solved

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(
            console.log("promise 1 solved")
        )
    }, 5000)
})


const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log("promise 2 solved"))
    }, 10000)
})

console.log(promise1, promise2)


// answer 
// async function result() {
//     await Promise.all([promise1, promise2])
// }

// result();


