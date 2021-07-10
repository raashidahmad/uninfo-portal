import LeftNavigation from "./LeftNavigation";
import MainNavigation from "./MainNavigation";

function Layout(props) { 
    return (
        <div className="d-flex" id="wrapper">
            <LeftNavigation />
            <div id="page-content-wrapper">
                <MainNavigation />
                <main>{props.children}</main>
            </div>
        </div>
    );
}
export default Layout;