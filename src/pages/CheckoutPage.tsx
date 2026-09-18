import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useBookingStore } from '../store/bookingStore';
import { API_URL } from '../lib/api';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { booking, setCustomer, reset } = useBookingStore();
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!customerName || !customerEmail) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          venueId: booking.venueId,
          slotId: booking.slotId,
          customerName,
          customerEmail,
        }),
      });

      if (!response.ok) {
        throw new Error('Booking failed');
      }

      setCustomer(customerName, customerEmail);
      reset();
      navigate('/confirmation');
    } catch (err) {
      setError('Failed to create booking. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!booking.venueId || !booking.slotId) {
    return (
      <div className="p-8">
        <p>Invalid booking. Please start over.</p>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          ← Back
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Booking Summary</h1>

          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="mb-2">
              <strong>Price:</strong> ${booking.totalPrice}
            </p>
            <p>
              <strong>Status:</strong> Pending Payment
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-bold mb-2">Name</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-lg p-3"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-2">Email</label>
              <input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-lg p-3"
                required
              />
            </div>

            {error && <div className="mb-4 text-red-600">{error}</div>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg disabled:opacity-50 cursor-pointer"
            >
              {loading ? 'Processing...' : 'Confirm Booking'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
