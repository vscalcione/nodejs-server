const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const webapp = express();
const port = process.env.port || 3000;
const consoleReader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

consoleReader.question(`Server start at port ${port}`, () => {
    webapp.listen(port, () => {
        console.log(`Server is listening at http://locahost:${port}`);
    });
});

webapp.use(bodyParser.json());
webapp.use(bodyParser.urlencoded({extended: true}));
webapp.set('views', __dirname + '/views');
webapp.set('view engine', 'jade');

webapp.get('/greetings/:name', (request, response) => {
    const username = request.params.name;
    response.render('index', {
        title: 'This is a Node.js begin course',
        message: `Hello ${username}, I'm your first application`
    });
});

webapp.post('/new-user', (request, response) => {
    console.log('This is the body', request.body);
    
    const name = request.body.firstName;
    const surname = request.body.secondName;
    const email = request.body.email;
    const password = request.body.password;

    const message = {
        title: 'The user has been created!',
        text: 'User created',
        firstName: name,
        lastName: surname,
        email: email,
        password: password
    };

    response.render('user-confirm', message);
});