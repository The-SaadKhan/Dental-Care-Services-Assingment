import { Service, Testimonial, Appointment } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Dental Checkup at Home',
    description: 'Comprehensive oral examination and consultation by certified dentists',
    icon: 'Stethoscope',
    price: '₹499'
  },
  {
    id: '2',
    title: 'Tooth Extraction',
    description: 'Safe and painless tooth removal with proper anesthesia',
    icon: 'Syringe',
    price: '₹999'
  },
  {
    id: '3',
    title: 'Root Canal Treatment',
    description: 'Advanced RCT performed with modern equipment at your home',
    icon: 'Activity',
    price: '₹2,999'
  },
  {
    id: '4',
    title: 'Dentures & Implants',
    description: 'Custom-fitted dentures and dental implants consultation',
    icon: 'Smile',
    price: '₹4,999'
  },
  {
    id: '5',
    title: 'Elderly Dental Care',
    description: 'Specialized dental care for senior citizens at home',
    icon: 'Heart',
    price: '₹699'
  },
  {
    id: '6',
    title: 'Teeth Whitening',
    description: 'Professional teeth whitening treatment at your convenience',
    icon: 'Sparkles',
    price: '₹1,499'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'Excellent service! The dentist was very professional and did the checkup at home. My mother felt very comfortable.',
    location: 'Gurgaon',
    date: '2 weeks ago'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Best home dental service in Delhi NCR. Very hygienic and the equipment was all sterilized. Highly recommended!',
    location: 'Delhi',
    date: '1 month ago'
  },
  {
    id: '3',
    name: 'Amit Patel',
    rating: 4,
    comment: 'Good experience overall. The dentist arrived on time and was very gentle. Pricing is transparent.',
    location: 'Noida',
    date: '3 weeks ago'
  },
  {
    id: '4',
    name: 'Sneha Reddy',
    rating: 5,
    comment: 'Amazing service for my father who has mobility issues. The dentist was patient and explained everything clearly.',
    location: 'Gurgaon',
    date: '1 week ago'
  }
];

export const cities = [
  'Delhi',
  'Gurgaon',
  'Noida',
  'Faridabad',
  'Ghaziabad',
  'Greater Noida'
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    service: 'Dental Checkup at Home',
    date: '2026-02-05',
    time: '10:00 AM',
    status: 'upcoming',
    dentistName: 'Dr. Rajesh Malhotra'
  },
  {
    id: '2',
    service: 'Root Canal Treatment',
    date: '2026-01-15',
    time: '02:00 PM',
    status: 'completed',
    dentistName: 'Dr. Priya Verma'
  },
  {
    id: '3',
    service: 'Tooth Extraction',
    date: '2025-12-20',
    time: '11:00 AM',
    status: 'completed',
    dentistName: 'Dr. Amit Singh'
  }
];

export const whyChooseUsPoints = [
  {
    icon: 'UserCheck',
    title: 'Certified Dentists',
    description: 'All our dentists are highly qualified and experienced professionals'
  },
  {
    icon: 'Shield',
    title: 'Sterilized Equipment',
    description: 'Hospital-grade sterilization for all dental instruments'
  },
  {
    icon: 'DollarSign',
    title: 'Transparent Pricing',
    description: 'No hidden charges - clear pricing before treatment'
  },
  {
    icon: 'Clock',
    title: 'On-Time Visits',
    description: 'Punctual service with SMS/WhatsApp confirmations'
  },
  {
    icon: 'Home',
    title: 'Home Comfort',
    description: 'Get treated in the comfort and safety of your home'
  },
  {
    icon: 'Headphones',
    title: '24/7 Support',
    description: 'Round-the-clock customer support for emergencies'
  }
];

export const howItWorksSteps = [
  {
    step: 1,
    title: 'Book Appointment',
    description: 'Schedule your appointment online or call us',
    icon: 'Calendar'
  },
  {
    step: 2,
    title: 'Dentist Visits Home',
    description: 'Our certified dentist arrives at your doorstep',
    icon: 'MapPin'
  },
  {
    step: 3,
    title: 'Treatment & Follow-up',
    description: 'Receive treatment and follow-up care',
    icon: 'CheckCircle'
  }
];
