import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFound">
            <h1>Sorry !</h1>
            <h1>the page is not found</h1>
            <Link to='/'>Return to the Homepage</Link>
        </div>
    );
}
 
export default NotFound;