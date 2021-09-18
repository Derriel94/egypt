import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const NavList = styled.ul`
display: flex;

a {
	flex-basis: 100%;
	text-decoration: none;
	border-radius: 3px;
	border: 2px solid black;
	color: black;
	color: #202c2d;
    background: #FFFFFF;
    text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5;
}

li {

	font-size: 1.3em;
	list-style: none;

}

 .current {
 	li {
 		background:linear-gradient(to right, rgb(32, 142, 238), rgb(189, 203, 229));
 	}
 }
`;

const Navbar = () => {
	return (
		<NavList>
				<NavLink to="/" activeClassName="current" exact><li>Home</li></NavLink>
				<NavLink to="/history" activeClassName="current" ><li>History</li></NavLink>
				<NavLink to="/articles" activeClassName="current"><li>Articles</li></NavLink>
				<NavLink to="/gallery" activeClassName="current"><li>Gallery</li></NavLink>
				<NavLink to="/trivia" activeClassName="current"><li>Trivia</li></NavLink>
		</NavList>
	)
}

export default Navbar;