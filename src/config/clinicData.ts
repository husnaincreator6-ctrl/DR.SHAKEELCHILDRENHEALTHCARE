import { DoctorProfile, ClinicLocation, ServiceItem, FaqItem } from '../types';

export const CLINIC_IMAGES = {
  // Doctor Image (PRIMARY - front of website)
  doctorPrimary: 'https://i.ibb.co/TsLY67T/IMG-20260808-185630.jpg',
  doctorSecondary: 'https://i.ibb.co/8LGLnZsc/IMG-20260808-173056.jpg',
  
  // Healthcare & Clinic Visuals
  clinicEnvironment: 'https://i.ibb.co/NddrSPDF/Screenshot-20260808-172444.jpg',
  childHealthcareVisual: 'https://i.ibb.co/hRXCtkkR/Screenshot-20260808-172430.jpg',
  medicalAssessmentVisual: 'https://i.ibb.co/G42KDBg4/Screenshot-20260808-172844.jpg',
  familyWellnessVisual: 'https://i.ibb.co/XkvhkQjm/Screenshot-20260808-172909.jpg',
  clinicFacilityVisual: 'https://i.ibb.co/84BG9HYM/IMG-20260808-174003.jpg',
  pediatricCareNew: 'https://i.ibb.co/LDsNjSCC/IMG-20260808-WA0008.jpg',
};

export const DOCTOR_PROFILE: DoctorProfile = {
  name: 'Dr. Shakeel Anjum Ramay',
  title: 'Child Healthcare Practitioner',
  specialty: 'Children\'s Diseases & Child Health',
  experienceYears: 20,
  credentials: [
    'M.D. (Medicine)',
    'MBBS',
    'RMP',
    'D.A. (PGMI)',
  ],
  diplomas: [
    'Diploma in Child Health',
  ],
  memberships: [
    'Member Pakistan Pediatric Association (PPA) Punjab',
  ],
  formerPositions: [
    'Ex. Deputy District Health Officer (DDHO) Okara',
    'Ex. General Secretary / Vice President PMA Okara',
  ],
  phone: '+923443335333',
  whatsapp: '923443335333',
  email: 'info@drshakeelanjumramay.com',
  tagline: 'Compassionate Child Healthcare, Backed by 20+ Years of Experience',
  nonFcpsDisclaimer: 'Dr. Shakeel Anjum Ramay is an experienced medical practitioner holding MD (Medicine), MBBS, RMP, D.A. (PGMI), and Diploma in Child Health. He is not FCPS.',
};

export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    id: 'gamber',
    title: 'Adda Gamber',
    subtitle: 'Dr. Shakeel Anjum Ramay Child Health Clinic',
    address: 'Adda Gamber',
    landmarks: ['Adda Gamber Stop', 'Main GT Road', 'Okara District'],
    city: 'Gamber / Okara',
    province: 'Punjab, Pakistan',
    coordinates: {
      lat: 30.7475874,
      lng: 73.3257228,
    },
    mapsUrl: 'https://maps.app.goo.gl/YQFZvfHeKGPxiqP48',
    embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.335!2d73.3257228!3d30.7475874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ0JzUxLjMiTiA3M8KwMTknMzIuNiJF!5e0!3m2!1sen!2spk!4v1700000000000',
    timings: 'Daily Consultation Hours Available',
    days: 'Monday to Saturday',
    phone: '+923443335333',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'general-consultation',
    title: 'General Child Health Consultation',
    description: 'Comprehensive medical assessment for infants, toddlers, and young children with personalized advice for parents.',
    iconName: 'Stethoscope',
    category: 'General',
  },
  {
    id: 'illness-assessment',
    title: 'Childhood Illness Assessment',
    description: 'Careful physical evaluation and symptom diagnostic evaluation for seasonal or persistent children\'s conditions.',
    iconName: 'Activity',
    category: 'Illness',
  },
  {
    id: 'fever-infections',
    title: 'Fever & Common Infections',
    description: 'Diagnosis and medical guidance for pediatric fevers, viral infections, throat issues, and seasonal illness.',
    iconName: 'Thermometer',
    category: 'Illness',
  },
  {
    id: 'respiratory-care',
    title: 'Cough, Cold & Respiratory Complaints',
    description: 'Assessment for chest tightness, pediatric asthma, seasonal flu, viral cough, and airway congestion.',
    iconName: 'Wind',
    category: 'Illness',
  },
  {
    id: 'digestive-health',
    title: 'Digestive & Stomach Problems',
    description: 'Careful guidance for childhood stomach aches, diarrhea, constipation, vomiting, and food intolerances.',
    iconName: 'Apple',
    category: 'Illness',
  },
  {
    id: 'growth-development',
    title: 'Child Growth & Development Guidance',
    description: 'Monitoring height, weight, milestone achievements, physical growth curves, and developmental stages.',
    iconName: 'TrendingUp',
    category: 'Development',
  },
  {
    id: 'newborn-infant',
    title: 'Newborn & Infant Health Assessment',
    description: 'Gentle health checks for neonates and infants, including jaundice monitoring, colic guidance, and feeding habits.',
    iconName: 'Baby',
    category: 'General',
  },
  {
    id: 'nutrition-feeding',
    title: 'Nutrition & Feeding Guidance',
    description: 'Expert advice on weaning, balanced diets, appetite loss, vitamin deficiencies, and healthy weight management.',
    iconName: 'Utensils',
    category: 'Development',
  },
  {
    id: 'allergy-care',
    title: 'Allergy-Related Complaints',
    description: 'Evaluation for childhood skin allergies, allergic rhinitis, eczema rash, and environmental sensitivity.',
    iconName: 'ShieldAlert',
    category: 'Illness',
  },
  {
    id: 'preventive-care',
    title: 'Preventive Child Healthcare',
    description: 'Preventive health strategies, wellness routines, hygiene education, and seasonal disease prevention guidance.',
    iconName: 'ShieldCheck',
    category: 'Preventive',
  },
  {
    id: 'parental-guidance',
    title: 'Parents\' Health Guidance & Consultation',
    description: 'Reassuring counseling for parents regarding child behavior, sleep patterns, fever management at home, and hygiene.',
    iconName: 'Users',
    category: 'General',
  },
  {
    id: 'follow-up',
    title: 'Follow-up Consultations',
    description: 'Structured progress reviews to assess recovery, monitor response to treatment, and adjust care recommendations.',
    iconName: 'CalendarCheck',
    category: 'General',
  },
];

