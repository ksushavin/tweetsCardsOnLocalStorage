import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="container">
            <h1>OOPS the page you were looking for is not found</h1>
            <h2>Maybe those links can help you:</h2>
            <ul>    
                <li>
                    <Link to={"/login"}>login</Link>
                </li>
                <li>
                    <Link to={"/register"}>register</Link>
                </li>
            </ul>
        </div>
      )
}