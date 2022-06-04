import classes from './footer.module.css'
import {NavLink} from "react-router-dom";

function Footer () {
    return (
        <div>
            <ul className={classes.ul}>
                <li>О компании</li>
                <li>О Сайте</li>
                <li>
                    <NavLink to="/social">Соц.сети</NavLink>
                </li>
                <li>
                    <NavLink to="/news">Новости</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Footer;
