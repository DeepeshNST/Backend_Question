// In the current directory, there exists a file named newton.txt containing confidential information. 
// Your objective is to read and display the contents of this file using file system module.
// Requirements : Implement the file reading operation asynchronously, ensuring it runs efficiently in the background.
// Don't directly click the file. Embrace the challenge of the task!


// answer
// const fs = require("fs")
// const path = require("path")

// const filePath = path.join(__dirname, 'newton.txt');


// fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//         console.log(err)
//         return;
//     }

//     console.log(data)
// })