import NavButton from "../buttons/NavButton";

import "./navbar.scss";

function Navbar() {
    return ( 
        <nav>
            <div className="navTitles">

                <div className="mainHeader">
                    <div><span>Sally Ride </span><span>Awareness Campaign</span></div>
                </div>

                <div className="auxHeader">#SallyRidePride</div>
            </div>
            <div className="navButtons">
                <NavButton href="/">Home</NavButton>
                <NavButton href="/team">Our Team</NavButton>
                <NavButton href="/project">The Project</NavButton>
            </div>
        </nav>
     );
}

export default Navbar;