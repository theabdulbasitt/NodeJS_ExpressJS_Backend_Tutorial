//const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data)=> {
//     if (err) throw err;
//     console.log(data);
// });


const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'reply.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nappending to this file');
        await fsPromises.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newreply.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'newreply.txt'), 'utf8');
        console.log(newData);
    } catch (err) {
        console.log(err);
    }
}

fileOps();



//console.log("Hello...");


// callback hell
// fs.writeFile(path.join(__dirname, 'files','reply.txt'), 'Hello there!', (err) => {
//     if (err) throw err; 
//     console.log('Operation completed');

//     fs.appendFile(path.join(__dirname, 'files','reply.txt'), '\n\nYes it is', (err) => {
//         if (err) throw err; 
//         console.log('Append completed');

//         fs.rename(path.join(__dirname, 'files','reply.txt'), path.join(__dirname, 'files','newreply.txt'), (err) => {
//             if (err) throw err; 
//             console.log('Rename completed');
//         });
//     });
// });

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})