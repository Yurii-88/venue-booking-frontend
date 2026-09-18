import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from '../lib/api';
import type { Venue } from '../types';

export default function HomePage() {
  const navigate = useNavigate();
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch(`${API_URL}/venues`);
        const data = await response.json();
        setVenues(data);
      } catch (err) {
        console.error('Failed to fetch venues:', err);
        setError('Failed to load venues. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-600">{error}</div>;

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
          {venues.map((venue) => (
            <div
              key={venue.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {venue.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6">📍 {venue.location}</p>
              <button
                onClick={() => navigate(`/availability/${venue.id}`)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors cursor-pointer"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
