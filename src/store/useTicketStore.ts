import {create} from 'zustand';

interface TrafficTicketState {
  name: string;
  date: Date;
  licenseNumber: string;
  email: string;
  carColor: string;
  carMake: string;
  carModel: string;
  gpsPosition: { latitude: number; longitude: number } | null;
  setField: (field: string, value: any) => void;
}

export const useTrafficTicketStore = create<TrafficTicketState>((set) => ({
  name: '',
  date: new Date(),
  licenseNumber: '',
  email: '',
  carColor: '',
  carMake: '',
  carModel: '',
  gpsPosition: null,
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
}));