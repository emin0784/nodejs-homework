/* Initialize a new npm project and create an index.js file.
Using the fs module create a new file called homework.txt
Create a path to the file using the path module
Inside the file write the following "Homework 01 in Basic Node"
Append to the file the following " FINISHED!"
Read the file contents and print them out in the console.
FAQ
Should I use sync or async methods from fs? - Any methods you want, as long as it works without any race condition issues.
Should I use ES modules or CommonJS - Anything you want, preferably ES modules ("type": "module" in package.json).
Do I need to send package.json? - Yes. */

import fs from "fs";
import path from "path";

const homeworkPath = path.join(import.meta.dirname, 'homework.txt');

fs.writeFileSync(homeworkPath, 'Homework 01 in Basic Node' );
fs.appendFileSync(homeworkPath,  ' FINISHED!');
const text = fs.readFileSync(homeworkPath, { encoding: 'utf-8' });
console.log(text);