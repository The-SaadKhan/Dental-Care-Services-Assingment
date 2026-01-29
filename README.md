# 🦷 DentalCareHome - Home Dental Care Service Website

A modern, professional, mobile-first home dental care service website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

### 📄 Pages Implemented
1. **Home Page** - Complete landing page with all sections:
   - Hero section with CTA buttons
   - Services showcase
   - How It Works (3-step process)
   - Why Choose Us
   - Testimonials
   - Cities Served

2. **Book Appointment Page** - Full booking form with:
   - Form validation
   - City & service selection
   - Date & time picker
   - Success modal on submission

3. **Login Page** - User authentication UI with:
   - Email/password login
   - Google login button (UI only)
   - Forgot password link

4. **Signup Page** - User registration UI with:
   - Complete signup form
   - Password confirmation
   - Google signup button (UI only)

5. **User Dashboard** - Personalized dashboard with:
   - Upcoming appointments
   - Past appointments
   - Profile information
   - Quick actions

### 🎨 Design Features
- **Mobile-first responsive design**
- **Clean medical/healthcare aesthetic**
- **Smooth animations** using Framer Motion
- **Toast notifications** for user feedback
- **Fixed WhatsApp button** for easy contact
- **Professional color scheme** (Teal, Blue, White)

### 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Notifications:** React Hot Toast
- **Icons:** Emoji-based icons for clean design

## 📁 Project Structure

```
dental-care-website/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Home page
│   │   ├── book-appointment/
│   │   │   └── page.tsx               # Booking form
│   │   ├── login/
│   │   │   └── page.tsx               # Login page
│   │   ├── signup/
│   │   │   └── page.tsx               # Signup page
│   │   ├── dashboard/
│   │   │   └── page.tsx               # User dashboard
│   │   ├── layout.tsx                 # Root layout
│   │   └── globals.css                # Global styles
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.tsx               # Hero section
│   │   │   ├── Services.tsx           # Services grid
│   │   │   ├── HowItWorks.tsx         # Process steps
│   │   │   ├── WhyChooseUs.tsx        # Benefits section
│   │   │   ├── Testimonials.tsx       # Customer reviews
│   │   │   └── CitiesServed.tsx       # Service areas
│   │   ├── layout/
│   │   │   ├── Header.tsx             # Navigation header
│   │   │   ├── Footer.tsx             # Footer
│   │   │   └── WhatsAppButton.tsx     # Floating WhatsApp button
│   │   └── ui/                        # Reusable UI components
│   ├── data/
│   │   └── mockData.ts                # Dummy data
│   └── types/
│       └── index.ts                   # TypeScript interfaces
├── public/                            # Static assets
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd dental-care-website
   ```

2. **Install dependencies (already done):**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages & Routes

- `/` - Home page
- `/book-appointment` - Book appointment form
- `/login` - User login
- `/signup` - User registration
- `/dashboard` - User dashboard (after login/signup)

## 🎯 Important Notes

### ⚠️ Backend Integration
This is a **UI-only implementation**. All forms and authentication are **dummy/frontend-only**:

- **No actual API calls** are made
- **Form submissions** are logged to console
- **Authentication** is simulated (no real validation)
- **Dashboard data** is from mock/dummy data

### 🔧 Where to Add Backend Later

1. **Authentication** - Update `/login` and `/signup` pages:
   ```typescript
   // Replace this:
   await new Promise(resolve => setTimeout(resolve, 1000));
   
   // With actual API call:
   const response = await fetch('/api/auth/login', {...});
   ```

2. **Booking Form** - Update `/book-appointment`:
   ```typescript
   // Add actual API endpoint
   const response = await fetch('/api/appointments', {
     method: 'POST',
     body: JSON.stringify(formData)
   });
   ```

3. **Dashboard** - Fetch real user data:
   ```typescript
   // Replace mockAppointments with:
   const appointments = await fetch('/api/user/appointments');
   ```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js` to customize the color scheme.

### Update Contact Information
- **Phone number:** Update in `src/components/layout/WhatsAppButton.tsx`
- **Email:** Update in `src/components/layout/Footer.tsx`
- **Address:** Update in `src/components/layout/Footer.tsx`

### Modify Services
Edit `src/data/mockData.ts` to add/remove/modify services, testimonials, or cities.

## 📦 Dependencies

- next: ^16.1.6
- react: ^19.0.0
- framer-motion: ^11.x
- react-hot-toast: ^2.x
- tailwindcss: ^3.x
- typescript: ^5.x

## ✅ Features Checklist

- [x] Home page with all sections
- [x] Services showcase
- [x] How it works section
- [x] Testimonials
- [x] Cities served
- [x] Book appointment form with validation
- [x] Login page (UI only)
- [x] Signup page (UI only)
- [x] User dashboard (dummy data)
- [x] Fixed WhatsApp button
- [x] Mobile responsive design
- [x] Smooth animations
- [x] Toast notifications
- [x] Clean folder structure
- [x] TypeScript support
- [x] SEO-friendly meta tags

## 📄 License

This project is open source and available for educational and commercial use.

---

**Built with ❤️ using Next.js 14 & Tailwind CSS**
