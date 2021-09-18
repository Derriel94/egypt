// server/index.js

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

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
	
	//these request names need to match the names of the key on the front-end or client-side component, that is
	//normally located in the App directory in my code
	//right now the client side component is home, when i make the new
	//register component the client side component will be in register folder and not in the home folder
	const username = req.body.username;
	const password = req.body.password;

	db.query(
		"INSERT INTO users (username, password) VALUES (?,?)",
		[username, password],
		(err, result) => {
			console.log(err);
		}
	);
});

app.listen(3001, () => {
	console.log(`Server is Running`);
});