import { useEffect } from 'react';
import { DOCTOR_PROFILE, CLINIC_LOCATIONS, FAQS_LIST } from '../config/clinicData';

export function SeoStructuredData() {
  useEffect(() => {
    // Physician / Medical Clinic Schema
    const clinicSchema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      'name': 'Dr. Shakeel Anjum Ramay Children Clinic',
      'alternateName': 'Dr Shakeel Anjum Ramay Child Health Clinic',
      'image': 'https://drshakeelanjumramay.com/assets/doctor_portrait.jpg',
      'telephone': DOCTOR_PROFILE.phone,
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': CLINIC_LOCATIONS[0].address,
        'addressLocality': 'Adda Gamber',
        'addressRegion': 'Punjab',
        'addressCountry': 'PK',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 30.7475874,
        'longitude': 73.3257228,
      },
      'medicalSpecialty': 'Pediatric',
      'availableService': [
        {
          '@type': 'MedicalProcedure',
          'name': 'General Child Health Consultation',
        },
        {
          '@type': 'MedicalProcedure',
          'name': 'Childhood Illness Assessment',
        },
        {
          '@type': 'MedicalProcedure',
          'name': 'Child Growth & Development Guidance',
        },
      ],
      'physician': {
        '@type': 'Physician',
        'name': DOCTOR_PROFILE.name,
        'jobTitle': DOCTOR_PROFILE.title,
        'description': 'Experienced Child Healthcare practitioner in Adda Gamber with over 20 years of experience.',
        'medicalSpecialty': 'Pediatrics',
        'alumniOf': 'PGMI',
        'hasCredential': DOCTOR_PROFILE.credentials,
      },
    };

    // FAQ Page Schema
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': FAQS_LIST.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer,
        },
      })),
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://drshakeelanjumramay.com/',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'About Doctor',
          'item': 'https://drshakeelanjumramay.com/#about',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Child Care Services',
          'item': 'https://drshakeelanjumramay.com/#services',
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': 'Locations',
          'item': 'https://drshakeelanjumramay.com/#locations',
        },
      ],
    };

    const injectScript = (id: string, json: object) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(json);
    };

    injectScript('jsonld-clinic-schema', clinicSchema);
    injectScript('jsonld-faq-schema', faqSchema);
    injectScript('jsonld-breadcrumb-schema', breadcrumbSchema);

    return () => {
      ['jsonld-clinic-schema', 'jsonld-faq-schema', 'jsonld-breadcrumb-schema'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  return null;
}
