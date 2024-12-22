import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fixed import from 'react-router-dom'
import './App.css';

function App() {
  const CityOfLanding = lazy(() =>
    import('./pages/cityOfferDetailLanding/CityOfferDetailLanding.tsx')
  );
  const CityOfferLanding = lazy(() =>
    import('./pages/cityOfferLanding/CityOfferLanding.tsx')
  );
  const Home = lazy(() => import('./pages/home/Home.tsx'));

  return (
    <>
      {/* Add basename property to the Router */}
      <Router basename="/test-actions">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<CityOfferLanding />} />
            <Route path="/landing" element={<Home />} />
            <Route path="/landing/:id" element={<CityOfLanding />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;