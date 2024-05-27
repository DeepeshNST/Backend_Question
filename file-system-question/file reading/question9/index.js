// In question 6, you read the file by passing a callback function as the third argument, 
// taking err as the first argument and data as the second argument. Now, read the file using async/await.
// Make sure errors are handled properly using try and catch.

// answer
// We need to import fs/promises
// const fs = require("fs/promises")
// const path = require("path")

// const filePath = path.join(__dirname, 'newton.txt');


// async function example() {

//     try {
//         const data = await fs.readFile(filePath, { encoding: 'utf8' })
//         console.log(data)
//     }
//     catch (error) {
//         console.log(error)
//     }

// }

// example();



