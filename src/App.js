import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './nav/Navbar';
import Index from './routecontent/Index'
import ShowAtBreakpoint from './ShowAtBreakpoint';
import ImagePlaceholderController from './images/ImagePlaceholderController';
import Title from './Title';
import MissionSealImage from './images/MissionSealImage';

import SallyRideImg from './images/index_images/cover_image.png';
import './App.scss';

function App() {

  

  return (
    <>
      <Helmet>
        <title></title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Jockey+One&family=Jura:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="App">

        {/* <h1>This is a route test</h1>
        <Routes>
          <Route path="/" element={<div>root or home</div>} />
          <Route path="nonHome" element={<b>not home</b>} />
          <Route path="*" element={<i>not recognized</i>} />
        </Routes>
        <h2>Now I'll be inserting a second routes component</h2>
        <Routes>
          <Route path="/" element={<div>still at home</div>} />
          <Route path="nonHome" element={<div>Heyo</div>} />
        </Routes> */}
        {/* 
        
        App controls the look of every single page, regardless of route.
        
      */}

        <div className='totalBlock'>

          <div className="mainBlock">

            <header>
              <Title>Sally Ride: An Innovator in STEM</Title>
              <img src={SallyRideImg} alt="" aria-hidden="true" />
            </header>
            <div className="pageContent">
              <main>
                <Index />
              </main>
              <aside>
                <ShowAtBreakpoint min="Desktop">
                  <MissionSealImage height="50%" />
                </ShowAtBreakpoint>
                <ImagePlaceholderController height="75%" rotation="-7deg" />
                <ImagePlaceholderController height="100%" rotation="5deg" />
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
