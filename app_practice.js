const fs=require('fs');
fs.writeFileSync('notes.txt','This file was created by Node.JS');
fs.writeFileSync('notes.txt','Add this to the txt file');
// the above line will overwrite and not append
fs.appendFileSync('notes.txt','. Append this to the notes.txt file');
fs.appendFileSync('notes2.txt','Will this create a new file??');
//file system module functions are creating a new file if it did not exist previously
fs.appendFileSync('notes2.txt','. This will also get appended');