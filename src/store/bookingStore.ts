import { create } from 'zustand';
import type { Booking } from '../types';

interface BookingStore {
  booking: Booking;
  setVenue: (venueId: string) => void;
  setDate: (date: Date) => void;
  setSlot: (slotId: string, price: number) => void;
  setCustomer: (name: string, email: string) => void;
  reset: () => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  booking: {
    venueId: '',
    slotId: '',
    customerName: '',
    customerEmail: '',
    date: null,
    totalPrice: 0,
  },
  setVenue: (venueId) =>
    set((state) => ({
      booking: { ...state.booking, venueId },
    })),
  setDate: (date) =>
    set((state) => ({
      booking: { ...state.booking, date },
    })),
  setSlot: (slotId, price) =>
    set((state) => ({
      booking: { ...state.booking, slotId, totalPrice: price },
    })),
  setCustomer: (name, email) =>
    set((state) => ({
      booking: { ...state.booking, customerName: name, customerEmail: email },
    })),
  reset: () =>
    set({
      booking: {
        venueId: '',
        slotId: '',
        customerName: '',
        customerEmail: '',
        date: null,
        totalPrice: 0,
      },
    }),
}));
