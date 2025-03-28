// src/components/ResultScreen.jsx

export default function ResultScreen({ results }) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Your Results</h2>
  
        <p>
          <span className="font-semibold">Life Expectancy:</span>{" "}
          <span className="text-blue-600 text-2xl">{results.lifeExpectancy}</span>
        </p>
  
        <p>
          <span className="font-semibold">Quality of Life:</span>{" "}
          <span className="text-blue-600 text-2xl">{results.qualityOfLife}</span>
        </p>
  
        <div className="mt-6">
          <p className="text-sm text-gray-700">
            Compared to the <span className="text-red-600 font-semibold">Average American</span> and the{" "}
            <span className="text-green-600 font-semibold">Ideal</span> lifestyle.
          </p>
          <p className="text-sm text-gray-600 mt-2 italic">
            (Graph to the right shows how your projected Quality of Life compares.)
          </p>
        </div>
  
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Start Over
        </button>
      </div>
    );
  }
  