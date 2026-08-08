export type LocationId = 'okara' | 'gamber';

export type AppointmentStatus = 'Pending' | 'Confirmed' | 'Rescheduled' | 'Completed' | 'Cancelled';

export interface Appointment {
  id: string;
  createdAt: string;
  parentName: string;
  childName: string;
  childAge: string;
  gender: 'Male' | 'Female' | 'Other';
  phone: string;
  whatsapp: string;
  location: LocationId;
  preferredDate: string;
  preferredTimeSlot: string;
  reason: string;
  symptoms?: string;
  notes?: string;
  status: AppointmentStatus;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'General' | 'Illness' | 'Development' | 'Preventive';
}

export interface ClinicLocation {
  id: LocationId;
  title: string;
  subtitle: string;
  address: string;
  colonyName?: string;
  landmarks: string[];
  city: string;
  province: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  mapsUrl: string;
  embedMapUrl: string;
  timings: string;
  days: string;
  phone: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export interface DoctorProfile {
  name: string;
  title: string;
  specialty: string;
  experienceYears: number;
  credentials: string[];
  diplomas: string[];
  memberships: string[];
  formerPositions: string[];
  phone: string;
  whatsapp: string;
  email: string;
  tagline: string;
  nonFcpsDisclaimer: string;
}
