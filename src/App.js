import { useContext, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './nav/Navbar';
import ShowAtBreakpoint from './ShowAtBreakpoint';
import ImagePlaceholderController from './images/ImagePlaceholderController';
import Title from './Title';
import MissionSealImage from './images/MissionSealImage';
import RouteNotFound from './RouteNotFound';

import SallyRideImg from './images/index_images/cover_image.png';
import './App.scss';

// all accessible routes
import * as IndexData from './routecontent/Index';
import * as OurTeamData from './routecontent/OurTeam';
import * as TheProjectData from './routecontent/OurCampaign';

// all contexts
import { ImagePoolContext, ImagePoolDefaultObject } from './contexts/ImagePoolContext';

const ACCESSIBLE_ROUTES = [OurTeamData, IndexData, TheProjectData];
const ALLOWED_SUBROUTES = [TheProjectData];

/**
 * React component App controls the look of every page of the app,
 * regardless of route. Handles all possible routes and establishes site's
 * base layout.
 */
function App() {

  const [ height, setHeight ] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', () => {console.log("resized"); setHeight(window.innerHeight)});
  }, [])

  return (
    <>
      <Helmet>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Jockey+One&family=Jura:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      </Helmet>
      <div className="App" style={{height: `${height}px`}}>

        <div className='totalBlock'>

          <div className="mainBlock">

            <ImagePoolContext.Provider value={ImagePoolDefaultObject}>

              <MainBlockContents />

            </ImagePoolContext.Provider>

          </div>
      
          <Navbar />
    
        </div>

      </div>
    </>
  );
}

function MainBlockContents() {

  const imagePoolContext = useContext(ImagePoolContext);
  imagePoolContext.addAllDefaults();

  const location = useLocation();

  return (
    <>
      <Helmet>
        <meta name="og:url" content={window.location.href} />
      </Helmet>
      <header>
        <Title>
          {ACCESSIBLE_ROUTES.find(item => item.ROUTE.split('/')[1] === location.pathname.split('/')[1])?.TITLE || "Sally Ride Awareness Campaign website"}
        </Title>
        <img src={SallyRideImg} alt="" aria-hidden="true" />
      </header>
      <div className="pageContent">
        <main>
          <Routes>
            {
              ACCESSIBLE_ROUTES.map((r, i) => {
                let allowedRoute = r.ROUTE;
                if (ALLOWED_SUBROUTES.find(subroute => subroute.ROUTE === r.ROUTE)) allowedRoute += '/*';
                return (
                  <Route key={i} exact path={allowedRoute} element={<r.default />} />
                )
              })
            }
            <Route path="*" element={<RouteNotFound />} />

          </Routes>
        </main>
        <aside>
          {/* <ShowAtBreakpoint min="Desktop">
            <MissionSealImage height="50%" />
          </ShowAtBreakpoint> */}
          <ShowAtBreakpoint minHeight="Narrow" maxHeight="Small">
            <ImagePlaceholderController poolNumber={[0, 1]} height="75%" rotation="-7deg" />
          </ShowAtBreakpoint>
          <ShowAtBreakpoint minHeight="Average">
            <ImagePlaceholderController poolNumber={0} height="75%" rotation="-7deg" />
            <ImagePlaceholderController poolNumber={1} altBorder={true} height="100%" rotation="5deg" />
          </ShowAtBreakpoint>
        </aside>
      </div>

    </>
  )
}

export default App;
