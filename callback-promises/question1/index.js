// In the given snippet, when you log the result, the promise will be in the pending state. Your task is to resolve this pending state.
// Note : don't change any line except the line number 12


async function question1() {
    return new Promise((resolve, reject) => {
        resolve("promises solved")
    })
}


const result = question1();
console.log(result)

// answer
// async function helper() {
//     const result = await question1();
//     console.log(result);
// }

// helper()


