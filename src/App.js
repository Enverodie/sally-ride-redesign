import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Helmet } from 'react-helmet';

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

      </div>
    </>
  );
}

export default App;
