import NavButton from "../buttons/NavButton";

import "./navbar.scss";

// routes
import * as IndexData from '../routecontent/Index';
import * as OurTeamData from '../routecontent/OurTeam';
import * as TheProjectData from '../routecontent/OurCampaign';

const NAVBAR_ACCESSIBLE_ROUTES = [IndexData, OurTeamData, TheProjectData];

/**
 * React component Navbar provides links to all the main sections
 * of the site. Its corresponding stylesheet adjusts its layout as
 * needed for different screen sizes.
 * @returns 
 */
function Navbar() {
    return ( 
        <nav className="mainNav">
            <div className="navTitles">

                <div className="mainHeader">
                    Sally Ride Awareness Campaign
                </div>

                <div className="auxHeader">#SallyRidePride</div>
            </div>
            <div className="navButtons">
                {
                    NAVBAR_ACCESSIBLE_ROUTES.map((r, i) => {
                        return (<NavButton key={i} href={r.ROUTE}>{r.TITLE_SHORT}</NavButton>);
                    })
                }
            </div>
        </nav>
     );
}

export default Navbar;