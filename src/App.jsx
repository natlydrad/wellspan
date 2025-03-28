import { useState } from 'react';
import Chart from './components/Chart';
import InputForm from './components/InputForm';
import ResultScreen from './components/ResultScreen';

export default function App() {
  const [screen, setScreen] = useState(1);
  const [userData, setUserData] = useState(null);
  const [results, setResults] = useState(null);

  // 🧍‍♂️ Static Average American forecast (age 30 → ~80)
  const averageForecast = [
    { year: 0, qualityOfLife: 52 },
    { year: 1, qualityOfLife: 52 },
    { year: 2, qualityOfLife: 52 },
    { year: 3, qualityOfLife: 52 },
    { year: 4, qualityOfLife: 52 },
    { year: 5, qualityOfLife: 52 },
    { year: 6, qualityOfLife: 52 },
    { year: 7, qualityOfLife: 52 },
    { year: 8, qualityOfLife: 52 },
    { year: 9, qualityOfLife: 52 },
    { year: 10, qualityOfLife: 52 },
    { year: 11, qualityOfLife: 52 },
    { year: 12, qualityOfLife: 52 },
    { year: 13, qualityOfLife: 52 },
    { year: 14, qualityOfLife: 52 },
    { year: 15, qualityOfLife: 52.0 },
    { year: 16, qualityOfLife: 51.3 },
    { year: 17, qualityOfLife: 50.6 },
    { year: 18, qualityOfLife: 49.9 },
    { year: 19, qualityOfLife: 49.3 },
    { year: 20, qualityOfLife: 48.6 },
    { year: 21, qualityOfLife: 47.9 },
    { year: 22, qualityOfLife: 47.2 },
    { year: 23, qualityOfLife: 46.5 },
    { year: 24, qualityOfLife: 45.8 },
    { year: 25, qualityOfLife: 45.1 },
    { year: 26, qualityOfLife: 44.5 },
    { year: 27, qualityOfLife: 43.8 },
    { year: 28, qualityOfLife: 43.1 },
    { year: 29, qualityOfLife: 42.4 },
    { year: 30, qualityOfLife: 41.7 },
    { year: 31, qualityOfLife: 41.0 },
    { year: 32, qualityOfLife: 40.3 },
    { year: 33, qualityOfLife: 39.7 },
    { year: 34, qualityOfLife: 39.0 },
    { year: 35, qualityOfLife: 38.3 },
    { year: 36, qualityOfLife: 37.6 },
    { year: 37, qualityOfLife: 36.9 },
    { year: 38, qualityOfLife: 36.2 },
    { year: 39, qualityOfLife: 35.5 },
    { year: 40, qualityOfLife: 34.9 },
    { year: 41, qualityOfLife: 34.2 },
    { year: 42, qualityOfLife: 33.5 },
    { year: 43, qualityOfLife: 32.8 },
    { year: 44, qualityOfLife: 32.1 },
    { year: 45, qualityOfLife: 31.4 },
    { year: 46, qualityOfLife: 30.7 },
    { year: 47, qualityOfLife: 30.1 },
    { year: 48, qualityOfLife: 29.4 },
    { year: 49, qualityOfLife: 28.7 },
  ];

  // 🧘‍♀️ Static Ideal Healthy forecast (age 30 → ~83)
  const idealForecast = [
    { year: 0, qualityOfLife: 70 },
    { year: 1, qualityOfLife: 70 },
    { year: 2, qualityOfLife: 70 },
    { year: 3, qualityOfLife: 70 },
    { year: 4, qualityOfLife: 70 },
    { year: 5, qualityOfLife: 70 },
    { year: 6, qualityOfLife: 70 },
    { year: 7, qualityOfLife: 70 },
    { year: 8, qualityOfLife: 70 },
    { year: 9, qualityOfLife: 70 },
    { year: 10, qualityOfLife: 70 },
    { year: 11, qualityOfLife: 70 },
    { year: 12, qualityOfLife: 70 },
    { year: 13, qualityOfLife: 70 },
    { year: 14, qualityOfLife: 70 },
    { year: 15, qualityOfLife: 70 },
    { year: 16, qualityOfLife: 70 },
    { year: 17, qualityOfLife: 70 },
    { year: 18, qualityOfLife: 70 },
    { year: 19, qualityOfLife: 70 },
    { year: 20, qualityOfLife: 70 },
    { year: 21, qualityOfLife: 70 },
    { year: 22, qualityOfLife: 70.0 },
    { year: 23, qualityOfLife: 69.5 },
    { year: 24, qualityOfLife: 69.0 },
    { year: 25, qualityOfLife: 68.5 },
    { year: 26, qualityOfLife: 68.1 },
    { year: 27, qualityOfLife: 67.6 },
    { year: 28, qualityOfLife: 67.1 },
    { year: 29, qualityOfLife: 66.6 },
    { year: 30, qualityOfLife: 66.1 },
    { year: 31, qualityOfLife: 65.6 },
    { year: 32, qualityOfLife: 65.2 },
    { year: 33, qualityOfLife: 64.7 },
    { year: 34, qualityOfLife: 64.2 },
    { year: 35, qualityOfLife: 63.7 },
    { year: 36, qualityOfLife: 63.2 },
    { year: 37, qualityOfLife: 62.7 },
    { year: 38, qualityOfLife: 62.3 },
    { year: 39, qualityOfLife: 61.8 },
    { year: 40, qualityOfLife: 61.3 },
    { year: 41, qualityOfLife: 60.8 },
    { year: 42, qualityOfLife: 60.3 },
    { year: 43, qualityOfLife: 59.8 },
    { year: 44, qualityOfLife: 59.4 },
    { year: 45, qualityOfLife: 58.9 },
    { year: 46, qualityOfLife: 58.4 },
    { year: 47, qualityOfLife: 57.9 },
    { year: 48, qualityOfLife: 57.4 },
    { year: 49, qualityOfLife: 56.9 },
    { year: 50, qualityOfLife: 56.5 },
    { year: 51, qualityOfLife: 56.0 },
    { year: 52, qualityOfLife: 55.5 },
  ];

  const handleRealSubmit = async (formData) => {
    setUserData(formData);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/calculate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('RESPONSE FROM BACKEND', data);
      setResults(data);
      setScreen(3);
    } catch (error) {
      console.error('Error contacting backend:', error);
      alert('Something went wrong contacting the server!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black font-sans">
      <div className="grid grid-cols-2 w-full max-w-6xl p-8 gap-4">
        <div>
          {screen === 1 && (
            <div>
              <h1 className="text-4xl font-bold mb-4">WellSpan</h1>
              <p className="text-xl mb-6">Your Quality of Life Expectancy Calculator</p>
              <button
                onClick={() => setScreen(2)}
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
              >
                Start Now
              </button>
            </div>
          )}
          {screen === 2 && <InputForm onSubmit={handleRealSubmit} />}
          {screen === 3 && results && <ResultScreen results={results} />}
        </div>

        <div>
          <Chart
            userQoLData={results?.qolForecast}
            averageQoLData={averageForecast}
            idealQoLData={idealForecast}
            startingAge={userData?.age || 30}
          />
        </div>
      </div>
    </div>
  );
}
