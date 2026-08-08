import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, User, Baby, Phone, MessageCircle, AlertCircle, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { CLINIC_LOCATIONS, TIME_SLOTS, WHATSAPP_BASE_URL } from '../config/clinicData';
import { LocationId, Appointment } from '../types';
import { saveAppointment, buildPatientWhatsAppLink } from '../services/appointmentStore';

interface BookingSectionProps {
  initialLocation?: LocationId;
  initialReason?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialLocation = 'gamber',
  initialReason = '',
}) => {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [sameAsPhone, setSameAsPhone] = useState(true);
  const [location, setLocation] = useState<LocationId>('gamber');
  const [preferredDate, setPreferredDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [preferredTimeSlot, setPreferredTimeSlot] = useState(TIME_SLOTS[0]);
  const [reason, setReason] = useState(initialReason);
  const [notes, setNotes] = useState('');
  const [consent, setConsent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Confirmation State
  const [submittedAppointment, setSubmittedAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    if (initialLocation) {
      setLocation(initialLocation);
    }
    if (initialReason) {
      setReason(initialReason);
    }
  }, [initialLocation, initialReason]);

  useEffect(() => {
    if (sameAsPhone) {
      setWhatsapp(phone);
    }
  }, [phone, sameAsPhone]);

  const getDayOfWeekName = (dateStr: string) => {
    if (!dateStr) return '';
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!parentName.trim()) {
      setErrorMsg('Please enter Parent/Guardian Name.');
      return;
    }
    if (!childName.trim()) {
      setErrorMsg('Please enter Child\'s Name.');
      return;
    }
    if (!childAge.trim()) {
      setErrorMsg('Please enter Child\'s Age (e.g., 2 Years or 6 Months).');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setErrorMsg('Please enter a valid Phone Number for appointment confirmation.');
      return;
    }
    if (!reason.trim()) {
      setErrorMsg('Please describe the reason for visit or child\'s symptoms.');
      return;
    }
    if (!consent) {
      setErrorMsg('Please check the confirmation consent box.');
      return;
    }

    const newApt = saveAppointment({
      parentName: parentName.trim(),
      childName: childName.trim(),
      childAge: childAge.trim(),
      gender,
      phone: phone.trim(),
      whatsapp: (sameAsPhone ? phone : whatsapp).trim(),
      location,
      preferredDate,
      preferredTimeSlot,
      reason: reason.trim(),
      symptoms: notes.trim(),
    });

    setSubmittedAppointment(newApt);
  };

  const handleReset = () => {
    setSubmittedAppointment(null);
    setParentName('');
    setChildName('');
    setChildAge('');
    setPhone('');
    setWhatsapp('');
    setReason('');
    setNotes('');
    setConsent(false);
    setErrorMsg('');
  };

  const selectedLocationObj = CLINIC_LOCATIONS.find((l) => l.id === location);

  return (
    <section id="appointments" className="py-16 md:py-24 bg-gradient-to-b from-sky-50/60 via-white to-slate-50 border-b border-sky-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-100 px-3 py-1 rounded-full border border-sky-200">
            Online Appointment Request
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            Book an Appointment
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
            Fill in your child&apos;s details to request a consultation with Dr. Shakeel Anjum Ramay at Adda Gamber Clinic.
          </p>
        </div>

        {/* Confirmation Screen View */}
        {submittedAppointment ? (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-200 shadow-xl text-center space-y-6 animate-in fade-in duration-300">
            
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="inline-block bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                Request ID: {submittedAppointment.id}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                Appointment Request Received
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-lg mx-auto">
                Thank you. Your appointment request has been logged successfully. The clinic staff will contact you to confirm availability.
              </p>
            </div>

            {/* Request Summary Box */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left text-xs sm:text-sm space-y-3 max-w-md mx-auto">
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-500">Child Name:</span>
                <span className="font-bold text-slate-900">{submittedAppointment.childName} ({submittedAppointment.childAge})</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-500">Parent / Guardian:</span>
                <span className="font-semibold text-slate-900">{submittedAppointment.parentName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-500">Clinic Location:</span>
                <span className="font-bold text-sky-800">Adda Gamber Clinic</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-500">Requested Date:</span>
                <span className="font-semibold text-slate-900">{submittedAppointment.preferredDate} ({getDayOfWeekName(submittedAppointment.preferredDate)})</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-500">Time Slot:</span>
                <span className="font-semibold text-slate-900">{submittedAppointment.preferredTimeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Number:</span>
                <span className="font-semibold text-slate-900">{submittedAppointment.phone}</span>
              </div>
            </div>

            {/* Direct WhatsApp Sync Action */}
            <div className="pt-2 space-y-3 max-w-md mx-auto">
              <a
                href={buildPatientWhatsAppLink(submittedAppointment)}
                target="_blank"
                rel="noopener noreferrer"
                id="booking-send-whatsapp-btn"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Booking Details via WhatsApp</span>
              </a>

              <p className="text-xs text-slate-500">
                Clicking WhatsApp will open a pre-filled message directly to +92 344 3335333 for fast confirmation.
              </p>

              <button
                onClick={handleReset}
                id="booking-submit-another-btn"
                className="text-xs text-sky-700 hover:text-sky-900 font-semibold underline pt-2"
              >
                Submit another appointment request
              </button>
            </div>

          </div>
        ) : (
          /* Main Booking Form Card */
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-xl">
            
            {errorMsg && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* 1. Location Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Clinic Location *
                </label>
                <div className="p-4 rounded-2xl border border-sky-500 bg-sky-50/80 ring-2 ring-sky-500/20 flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-sky-600" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Adda Gamber Clinic</p>
                    <p className="text-xs text-slate-600 mt-0.5">Dr. Shakeel Anjum Ramay Child Health Practice • Adda Gamber, Punjab, Pakistan</p>
                    <p className="text-[11px] text-sky-700 font-medium mt-1">Mon - Sat Consultations Available</p>
                  </div>
                </div>
              </div>

              {/* 2. Patient & Parent Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Parent / Guardian Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="e.g. Muhammad Tariq"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Child&apos;s Full Name *
                  </label>
                  <div className="relative">
                    <Baby className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      placeholder="e.g. Ali Tariq"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Child&apos;s Age *
                  </label>
                  <input
                    type="text"
                    required
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    placeholder="e.g. 3 Years or 8 Months"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Gender *
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as 'Male' | 'Female' | 'Other')}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden bg-white"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

              </div>

              {/* 3. Phone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number (Calls) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0300 1234567"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp Number *
                  </label>
                  <div className="relative">
                    <MessageCircle className="w-4 h-4 text-emerald-500 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      disabled={sameAsPhone}
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="e.g. 0300 1234567"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden disabled:bg-slate-100"
                    />
                  </div>
                  <label className="flex items-center gap-2 mt-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sameAsPhone}
                      onChange={(e) => setSameAsPhone(e.target.checked)}
                      className="rounded text-sky-600 focus:ring-sky-500"
                    />
                    <span className="text-xs text-slate-600">WhatsApp number is same as phone number</span>
                  </label>
                </div>
              </div>

              {/* 4. Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Date * ({getDayOfWeekName(preferredDate)})
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Time Slot *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <select
                      value={preferredTimeSlot}
                      onChange={(e) => setPreferredTimeSlot(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden bg-white"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* 5. Symptoms & Reason for Visit */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Reason for Visit / Child&apos;s Symptoms *
                </label>
                <textarea
                  required
                  rows={3}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Describe your child's symptoms (e.g. Fever for 2 days, cough, appetite loss, growth checkup, etc.)..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden"
                ></textarea>
              </div>

              {/* Optional Message */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Optional Message / Previous History
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any additional information for the doctor or clinic staff..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 rounded text-sky-600 focus:ring-sky-500"
                  />
                  <span className="text-xs text-slate-600 leading-snug">
                    I confirm that the information provided is correct, and I consent to being contacted by Dr. Shakeel Anjum Ramay Children Clinic via Phone / WhatsApp regarding this appointment request.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="booking-form-submit-btn"
                className="w-full py-4 rounded-xl font-bold text-sm text-white bg-sky-600 hover:bg-sky-700 shadow-lg shadow-sky-600/25 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Request Appointment Now</span>
              </button>

            </form>

          </div>
        )}

      </div>
    </section>
  );
};
