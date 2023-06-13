import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './nav/Navbar';
import Index from './routecontent/Index'
import ImagePlaceholderComplex from './images/ImagePlaceholderComplex';

import SallyRideImg from './images/index_images/cover_image.png';
import PlaceholderImg1 from './images/index_images/sr1.jpg';
import PlaceholderImg2 from './images/index_images/sr2.jpg';
import './App.scss';
import Title from './Title';

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
                <ImagePlaceholderComplex width="14vw" height="75%" rotation="-7deg" src={PlaceholderImg1} alt="">This is a very large description test to see the wrapping capability.</ImagePlaceholderComplex>
                <ImagePlaceholderComplex width="14vw" height="100%" rotation="5deg" src={PlaceholderImg2} alt="">Description</ImagePlaceholderComplex>
                {/* <ImagePlaceholderComplex src={PlaceholderImg1} alt="">Description</ImagePlaceholderComplex> */}
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
