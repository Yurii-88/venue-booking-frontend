import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AvailabilityPage from './pages/AvailabilityPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/availability/:venueId" element={<AvailabilityPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
