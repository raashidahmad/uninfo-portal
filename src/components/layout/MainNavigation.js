import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import logo1 from '../../assets/images/uninfo_logo.png';
import logo2 from '../../assets/images/covid19_logo.png';

function MainNavigation() {
    return (
        <div className="header">
            <nav>
                <div className="nav-wrapper">
                    <Link  to="/" className="button-collapse show-on-large">
                        <i className="material-icons">menu</i>
                    </Link>
                    <Link to="/">
                        <img className="dco-logo" src={logo1} alt="Logo" />
                        <img className="dco-logo" className={classes.left85} src={logo2} alt="Logo" />
                    </Link>
                    <h3 className="title">COVID-19 DATA PORTAL</h3>
                </div>
            </nav>
        </div>
    );
}
export default MainNavigation;