// When I try to read a file in the root directory labeled "newton.txt" the output appears to be in a format that’s not 
// easy to understand, possibly machine code. Could you help me convert this into a readable format?

const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, 'newton.txt');

fs.readFile(filePath, "", (err, data) => {
    if (err) {
        console.log(err)
        return
    }

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