export const FAQS_LIST: FaqItem[] = [
  {
    id: 1,
    question: 'What qualifications does Dr. Shakeel Anjum Ramay have?',
    answer: 'Dr. Shakeel Anjum Ramay holds M.D. (Medicine), MBBS, RMP, D.A. (PGMI), and a Diploma in Child Health. He is a member of the Pakistan Pediatric Association (Punjab) and former Deputy District Health Officer (DDHO) Okara. Please note he is not FCPS.',
  },
  {
    id: 2,
    question: 'Does Dr. Shakeel Anjum Ramay treat children?',
    answer: 'Yes. Dr. Shakeel Anjum Ramay focuses specifically on children\'s health, illness evaluation, growth monitoring, and pediatric diseases for infants, toddlers, and adolescents.',
  },
  {
    id: 3,
    question: 'How many years of experience does the doctor have?',
    answer: 'Dr. Shakeel Anjum Ramay has over 20 years of experience providing compassionate medical care and advice for children\'s healthcare.',
  },
  {
    id: 4,
    question: 'Where is the clinic located?',
    answer: 'The clinic is located at Adda Gamber, Punjab, Pakistan (Google Maps coordinates: 30.7475874, 73.3257228). You can click "Get Directions" on the website to open the location directly in Google Maps.',
  },
  {
    id: 5,
    question: 'How can I book an appointment?',
    answer: 'You can easily book an appointment through our online appointment form on this website, or directly by calling or sending a WhatsApp message to +92 344 3335333.',
  },
  {
    id: 6,
    question: 'Can I contact the clinic through WhatsApp?',
    answer: 'Yes, WhatsApp is actively monitored. You can click any WhatsApp button on this website to chat directly with the clinic at +92 344 3335333.',
  },
  {
    id: 7,
    question: 'Can I choose my preferred date and time?',
    answer: 'Yes, during online booking you can select your preferred date and time slot. The clinic staff will confirm availability.',
  },
  {
    id: 8,
    question: 'What should I bring to my child\'s appointment?',
    answer: 'Please bring any previous medical records, prescriptions, vaccination charts, and relevant test reports to help the doctor understand your child\'s health history.',
  },
  {
    id: 9,
    question: 'How can I get directions to the clinic?',
    answer: 'You can click the "Get Directions" button in the Our Clinic Location section to open https://maps.app.goo.gl/YQFZvfHeKGPxiqP48 directly on Google Maps.',
  },
];

export const TIME_SLOTS = [
  '09:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 01:00 PM',
  '04:00 PM - 05:00 PM',
  '05:00 PM - 06:00 PM',
  '06:00 PM - 07:00 PM',
  '07:00 PM - 08:00 PM',
  '08:00 PM - 09:00 PM',
];

export const WHATSAPP_BASE_URL = 'https://wa.me/923443335333';
export const WHATSAPP_DEFAULT_TEXT = 'Assalam o Alaikum, I would like to book an appointment with Dr. Shakeel Anjum Ramay for my child.';
export const CALL_PHONE_NUMBER = '+923443335333';
export const CALL_DISPLAY_NUMBER = '+92 344 3335333';
