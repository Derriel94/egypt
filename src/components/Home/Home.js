import React, { useState } from "react";
import Axios from 'axios'; // This allows for easy http request calls npm install axios
import styled from 'styled-components';
import egyptianFlag from './egyptianFlag.png';
import './Home.css';

// REGISTRATION LOGIN SYSTEM PRACTICE












// STYLED COMPONENTS
const HomeDiv = styled.div`
	
`;
const ContentSideBarDiv = styled.div`
	display: flex;
	
`;
const MainContentDiv = styled.div`
	flex: 1 1 50%;
	border-radius: 8px;
	border: 1px solid black;

	img {
		max-width: 50%;
  		height: 300px;
  		padding-top: 20px;
	}

	h3 {

	}
`;

const SideContentDiv = styled.div`
	flex: 1 1 25%;
	border-radius: 8px;
	border: 1px solid black;
`;

const SideBarDiv = styled.div` 
	flex: 1 1 25%;
	border-radius: 8px;
	border: 1px solid black;

	ul {
		list-style: none;
	}

	li:first-child {
		color: red;
	}
`;


function Home() {

	const [usernameReg, setUserNameReg] = useState("");
	const [passwordReg, setpasswordReg] = useState("");

	const [userNameLogin, setUserNameLogin] = useState("");
	const [passwordLogin, setPasswordLogin] = useState("");

	const [loginStatus, setLoginStatus] = useState("");



	const register = () => {
		Axios.post('http://localhost:3001/register', {
			username: usernameReg,
			password: passwordReg,
		}).then((response) => {
			console.log(response);
		});
	};

	const login = () => {
		Axios.post('http://localhost:3001/login', {
			username: userNameLogin,
			password: passwordLogin,
		}).then((response)=> {

			if (response.data.message) {
				setLoginStatus(response.data.message);
			} else {
				setLoginStatus(response.data[0].username);
			}
		});
	}
		
	const userNameInputHandler = (e) => {
		setUserNameReg(e.target.value);
	};

	const loginHandler = (e) => {
		setUserNameLogin(e.target.value);
	};

		return (
			<HomeDiv>
				<h1>Welcome To Everything Egyptian {loginStatus} !</h1>
				<ContentSideBarDiv>
					<MainContentDiv>
{/*					<img src={egyptianFlag} alt="egyptianFlag" />
						<h3> This is Egypt Hear me roar </h3>
						<p> In this pressing article see how egyptian officals
						tackle petty crime, pyrmaid thevies and Akman Ra???
						</p>
						 see more...*/}

				<h1>Register to Gain Access to this Article and more!</h1>
                  <p>Please fill in this form to create an account.</p>
                  <div className="register">
                  <h1>Register</h1>
                  	<label>Username</label>
                  	<input type="text" onChange={userNameInputHandler}/>
                  	<label>Password</label>
                  	<input type="text" onChange={(e) => {
                  		setpasswordReg(e.target.value);
                  	}}/>
                  	<button onClick={register}>Register</button>
                  </div>
                  <div className="login">
                  <h1>Login</h1>
                  <label>Username</label>
                  <input type="text" 
                  		placeholder="Username..."
                  		onChange={loginHandler}
                  		/>
                  <label>Password</label>
                  <input type="text" 
                  		placeholder="Password..."
                  		onChange={(e) => {
                  			setPasswordLogin(e.target.value);
                  		}}
                  		/>
 				  <button onClick={login}>Login</button>
 				  <h1>{loginStatus}</h1>
 				  </div>
					</MainContentDiv>
					<SideContentDiv>

					</SideContentDiv>
					<SideBarDiv>
						<div id="topscores">
							<ul>
								<li>Top Scores This Week!</li>
								<li>-----------------------</li>
								<li>1. 3000 pts</li>
								<li>2. 2900 pts</li>
								<li>3. 2870 pts</li>
								<li>4. 2549 pts</li>
								<li>5. 1999 pts</li>
								<li>6. 1529 pts</li>
								<li>7. 1500 pts</li>
								<li>8. 1452 pts</li>
								<li>9. 1387 pts</li>
								<li>10. 1234 pts</li>
							</ul>
						</div>
					</SideBarDiv>
				</ContentSideBarDiv>
				<div className="articles">
		            <div className="article">
		              <img src="" className="aritcle-img"  alt="article img" />
		              <p className="article-title"> Title 1 of 1</p>
		            </div>
		            <div className="article">
		              <img src="" className="aritcle-img"  alt="article img" />
		              <p className="article-title"> Title 1 of 1</p>
		            </div>
		            <div className="article">
		              <img src="" className="aritcle-img"  alt="article img" />
		              <p className="article-title"> Title 1 of 1</p>
		            </div>
		            <div className="article">
		              <img src="" className="aritcle-img"  alt="article img" />
		              <p className="article-title"> Title 1 of 1</p>
		            </div>
		            <div className="article">
		              <img src="" className="aritcle-img"  alt="article img" />
		              <p className="article-title"> Title 1 of 1</p>
		            </div>
		            <div className="article">
		              <img src="" className="aritcle-img"  alt="article img" />
		              <p className="article-title"> Title 1 of 1</p>
		            </div>
		            <div className="article">
		              <img src="" className="aritcle-img"  alt="article img" />
		              <p className="article-title"> Title 1 of 1</p>
		            </div>
		        </div>
			</HomeDiv>
		);
}

export default Home;