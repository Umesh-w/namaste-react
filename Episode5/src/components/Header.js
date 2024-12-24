import { Link } from "react-router-dom";
function Header(){
    return(
        <div className="header">
            <div className="logo">
                <img alt="company logo" src="https://img.freepik.com/free-vector/delivery-logo-template_23-2147880956.jpg?t=st=1734672068~exp=1734675668~hmac=c8652c376641fd8480e582ade8e6d118bc970ba28433f4e46cc93911b7c2c3fe&w=740"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about"> About Us</Link></li>
                    <li><Link to="/contact"> Contact Us </Link></li>
                    <li>Cart Logo</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;