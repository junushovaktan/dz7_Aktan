import {useNavigate} from "react-router-dom";

function NewsPage () {
    const navigate = useNavigate()
    return (
        <div>
            <h1>News Page</h1>
            <p>Новост будущего</p>
            <button onClick={() => navigate(-1)}>назад</button>
        </div>
    )
}
export default NewsPage;