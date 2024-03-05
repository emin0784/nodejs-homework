/* Part 1:
Create server using HTTP module;
When the default url is hit return HTML content to the user, the content of your choice.
When the url /student is hit, return HTML with the information:
Student name: "your name";
Student lastname: "your lastname";
Academy: "the academy you are at";
Subject: "the current subject we are learning";
Part 2:
Create server using HTTP module (or use the one from the previous part);
When the default url is hit return HTML content to the user, the content of your choice;
When the url /add_student is hit, return a form with one input (ex. name) and a button;
When we submit the button we will navigate to a new route /all_students;
In this new url /all_students get the value that is sent from the form and console.log it human-readable format (ex. "The student name is: name");
BONUS:
Instead of console.log the value from the form, use the FS module to write in a file named: students.txt */

import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer((request, response) => {

    const URL = request.url;

    let student = {
        firstName: 'Emin',
        lastName: 'Imer',
        academy: 'Qinshift',
        subject: 'Node js'

    }

    if(URL === '/'){

        response.setHeader('Content-Type', 'text/html');
        response.write(`<h1>Welcome</h1>`);
        response.end();
    }
    if(URL === '/student'){

        response.setHeader('Content-Type', 'text/html');
        response.write(`
        <ul>
            <li>First Name: ${student.firstName}</li>
            <li>Last Name: ${student.lastName}</li>
            <li>Academy: ${student.academy}</li>
            <li>Subject: ${student.subject}</li>
        </ul>
        `)
        response.end();

    }
    if(URL === '/all_students'){
        response.setHeader('Content-Type', 'text/html');
        response.write(`<h2>All students</h2>`);
        const chunks = [];
        request.on('data', chunk => {
            chunks.push(chunk);
        });
        const studentPath = path.join(import.meta.dirname, 'student.txt');
        request.on('end', () =>{
            const parsedChunks = Buffer.concat(chunks).toString();
          
            const studentInfo = parsedChunks.split('=')[1].replace('+', ' ');
            console.log(`The student name is: ${studentInfo}`); 
            
        });
        response.end();
    }
    if(URL === '/add_student'){

        response.setHeader('Content-Type', 'text/html');
        response.write(`

        <form action="/all_students" method="POST">
            <input type="text" name="studentInfo" />
            <button type="submit">Add Student</button>
        </form>
    `);
        response.end();
    }
   
   
})
server.listen(3000);