// server/index.js

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
//Below is the component that will help hash the passwords

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(express.json());
//express useses this statement to automaticaly parse the json state before its read
app.use(cors());

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "password",
	database: "loginsystem",
});

app.post('/register', (req, res)=> {
	const username = req.body.username;
	const password = req.body.password;



	bcrypt.hash(password, saltRounds, (err, hash) => {
		if (err) {
			res.send({err: err});
		}

		db.query(
			"INSERT INTO users (username, password) VALUES (?,?)",
			[username, hash],
			(err, result) => {
				console.log(err);
			}
		);

	});


});

app.post('/login', (req, res)=> {
	const username = req.body.username;
	const password = req.body.password;

	db.query(
		"SELECT * FROM users WHERE username = ?",
		username,
		(err, result) => {
			if(err) {
			  res.send({err: err});
			}

			if (result.length > 0) {
				bcrypt.compare(password, result[0].password, (error, response) => {
					if (response) {
						res.send(result);
					} else {
						res.send({ message: "wrong/username/password combo"})
					}
				});
			} else {
				res.send({ message: "Wrong username does not exist"});
			}
		}
	);

});

app.listen(3001, () => {
	console.log(`Server is Running`);
});