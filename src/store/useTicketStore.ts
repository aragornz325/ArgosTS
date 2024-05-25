import {create} from 'zustand';

interface TrafficTicketState {
  name: string;
  date: Date;
  licenseNumber: string;
  email: string;
  carColor: string;
  carMake: string;
  carModel: string;
  latitude: string;
  longitude: string;
  photoUri: string;
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
  latitude: '',
  longitude: '',
  photoUri: '',
  setField: (field:string, value:any) => set((state) => ({ ...state, [field]: value })),
}));