import classes from './header.module.css'
import {Link, NavLink} from 'react-router-dom'

function Header () {
    return (
        <ul className={classes.menu}>
            <li>
                <NavLink to="/" className={classes.link}>main page</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={classes.link}>abut page</NavLink>
            </li>
            <li>
                <NavLink to="/contacts" className={classes.link}>contacts page</NavLink>
            </li>
            <li>
                <NavLink to="/portfolio" className={classes.link}>portfolio page</NavLink>
            </li>
        </ul>
    )
}

export default Header;