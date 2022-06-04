import {useNavigate} from "react-router-dom";

function SocialPage () {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Social Page</h1>
            <button onClick={() => navigate(-1)}>назад</button>
            <a href="https://www.instagram.com/tallgartbekov/">Instagram</a>
        </div>
    )
}
export default SocialPage;