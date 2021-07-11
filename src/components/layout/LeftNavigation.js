import {Link} from 'react-router-dom';

function LeftNavigation() {
    return (
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">UN INFO</div>
            <div className="list-group list-group-flush">
                <Link to="/" className="list-group-item list-group-item-action list-group-item-light p-3">
                    Item One
                </Link>
                <Link to="/" className="list-group-item list-group-item-action list-group-item-light p-3">
                    Item Two
                </Link>
            </div>
        </div>
    );
}
export default LeftNavigation;