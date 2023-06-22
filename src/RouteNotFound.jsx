import { useLocation } from "react-router-dom";

function RouteNotFound() {

    const location = useLocation();

    return ( 
        <h1 style={{ color: 'var(--errorred)' }}>Location {location.pathname} not found.</h1>
     );
}

export default RouteNotFound;