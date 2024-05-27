// Bob is attempting to read the contents of a file named newton.txt using the file system module in Node.js. However, 
// when he logs the content to the console, he receives undefined instead of the expected file content. 
// Help Bob identify and resolve the error.
// Note : You don't have to resolve the error; just identify what the error is.



const fs = require("fs")
const path = require("path")

// const filePath = path.join(__dirname, 'newton.txt');

fs.readFile("newton.txt", "utf8", (err, data) => {
    console.log(data);
})



// answer
// fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(data);
// })





