import { Link } from "react-router-dom";

function Header() {
    return <nav className=" orange accent-3">
        <div className="container">
            <div className="nav-wrapper" >
                <Link to="/" href="#!" class="brand-logo">
                Recipes-App
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
        
    </nav>
}

export { Header };
