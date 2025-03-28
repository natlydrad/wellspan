// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LaunchPage from './pages/LaunchPage';
import MainApp from './pages/MainApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaunchPage />} />
        <Route path="/app" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

export default App;
