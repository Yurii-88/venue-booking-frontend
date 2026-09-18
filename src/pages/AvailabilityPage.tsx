import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useBookingStore } from '../store/bookingStore';
import { API_URL } from '../lib/api';
import type { TimeSlot, Venue } from '../types';

export default function AvailabilityPage() {
  const { venueId } = useParams();
  const navigate = useNavigate();
  const { setVenue, setSlot } = useBookingStore();

  const [venue, setVenueData] = useState<Venue | null>(null);
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!venueId) return;

    const fetchData = async () => {
      try {
        const venueRes = await fetch(`${API_URL}/venues/${venueId}`);
        const venueData = await venueRes.json();
        setVenueData(venueData);
        setVenue(venueId);

        const slotsRes = await fetch(`${API_URL}/availability/${venueId}`);
        const slotsData = await slotsRes.json();
        setSlots(slotsData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [venueId, setVenue]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!venue) return <div className="p-8">Venue not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="mb-8 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold mb-2">{venue.name}</h1>
        <p className="text-xl text-gray-600 mb-8">📍 {venue.location}</p>

        <h2 className="text-2xl font-bold mb-4">Available Time Slots</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {slots.map((slot) => (
            <button
              key={slot.id}
              onClick={() => {
                setSlot(slot.id, slot.price);
                navigate('/checkout');
              }}
              disabled={!slot.available}
              className={`p-4 border-2 rounded-lg font-bold ${
                slot.available
                  ? 'bg-white border-indigo-500 hover:bg-indigo-50 cursor-pointer'
                  : 'bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <div className="text-sm">
                {new Date(slot.time).toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
              <div className="text-lg">${slot.price}</div>
              <div className="text-xs">
                {slot.available ? `${slot.spotsRemaining} spots` : 'Full'}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
