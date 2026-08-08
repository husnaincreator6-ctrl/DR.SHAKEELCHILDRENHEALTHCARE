import { Appointment, AppointmentStatus, LocationId } from '../types';
import { CLINIC_LOCATIONS } from '../config/clinicData';

const STORAGE_KEY = 'dr_ramay_clinic_appointments';

export function getAppointmentsFromStorage(): Appointment[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Seed with 2 sample realistic appointment requests so admin panel can be tested immediately
      const initial: Appointment[] = [
        {
          id: 'APT-1001',
          createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
          parentName: 'Muhammad Tariq',
          childName: 'Ali Tariq',
          childAge: '3 Years',
          gender: 'Male',
          phone: '+92 300 1234567',
          whatsapp: '923001234567',
          location: 'gamber',
          preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
          preferredTimeSlot: '05:00 PM - 06:00 PM',
          reason: 'Seasonal cough, fever and loss of appetite for 2 days.',
          status: 'Pending',
        },
        {
          id: 'APT-1002',
          createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
          parentName: 'Saima Parveen',
          childName: 'Ayesha Bibi',
          childAge: '14 Months',
          gender: 'Female',
          phone: '+92 345 9876543',
          whatsapp: '923459876543',
          location: 'gamber',
          preferredDate: new Date().toISOString().split('T')[0],
          preferredTimeSlot: '11:00 AM - 12:00 PM',
          reason: 'Routine growth checkup and weaning nutrition advice.',
          status: 'Confirmed',
        },
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading appointments from localStorage', err);
    return [];
  }
}

export function saveAppointment(data: Omit<Appointment, 'id' | 'createdAt' | 'status'>): Appointment {
  const appointments = getAppointmentsFromStorage();
  const idNumber = Math.floor(1000 + Math.random() * 9000);
  const newAppointment: Appointment = {
    ...data,
    id: `APT-${idNumber}`,
    createdAt: new Date().toISOString(),
    status: 'Pending',
  };

  const updated = [newAppointment, ...appointments];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return newAppointment;
}

export function updateAppointmentStatus(id: string, status: AppointmentStatus, notes?: string): Appointment[] {
  const appointments = getAppointmentsFromStorage();
  const updated = appointments.map((apt) => {
    if (apt.id === id) {
      return {
        ...apt,
        status,
        notes: notes !== undefined ? notes : apt.notes,
      };
    }
    return apt;
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function deleteAppointment(id: string): Appointment[] {
  const appointments = getAppointmentsFromStorage();
  const updated = appointments.filter((apt) => apt.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function buildPatientWhatsAppLink(appointment: Appointment): string {
  const locObj = CLINIC_LOCATIONS.find((l) => l.id === appointment.location);
  const locTitle = locObj ? locObj.title : appointment.location;

  let message = `Assalam o Alaikum ${appointment.parentName},\n`;
  message += `Regarding your appointment request (ID: ${appointment.id}) for ${appointment.childName} with Dr. Shakeel Anjum Ramay:\n\n`;
  message += `📍 Location: ${locTitle}\n`;
  message += `📅 Date: ${appointment.preferredDate}\n`;
  message += `⏰ Time: ${appointment.preferredTimeSlot}\n`;
  message += `Status: ${appointment.status.toUpperCase()}\n\n`;

  if (appointment.status === 'Confirmed') {
    message += `Your appointment is CONFIRMED. Please arrive 10 minutes prior to your time slot.\nThank you!`;
  } else if (appointment.status === 'Rescheduled') {
    message += `We would like to reschedule your visit. Please let us know if another time works for you.`;
  } else {
    message += `Thank you for contacting Dr. Shakeel Anjum Ramay Children Clinic.`;
  }

  // Format phone number clean
  let cleanPhone = appointment.whatsapp || appointment.phone;
  cleanPhone = cleanPhone.replace(/[^0-9]/g, '');
  if (cleanPhone.startsWith('0')) {
    cleanPhone = '92' + cleanPhone.substring(1);
  }

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
