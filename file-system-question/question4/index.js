// Hello! Could you please review my syntax? I'm attempting to read a file, but it's giving error when attempting to read the file content. Here's the code I'm using:

const fs = require("fs")

fs.readFile("newton.txt", "utf8", (err, data) => {

    if (err) {
        console.log(err)
        return;
    }

    console.log(data)
})

// answer
// const path = require("path")
// const filePath = path.join(__dirname, 'newton.txt');

// Instead of using "newton.txt" directly in the first argument, please specify the file path.

// **** Remember this *******
// When using fs.readFile('newton.txt', 'utf8', callback) in Node.js, specifying 'newton.txt' directly assumes
// that the file is located in the current working directory (CWD) from which the Node.js process was started. 
// However, this is not always the same as the directory where the script is located. This can lead to issues
// if the script is executed from a different directory.

// fs.readFile(filePath, "utf8", (err, data) => {

//     if (err) {
//         console.log(err)
//         return;
//     }

//     console.log(data)
// })

