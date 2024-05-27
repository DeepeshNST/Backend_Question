// Hey there! I’ve been working with the filesystem module in Node.js to read a file from my root directory, 
// but I seem to have made a mistake with the syntax. Could you help me figure out what I’m doing wrong?



const fs = require("fs")


fs.readFile("utf8", "myfile.txt", (err, data) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log(data)
})



// answer
// const fs = require("fs")


// fs.readFile("myFile.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data)
// })

