import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function AboutPage () {
    const navigate = useNavigate()
    return (
        <div>
            <h1>About Page</h1>
            <button onClick={() => navigate(-1)}>назад</button>
            <NavLink to="/description">description</NavLink>
        </div>
    )
}
export default AboutPage;