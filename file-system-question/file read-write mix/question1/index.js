// There is a file in the root directory named newton.txt that contains a simple mathematical question.
// Your task is to first read the question, then answer it,
// and write the answer back into the same file without erasing the original question.
// Use the Node.js file system module to perform this task, ensuring proper error handling.

// answer 
const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "./newton.txt")

try {
    const data = fs.readFileSync(filePath, "utf8")
    console.log(data)
}
catch (error) {
    console.log(errorA1W

    )
}

// After reading the question, append the answer to the same file.
const content = "5";

try {
     fs.appendFileSync(filePath, content);
}
catch (error) {
    console.error(error)
}





+

