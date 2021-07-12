import HealthFirst from "../components/health/HealthFirst";
import Introduction from "../components/landing/Introduction";

function Home() {
    return(
        <div className="container">
            <Introduction />
            <HealthFirst />
        </div>
    );
}
export default Home;