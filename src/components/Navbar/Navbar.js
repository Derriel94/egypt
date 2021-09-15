import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="Navbar-container">
			<div className="Nav-link">
				<Link to="/">Home</Link>
			</div>
			<div className="Nav-link">
				<Link to="/history">History</Link>
			</div>
			<div className="Nav-link">
				<Link to="/articles">articles</Link>
			</div>
		</div>
	)
}

export default Navbar;