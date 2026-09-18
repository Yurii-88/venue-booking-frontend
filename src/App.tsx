function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🎳 Venue Booking System
          </h1>
          <p className="text-xl text-gray-600">
            Book your entertainment venue instantly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 cursor-pointer">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Downtown Bowling
            </h2>
            <p className="text-lg text-gray-600 mb-2">📍 New York</p>
            <p className="text-gray-500 mb-6">
              Premium bowling center with 20 lanes
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Book Now
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 cursor-pointer">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Darts Lounge
            </h2>
            <p className="text-lg text-gray-600 mb-2">📍 Brooklyn</p>
            <p className="text-gray-500 mb-6">
              Professional darts bar with tournaments
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
