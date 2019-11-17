let express = require('express');
let http = require('http');
let webapp = express();
let port = 3000;
let bodyParser = require('body-parser');

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
   let lastName = request.body.secondName;

   let message = {
       title: 'The user has been created',
       text: 'User created',
       firstName: name,
       secondName: lastName
   }
   response.render('user-confirm', message);
});

webapp.listen(port, function(){
    console.log('Server is listening on port 3000');
});

