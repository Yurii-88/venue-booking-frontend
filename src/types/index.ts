export interface Venue {
  id: string;
  name: string;
  location: string;
  timezone: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  price: number;
  available: boolean;
  spotsRemaining: number;
}

export interface Booking {
  venueId: string;
  slotId: string;
  customerName: string;
  customerEmail: string;
  date: Date | null;
  totalPrice: number;
}
