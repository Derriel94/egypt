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
app.use(cors({
	origin: ["http://localhost:3000"],
	methods: ["GET", "POST"],
	credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
	key: "userId",
	secret: "topdawg",
	resave: false,
	saveUninitialized: false,
	cookie: {
		expires: 60 * 60 * 24 * 100,
	},
}));

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "password",
	database: "loginsystem",
});

app.get('/register', (req, res)=> {
	const username = req.body.username;

		db.query(
		"SELECT EXISTS(SELECT * FROM users WHERE username = ?)",
		username,
		(err, result) => {
			if (err) {
				res.send({ err: err });
				
			} else if (result) {
				res.send({ message: "Username Already Exists" });
				
			}
			db.end();
		}

	);


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

//This is where the session is assigned?

app.get('/login', (req, res) => {
	if (req.session.user) {
		res.send({loggedIn: true, user: req.session.user});
	} else {
		res.send({ loggedIn: false });
	}
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
						req.session.user = result;
						console.log(req.session.user);
						res.send(result);
					} else {
						res.send({ message: "wrong/username/password combo"});
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