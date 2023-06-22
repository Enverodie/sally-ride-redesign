import { Link, useLocation } from "react-router-dom";

import Planet from '../images/PlanetFramed.svg';
import Shuttle from '../images/ShuttleFramed.svg';

import * as DataAnalysisData from "../routecontent/OurCampaignSubpages/DataAnalysis";
import * as PostPlanningData from "../routecontent/OurCampaignSubpages/PostPlanning";
import * as PresentationData from "../routecontent/OurCampaignSubpages/Presentation";
import * as Prototype1Data from "../routecontent/OurCampaignSubpages/Prototype1";
import * as Prototype2Data from "../routecontent/OurCampaignSubpages/Prototype2";
import * as Prototype3Data from "../routecontent/OurCampaignSubpages/Prototype3";
import * as RedesignData from "../routecontent/OurCampaignSubpages/Redesign";
import * as SurveyData from "../routecontent/OurCampaignSubpages/Survey";

import './navbar.scss';

const ACCESSIBLE_ROUTES = [ 
    [
        PostPlanningData, 
        Prototype1Data, 
        Prototype2Data, 
    ],
    [
        SurveyData,
        DataAnalysisData, 
    ],
    [
        Prototype3Data, 
        PresentationData, 
    ],
    [
        RedesignData, 
    ],
];

function CampaignNav() {

    const numberNavigableRoutes = ACCESSIBLE_ROUTES.flat().length;
    let numberNavigableRoutesLeft = numberNavigableRoutes + 1;

    return ( 
        <nav className="campaignNav">
            <div className="mainBar">
                <NavCap />
                {
                    ACCESSIBLE_ROUTES.map((part, i) => {
                        return part.map((r, j) => {
                            numberNavigableRoutesLeft--;
                            return (
                                <CampaignLink src={r.ROUTE} routeName={r.TITLE_SHORT} itemsLeft={numberNavigableRoutesLeft} />
                                );
                            })
                        })
                    }
                <NavCap isTail={true} />
            </div>
        </nav>
     );
}

function NavCap({isTail}) {
    const top = (isTail? Shuttle : Planet);
    return (
        <div className="campaignLink cap">
            {isTail && <div className="buffer" />}
            <img src={top} alt='' aria-hidden="true" />
            {!isTail && <div className="buffer" />}
        </div>
    )
}

function CampaignLink({src, routeName, itemsLeft}) {

    const location = useLocation();
    const isActive = location.pathname === src;
    return (
        <Link 
            to={src} 
            draggable="false"
            style={{'--itemsLeft': itemsLeft}}>
            <div className={"campaignLink" + (isActive? ' active' : '')}>
                {(isActive? '★': '')}
                <div className="campaignLine">
                    <div className="campaignLabelHolder">
                        <div className="campaignLabel">{routeName}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CampaignNav;