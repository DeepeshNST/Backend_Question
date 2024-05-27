// Create a file named newton.txt with the content "first paragraph added". 
// Then, append the file with "second paragraph added" the order in which text are entered should be maintained
// *********
// use file system module. in nodejs
// Don't use the Sync write / append file
// *********


// answer
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'newton.txt');
const content1 = 'first paragraph added\n';
const content2 = 'second paragraph added\n';

fs.writeFile(filePath, content1, (err) => {
  if (err) {
    console.error('Error writing first paragraph:', err);
  } else {
    console.log('First paragraph written successfully');

    fs.appendFile(filePath, content2, (err) => {
      if (err) {
        console.error('Error appending second paragraph:', err);
      } else {
        console.log('Second paragraph appended successfully');
      }
    });
  }
});

