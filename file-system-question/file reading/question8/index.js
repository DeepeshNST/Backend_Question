// There is a loop in the code that should execute after reading a file.
// However, the loop is currently running prematurely. Please check and resolve 
// this issue so that the for loop waits until the file execution is completed.

const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, './newton.txt');

fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.log(err)
        return;
    }

    console.log(data)
})



for (let i = 0; i < 100; i++) {
    console.log(i);
}


// answer 
// Before the loop, use synchronous file reading.
// const data = fs.readFileSync(filePath, 'utf8');
// console.log(data)