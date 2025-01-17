var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

// Information of connecting to MySQL server
// default port: 3306
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '00000000',
	database : 'nodelogin'
});

// When the client connects to the server, the login page will be displayed 
// and the server will send the login.html file.

// Initialize Express
var app = express();
// using some of Express's packages
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// bodyParser package will extract the form data from our login.html file.
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// return our login.html file to the client (i.e. browser)
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

// handle the POST request
// client enters their details in the login form and clicks the submit button, 
// the form data will be sent to the server, and with that data our login script
// will check in our MySQL accounts table to see if the details are correct.
app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;

	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
		// connection.query('SELECT * FROM accounts', function(error, results, fields) {
			console.log(results)
            if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home'); //If everything went as expected and the client logs in they will be redirected to the home page.
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

// Start the server
const PORT = process.env.PORT || 3000;

// normal funciton
// function logInfo() {
// 	console.log(`App listening on port ${PORT}.`);
// 	console.log(`Visit http://localhost:${PORT}/`);
// 	console.log('Press Ctrl+C to quit.');
// }
// app.listen(PORT, logInfo);

// arrow funciton
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}.`);
	console.log(`Visit http://localhost:${PORT}/`);
	console.log('Press Ctrl+C to quit.');
});
