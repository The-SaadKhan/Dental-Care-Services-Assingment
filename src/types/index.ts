export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  location: string;
  date: string;
}

export interface Appointment {
  id: string;
  service: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  dentistName: string;
}

export interface User {
  name: string;
  email: string;
  phone: string;
  address?: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  whatsapp: string;
  address: string;
  city: string;
  service: string;
  date: string;
  time: string;
}
