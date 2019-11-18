let express = require('express');
let http = require('http');
let webapp = express();
let bodyParser = require('body-parser');
let host = "127.0.0.1";

let consoleReader = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout
});

consoleReader.question(`Server start at port? `, port => {
    webapp.listen(port, function(){
        console.log(`Server is listening at host ${host} on port ${port}`);
    });
})


webapp.use(bodyParser.json());
webapp.use(bodyParser.urlencoded({extended: true}));

webapp.set('view engine', 'jade');
webapp.use(express.static('public'));
webapp.get('/greetings/:name', function(request, response){
    let username = request.params.name;
    response.render('index', {title: 'This is a NodeJS begin course', message: `Hello ${username}, Im your first application`});
});

webapp.post('/new-user', (request, response) => {
   console.log('This is the body', request.body);
   let name = request.body.firstName;
   let surname = request.body.secondName;
   let email = request.body.email;
   let password = request.body.password;


   let message = {
       title: 'The user has been created',
       text: 'User created',
       firstName: name,
       secondName: surname,
       email: email,
       password: password

   }
   response.render('user-confirm', message);
});


