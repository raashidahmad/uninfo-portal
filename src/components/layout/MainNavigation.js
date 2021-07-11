import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import logo1 from '../../assets/images/uninfo_logo.png';
import logo2 from '../../assets/images/covid19_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons'

function MainNavigation() {
    return (
        <nav className={classes.bgWhite} className="navbar navbar-expand-lg navbar-light border-bottom">
            <div className="container-fluid">
                <button className="btn btn-default btn-sm" id="sidebarToggle">
                    <FontAwesomeIcon icon={faList} />
                </button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <span className={classes.logo}>
                        <img src={logo1} alt="Logo" />
                    </span>
                    <span className={classes.covidHeadline}>
                        COVID-19 DATA PORTAL
                    </span>
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/results" className="nav-link">Results Dasboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rollout" className="nav-link">Rollout Dashboard</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default MainNavigation;