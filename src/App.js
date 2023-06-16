import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './nav/Navbar';
import ShowAtBreakpoint from './ShowAtBreakpoint';
import ImagePlaceholderController from './images/ImagePlaceholderController';
import Title from './Title';
import MissionSealImage from './images/MissionSealImage';

import SallyRideImg from './images/index_images/cover_image.png';
import './App.scss';

// all accessible routes
import * as IndexData from './routecontent/Index';
import * as OurTeamData from './routecontent/OurTeam';
import * as TheProjectData from './routecontent/OurCampaign';

// all contexts
import { ImagePoolContext } from './contexts/ImagePoolContext';

const ALL_ACCESSIBLE_ROUTES = [OurTeamData, IndexData, TheProjectData];

/**
 * React component App controls the look of every page of the app,
 * regardless of route. Handles all possible routes and establishes site's
 * base layout.
 */
function App() {

  const location = useLocation();

  return (
    <>
      <Helmet>
        <title></title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Jockey+One&family=Jura:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="App">

        <div className='totalBlock'>

          <div className="mainBlock">
      
            <header>
              <Title>
                { ALL_ACCESSIBLE_ROUTES.find(item => item.ROUTE === location.pathname)?.TITLE || "Sally Ride Awareness Campaign website"}
              </Title>
              <img src={SallyRideImg} alt="" aria-hidden="true" />
            </header>
            <div className="pageContent">
              <main>
                <ImagePoolContext.Provider>
                  <Routes>
                    {
                      ALL_ACCESSIBLE_ROUTES.map((r, i) => {
                        return (
                          <Route key={i} exact path={r.ROUTE} element={<r.default />} />
                        )
                      })
                    }
                    <Route path="*" element={<h1 style={{color: 'var(--errorred)'}}>Location {location.pathname} not found.</h1>} />
        
                  </Routes>
                </ImagePoolContext.Provider>
              </main>
              <aside>
                <ShowAtBreakpoint min="Desktop">
                  <MissionSealImage height="50%" />
                </ShowAtBreakpoint>
                <ImagePlaceholderController height="75%" rotation="-7deg" />
                <ImagePlaceholderController altBorder={true} height="100%" rotation="5deg" />
              </aside>
            </div>
          </div>
      
          <Navbar />
    
        </div>

      </div>
    </>
  );
}

export default App;
