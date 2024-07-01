const fs = require('fs');


// // read from file
// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
    
//     console.log(data);
// });

// // write to file
// fs.writeFile('file.txt', 'Hello, world!', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
    
//     console.log('File written successfully');
// });

// // append to file
// fs.appendFile('file.txt', '\nHello, world!', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
// });

// // make directory
// fs.mkdir('newFolder', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Folder created');
// });

// // remove directory
// fs.rmdir('newFolder', (err) => {    
//     if (err) {
//         console.log(err);
//     }
//     console.log('Folder deleted');
// });

// // rename file
// fs.rename('file.txt', 'file1.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File renamed successfully');
//     }
// });

// move file to a new directory
fs.rename('file.txt', 'newFolder/file1.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File moved successfully');
    }
});
