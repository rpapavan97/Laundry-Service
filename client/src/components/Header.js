import { Link } from "react-router-dom"
import "./index.css"

export default function Header(){
    return(
        <header>
            <Link to="/">
            <h2 className="home">Laundry</h2>
            </Link>
            <nav>
                <ul>
                    <li className="tabs">Home</li>
                    <li className="tabs">Pricing</li>
                    <li className="tabs">Career</li>
                    <li className="btn">Sign In</li>
                </ul>
            </nav>
        </header>
    )
}