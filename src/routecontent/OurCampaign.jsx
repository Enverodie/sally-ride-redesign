import { Routes, Route } from "react-router-dom";
import CampaignNav from "../nav/CampaignNav";

// all accessible routes
import * as DataAnalysisData from "./OurCampaignSubpages/DataAnalysis";
import * as PostPlanningData from "./OurCampaignSubpages/PostPlanning";
import * as PresentationData from "./OurCampaignSubpages/Presentation";
import * as Prototype1Data from "./OurCampaignSubpages/Prototype1";
import * as Prototype2Data from "./OurCampaignSubpages/Prototype2";
import * as Prototype3Data from "./OurCampaignSubpages/Prototype3";
import * as RedesignData from "./OurCampaignSubpages/Redesign";
import * as SurveyData from "./OurCampaignSubpages/Survey";
import RouteNotFound from "../RouteNotFound";

export const ROUTE = '/OurCampaign';
export const TITLE_SHORT = "Our Campaign";
export const TITLE = "Learn about our outreach campaign!";

const ACCESSIBLE_ROUTES = [DataAnalysisData, PostPlanningData, PresentationData, Prototype1Data, Prototype2Data, Prototype3Data, RedesignData, SurveyData];

function OurCampaign() {
    return ( 
<>
    <h2>Process overview</h2>
    <p>This section is dedicated to the documentation of our progress in the campaign, divided into sections consisting of distributables of our work.</p>
    <CampaignNav />
    <Routes>
        {
            ACCESSIBLE_ROUTES.map((r, i) => {
                let accessibleRoute = r.ROUTE;
                accessibleRoute = accessibleRoute.split('/');
                if ('/' + accessibleRoute[1] === ROUTE) return (
                    <Route key={i} path={'/' + accessibleRoute[2]} element={
                        <>
                            <h2>{r.TITLE_SHORT}:</h2>
                            <r.default />
                        </>
                } />
                );
            })
        }
        <Route path="/" element={<p>Click a section of the timeline above to get started.</p>} />
        <Route path="*" element={<RouteNotFound />} />
    </Routes>
</>
     );
}

export default OurCampaign;