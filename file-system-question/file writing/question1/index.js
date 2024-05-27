// Bob wants to create a file and write the text "My Name is Bob" into it using the Node.js file system module.
//  The content of the file is created as a file name and the path of the file is created as content of the file help bob to resolve this error

const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "./question/newton.txt")

fs.writeFile("My Name is Bob", filePath, err => {
    if (err) {
        console.error(err);
    } else {
        console.log("written successfully")
    }
});

// answer
// fs.writeFile(filePath, "My Name is Bob", err => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("written successfully")
//     }
// });