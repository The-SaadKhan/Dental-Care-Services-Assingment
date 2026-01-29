'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { mockAppointments } from '@/data/mockData';
import toast, { Toaster } from 'react-hot-toast';
import { Calendar, User, LogOut, Clock, UserCircle, Phone, MapPin, Mail } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  
  // Dummy user data
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    address: 'House No. 123, Sector 15, Gurgaon'
  });

  const handleLogout = () => {
    toast.success('Logged out successfully!');
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  const upcomingAppointments = mockAppointments.filter(apt => apt.status === 'upcoming');
  const pastAppointments = mockAppointments.filter(apt => apt.status === 'completed');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Welcome, {user.name}!
                </h1>
                <p className="text-gray-600 mt-1">Manage your appointments and profile</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition font-semibold flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Appointments */}
            <div className="lg:col-span-2 space-y-6">
              {/* Upcoming Appointments */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-teal-600" />
                  Upcoming Appointments
                </h2>
                
                {upcomingAppointments.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p className="text-5xl mb-3">📭</p>
                    <p>No upcoming appointments</p>
                    <button
                      onClick={() => router.push('/book-appointment')}
                      className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition"
                    >
                      Book Appointment
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-lg text-gray-900">
                            {appointment.service}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(appointment.status)}`}>
                            {appointment.status}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p className="flex items-center">
                            <UserCircle className="w-4 h-4 mr-2" />
                            {appointment.dentistName}
                          </p>
                          <p className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(appointment.date).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </p>
                          <p className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {appointment.time}
                          </p>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <button
                            onClick={() => toast('Reschedule - UI only', { icon: 'ℹ️' })}
                            className="flex-1 bg-teal-50 text-teal-600 py-2 rounded-lg hover:bg-teal-100 transition text-sm font-semibold"
                          >
                            Reschedule
                          </button>
                          <button
                            onClick={() => toast.error('Cancelled - UI only')}
                            className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg hover:bg-red-100 transition text-sm font-semibold"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Past Appointments */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-teal-600" />
                  Past Appointments
                </h2>
                
                {pastAppointments.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p>No past appointments</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {pastAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="border border-gray-200 rounded-xl p-4"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-gray-900">
                            {appointment.service}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(appointment.status)}`}>
                            {appointment.status}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p className="flex items-center">
                            <UserCircle className="w-4 h-4 mr-2" />
                            {appointment.dentistName}
                          </p>
                          <p className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(appointment.date).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Column - Profile Info */}
            <div className="space-y-6">
              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <User className="w-6 h-6 mr-2 text-teal-600" />
                  Profile Info
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-500">Name</label>
                    <p className="text-gray-900 font-medium">{user.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-500">Email</label>
                    <p className="text-gray-900 font-medium">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-500">Phone</label>
                    <p className="text-gray-900 font-medium">{user.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-500">Address</label>
                    <p className="text-gray-900 font-medium">{user.address}</p>
                  </div>
                  
                  <button
                    onClick={() => toast('Edit profile - UI only', { icon: 'ℹ️' })}
                    className="w-full mt-4 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition font-semibold"
                  >
                    Edit Profile
                  </button>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                
                <div className="space-y-3">
                  <button
                    onClick={() => router.push('/book-appointment')}
                    className="w-full bg-teal-50 text-teal-600 py-3 rounded-lg hover:bg-teal-100 transition font-semibold text-left px-4 flex items-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Book New Appointment
                  </button>
                  <button
                    onClick={() => toast('Contact support - UI only', { icon: 'ℹ️' })}
                    className="w-full bg-blue-50 text-blue-600 py-3 rounded-lg hover:bg-blue-100 transition font-semibold text-left px-4 flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Contact Support
                  </button>
                  <button
                    onClick={() => toast('View all dentists - UI only', { icon: 'ℹ️' })}
                    className="w-full bg-purple-50 text-purple-600 py-3 rounded-lg hover:bg-purple-100 transition font-semibold text-left px-4 flex items-center gap-2"
                  >
                    <UserCircle className="w-5 h-5" />
                    View All Dentists
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
