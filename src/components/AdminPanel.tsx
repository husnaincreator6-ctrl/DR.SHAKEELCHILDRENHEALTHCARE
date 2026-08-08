import React, { useState, useEffect } from 'react';
import {
  X, Search, Filter, Calendar, MapPin, CheckCircle2, Clock,
  XCircle, RotateCcw, Trash2, MessageCircle, Phone, Lock, Unlock,
  ShieldCheck, FileText, User, RefreshCw
} from 'lucide-react';
import { Appointment, AppointmentStatus, LocationId } from '../types';
import {
  getAppointmentsFromStorage,
  updateAppointmentStatus,
  deleteAppointment,
  buildPatientWhatsAppLink
} from '../services/appointmentStore';
import { CLINIC_LOCATIONS } from '../config/clinicData';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Easy toggle for demo, PIN 1234
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [locationFilter, setLocationFilter] = useState<string>('All');
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [noteInput, setNoteInput] = useState('');

  const loadData = () => {
    const list = getAppointmentsFromStorage();
    setAppointments(list);
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '1234' || pin === 'ramay') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect Staff PIN. Use PIN: 1234');
    }
  };

  const handleStatusChange = (id: string, newStatus: AppointmentStatus) => {
    const updated = updateAppointmentStatus(id, newStatus);
    setAppointments(updated);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this appointment request?')) {
      const updated = deleteAppointment(id);
      setAppointments(updated);
    }
  };

  const handleSaveNotes = (id: string) => {
    const updated = updateAppointmentStatus(id, appointments.find((a) => a.id === id)?.status || 'Pending', noteInput);
    setAppointments(updated);
    setEditingNotesId(null);
  };

  // Filter Logic
  const filteredAppointments = appointments.filter((apt) => {
    const matchesSearch =
      apt.childName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.parentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.phone.includes(searchQuery) ||
      apt.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'All' || apt.status === statusFilter;
    const matchesLocation = locationFilter === 'All' || apt.location === locationFilter;

    return matchesSearch && matchesStatus && matchesLocation;
  });

  // Stats calculation
  const totalCount = appointments.length;
  const pendingCount = appointments.filter((a) => a.status === 'Pending').length;
  const confirmedCount = appointments.filter((a) => a.status === 'Confirmed').length;
  const completedCount = appointments.filter((a) => a.status === 'Completed').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 text-slate-100 rounded-3xl max-w-6xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-slate-800">
        
        {/* Admin Header */}
        <div className="p-5 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Clinic Staff Appointment Portal</span>
                <span className="text-[10px] bg-emerald-900/80 text-emerald-300 px-2 py-0.5 rounded border border-emerald-700">
                  Live Admin
                </span>
              </h2>
              <p className="text-xs text-slate-400">Dr. Shakeel Anjum Ramay Children Clinic Dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadData}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Refresh Data"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Lock Screen if not authenticated */}
        {!isAuthenticated ? (
          <div className="p-12 text-center max-w-sm mx-auto space-y-4 my-auto">
            <Lock className="w-12 h-12 text-amber-400 mx-auto" />
            <h3 className="text-lg font-bold text-white">Staff Login Required</h3>
            <p className="text-xs text-slate-400">Enter clinic admin PIN code to access patient booking requests.</p>
            <form onSubmit={handlePinSubmit} className="space-y-3">
              <input
                type="password"
                placeholder="Enter PIN (Default: 1234)"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-center text-sm focus:border-amber-400 outline-hidden"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
              >
                Access Dashboard
              </button>
            </form>
          </div>
        ) : (
          /* Main Admin Content Body */
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            
            {/* Stats Summary Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                <span className="text-xs text-slate-400 block font-medium">Total Bookings</span>
                <span className="text-2xl font-extrabold text-white">{totalCount}</span>
              </div>
              <div className="bg-amber-950/30 p-4 rounded-2xl border border-amber-900/40">
                <span className="text-xs text-amber-300 block font-medium">Pending Requests</span>
                <span className="text-2xl font-extrabold text-amber-400">{pendingCount}</span>
              </div>
              <div className="bg-emerald-950/30 p-4 rounded-2xl border border-emerald-900/40">
                <span className="text-xs text-emerald-300 block font-medium">Confirmed</span>
                <span className="text-2xl font-extrabold text-emerald-400">{confirmedCount}</span>
              </div>
              <div className="bg-sky-950/30 p-4 rounded-2xl border border-sky-900/40">
                <span className="text-xs text-sky-300 block font-medium">Completed</span>
                <span className="text-2xl font-extrabold text-sky-400">{completedCount}</span>
              </div>
            </div>

            {/* Search & Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search by Child Name, Parent Name, Phone, or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:border-sky-500 outline-hidden"
                />
              </div>

              <div className="flex gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white outline-hidden"
                >
                  <option value="All">All Statuses</option>
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Rescheduled">Rescheduled</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>

                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white outline-hidden"
                >
                  <option value="All">All Locations</option>
                  <option value="gamber">Adda Gamber Clinic</option>
                </select>
              </div>
            </div>

            {/* Appointments List */}
            {filteredAppointments.length === 0 ? (
              <div className="p-12 text-center text-slate-500 bg-slate-950/50 rounded-2xl border border-slate-800">
                <Calendar className="w-10 h-10 mx-auto mb-2 opacity-50" />
                <p className="text-sm font-semibold">No appointment records match your filter.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredAppointments.map((apt) => {
                  const locTitle = 'Adda Gamber Clinic';
                  return (
                    <div
                      key={apt.id}
                      className="bg-slate-950 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors space-y-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-sky-400 font-bold">{apt.id}</span>
                            <span
                              className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                                apt.status === 'Confirmed'
                                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                                  : apt.status === 'Pending'
                                  ? 'bg-amber-950 text-amber-400 border border-amber-800'
                                  : apt.status === 'Completed'
                                  ? 'bg-sky-950 text-sky-400 border border-sky-800'
                                  : 'bg-rose-950 text-rose-400 border border-rose-800'
                              }`}
                            >
                              {apt.status}
                            </span>
                            <span className="text-xs text-slate-400 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-sky-500" />
                              {locTitle}
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-white">
                            Patient: {apt.childName} <span className="text-xs text-slate-400 font-normal">({apt.childAge}, {apt.gender})</span>
                          </h4>
                          <p className="text-xs text-slate-300">
                            Parent: <strong>{apt.parentName}</strong> • Phone: <a href={`tel:${apt.phone}`} className="text-sky-400 hover:underline">{apt.phone}</a>
                          </p>
                        </div>

                        {/* Date & Time Badge */}
                        <div className="text-right text-xs bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                          <p className="text-sky-300 font-bold">{apt.preferredDate}</p>
                          <p className="text-slate-400">{apt.preferredTimeSlot}</p>
                        </div>
                      </div>

                      {/* Reason & Symptoms */}
                      <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                        <p className="font-bold text-slate-200">Reason / Symptoms:</p>
                        <p>{apt.reason}</p>
                        {apt.symptoms && (
                          <p className="text-slate-400 text-[11px] italic">Note: {apt.symptoms}</p>
                        )}
                        {apt.notes && (
                          <p className="text-amber-300 text-[11px] font-medium pt-1 border-t border-slate-800">Staff Note: {apt.notes}</p>
                        )}
                      </div>

                      {/* Action Controls */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-900 text-xs">
                        
                        {/* Status Toggle Buttons */}
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleStatusChange(apt.id, 'Confirmed')}
                            className={`px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1 ${
                              apt.status === 'Confirmed' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Confirm</span>
                          </button>

                          <button
                            onClick={() => handleStatusChange(apt.id, 'Rescheduled')}
                            className={`px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1 ${
                              apt.status === 'Rescheduled' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            }`}
                          >
                            <Clock className="w-3.5 h-3.5 text-amber-400" />
                            <span>Reschedule</span>
                          </button>

                          <button
                            onClick={() => handleStatusChange(apt.id, 'Completed')}
                            className={`px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1 ${
                              apt.status === 'Completed' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                            <span>Complete</span>
                          </button>

                          <button
                            onClick={() => handleStatusChange(apt.id, 'Cancelled')}
                            className={`px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1 ${
                              apt.status === 'Cancelled' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            }`}
                          >
                            <XCircle className="w-3.5 h-3.5 text-rose-400" />
                            <span>Cancel</span>
                          </button>
                        </div>

                        {/* WhatsApp Direct Contact & Delete */}
                        <div className="flex items-center gap-2 ml-auto">
                          <a
                            href={buildPatientWhatsAppLink(apt)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-1 shadow-xs"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>WhatsApp Parent</span>
                          </a>

                          <button
                            onClick={() => handleDelete(apt.id)}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-900/60 text-slate-400 hover:text-rose-300 transition-colors"
                            title="Delete Request"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
