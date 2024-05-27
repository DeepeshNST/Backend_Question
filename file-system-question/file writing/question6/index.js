// Rahul and his friend are working on an essay in the city and need to write 300 words.
// Rahul, being a technical guy, wants to use a fancy way to write the essay to a text file using Node.js's file system module. 
// However, there is another loop in the code that runs before the essay is written. 
// Correct the error in Rahul's code so that the loop runs after the essay is written to the file.


const fs = require("fs")
const path = require("path")


const filePath = path.join(__dirname, "newton.txt")

const content = `
    In the heart of a bustling city, there stood an ancient library that had witnessed
    countless generations come and go. This library, known as the Grand Archives, was
    a treasure trove of knowledge, its shelves lined with books that spanned every 
    conceivable subject. From ancient manuscripts and historical records to the latest scientific journals, 
    the Grand Archives held it all. The building itself was a marvel of architecture, with towering columns, 
    intricate carvings, and vast stained-glass windows that cast colorful patterns of light on the marble floors.
`

fs.writeFile(filePath, content, (err) => {
    if (err) {
        console.error(err)
    }
    else {
        console.log("written successfully")
    }
})



for (let i = 0; i < 100; i++) {
    console.log(i)
}


// answer
// try {
//   fs.writeFileSync(filePath, content);
//   console.log("file written successfully")
// } catch (err) {
//   console.error(err);
// }
// Yes, synchronously writing to a file will block the main thread in Node.js.
// When you use synchronous file system methods, such as fs.writeFileSync,
// the main thread is blocked until the operation completes.
// This means that no other code can execute while the file is being written, which can lead to performance issues,
// especially in a server environment where responsiveness is crucial.


