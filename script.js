// Language Switching
const translations = {
    sr: {
        // Navigation
        'nav-home': 'Početna',
        'nav-features': 'Funkcije',
        'nav-pricing': 'Cene',
        'nav-testimonials': 'Iskustva',
        'nav-contact': 'Kontakt',
        'nav-privacy': 'Politika Privatnosti',

        // Hero Section
        'hero-title': 'Instagram Asistent za Vaš Salon',
        'hero-subtitle': 'AI asistent koji automatski odgovara na Instagram poruke, zakazuje termine i vodi razgovore sa klijentima 24/7 dok vi kontrolišete sve preko mobilne aplikacije',
        'hero-cta': 'Probajte Besplatno',

        // Features Section
        'features-title': 'Zašto Izabrati Lumu',
        'features-subtitle': 'Moćne funkcije automatizacije kreirane posebno za salone lepote',
        'feature-1-title': '24/7 Instant Odgovor',
        'feature-1-desc': 'Nikada ne propustite potencijalnog klijenta. Luma odmah odgovara na Instagram poruke, čak i kad ste zauzeti ili zatvoreni.',
        'feature-2-title': 'Automatsko Zakazivanje',
        'feature-2-desc': 'Klijenti zakazuju termine direktno preko Instagrama. Termini se automatski prikazuju u vašoj mobilnoj aplikaciji sa svim detaljima.',
        'feature-3-title': 'Analiza Fotografija',
        'feature-3-desc': 'Luma analizira fotografije klijenata da preporuči najbolje usluge i pruži precizne cene.',
        'feature-4-title': 'Pametna Analitika',
        'feature-4-desc': 'Pratite metrike razgovora, stope zakazivanja i zadovoljstvo klijenata da optimizujete uslugu.',
        'feature-5-title': 'Upravljanje Klijentima',
        'feature-5-desc': 'Vodite detaljne profile klijenata, preferencije i istoriju zakazivanja za personalizovanu uslugu.',
        'feature-6-title': 'Mobilna Aplikacija',
        'feature-6-desc': 'Kontrolišite sve sa mobilne aplikacije - pregledajte termine, upravljajte AI notifikacijama i pratite analitiku u realnom vremenu.',

        // Mobile App Section
        'app-title': 'Kontrolišite Sve sa Mobilne Aplikacije',
        'app-subtitle': 'Moderna mobilna aplikacija kreirana specijalno za vlasnike salona',
        'app-calendar-title': 'Pregledajte Sve Termine',
        'app-calendar-desc': 'Dnevni, nedeljni i mesečni prikaz svih zakazanih termina. Dodajte nove termine ili ažurirajte postojeće direktno iz aplikacije.',
        'app-calendar-feature-1': 'Pregled termina po datumu',
        'app-calendar-feature-2': 'Detalji klijenta i usluge',
        'app-calendar-feature-3': 'Status rezervacije (zakazano/završeno/otkazano)',
        'app-ai-title': 'Kontrola AI Razgovora',
        'app-ai-desc': 'Dobijajte notifikacije kada AI analizira slike ili složene zahteve. Odlučite da li AI nastavlja ili vi preuzimate razgovor.',
        'app-ai-feature-1': 'Notifikacije za sve važne događaje',
        'app-ai-feature-2': 'Pregledajte i uredite AI odgovore',
        'app-ai-feature-3': 'Pošaljite manuelnu poruku ili nastavite sa AI',
        'app-analytics-title': 'Uvid u Performanse',
        'app-analytics-desc': 'Pratite broj termina, prihode, popularne usluge i trendove. Sve metrike na jednom mestu.',
        'app-analytics-feature-1': 'Grafikon zakazivanja po danima',
        'app-analytics-feature-2': 'Ukupni prihodi i broj termina',
        'app-analytics-feature-3': 'Najtraženije usluge',
        'app-instagram-title': 'Jednostavno Povezivanje',
        'app-instagram-desc': 'Povežite vaš Instagram Business nalog sa jednim klikom. OAuth autentifikacija bez komplikovanih podešavanja.',
        'app-instagram-feature-1': 'Bezbedna OAuth autentifikacija',
        'app-instagram-feature-2': 'Automatska sinhronizacija poruka',
        'app-management-title': 'AI Učenje iz Vaših Postavki',
        'app-management-desc': 'Sve što podesite u aplikaciji, Luma automatski koristi za upravljanje klijentima. Nema potrebe za manuelnim ažuriranjem - Luma se prilagođava u realnom vremenu.',
        'app-management-feature-1': 'Luma automatski predlaže usluge klijentima',
        'app-management-feature-2': 'Pametno raspoređivanje zaposlenih',
        'app-management-feature-3': 'Automatsko poštovanje odmora i praznika',
        'app-management-feature-4': 'Deli promocije i napomene sa klijentima',

        // Pricing Section
        'pricing-title': 'Izaberite Vaš Plan',
        'pricing-subtitle': 'Jednostavne, transparentne cene za salone svih veličina',
        'pricing-monthly': 'Mesečno',
        'pricing-yearly': 'Godišnje',
        'pricing-discount': 'Uštedite 6000 RSD',
        'pricing-plan-starter': 'Početni',
        'pricing-plan-professional': 'Profesionalni',
        'pricing-plan-premium': 'Premium',
        'pricing-popular': 'Najpopularniji',
        'pricing-cta-trial': 'Probajte Besplatno',
        'pricing-cta-contact': 'Kontaktirajte nas',

        // Testimonials Section
        'testimonials-title': 'Šta Kažu Naši Klijenti',
        'testimonials-subtitle': 'Kojima veruju stotine korisnika',

        // CTA Section
        'cta-title': 'Spremni da Transformišete Vaš Salon?',
        'cta-subtitle': 'Pokrenite vaš 14-dnevni besplatni probni period danas. Kreditna kartica nije potrebna.',
        'cta-trial': 'Probajte Besplatno',
        'cta-feature-1': '14-dnevni besplatni probni period',
        'cta-feature-2': 'Bez naplate za podešavanje',
        'cta-feature-3': 'Otkažite kada god želite',

        // Testimonials
        'testimonial-1': '"Luma je transformisala naš biznis! Zakazujemo 3x više termina preko Instagrama i naši klijenti obožavaju trenutne odgovore."',
        'testimonial-1-role': 'Vlasnica, Beauty Lux, Novi Sad',
        'testimonial-2': '"AI je neverovatno pametan - razume naše usluge i može da rešava složene zahteve za zakazivanje. Kao da imamo posvećenu recepciju 24/7."',
        'testimonial-2-role': 'Menadžer, Elite Hair Salon',
        'testimonial-3': '"Naš Instagram angažman je eksplodirao otkad koristimo Lumu. Klijenti cene brze odgovore i lak proces zakazivanja."',
        'testimonial-3-role': 'Osnivač, Bella Beauty Bar',

        // Pricing Plans Features
        'plan-starter-feat-1': 'AI rezervacije preko DM',
        'plan-starter-feat-2': 'Mobilna aplikacija',
        'plan-starter-feat-3': '1 salon lokacija',
        'plan-starter-feat-4': 'Do 10 usluga',
        'plan-starter-feat-5': '1 radnik',
        'plan-starter-feat-6': 'Kalendar termina',
        'plan-starter-feat-7': 'Analitika (7 dana)',
        'plan-starter-feat-8': 'Email podrška',

        'plan-prof-feat-1': 'Sve iz Početnog, plus:',
        'plan-prof-feat-2': 'AI analiza slika noktiju',
        'plan-prof-feat-3': 'Glasovne poruke - transkript',
        'plan-prof-feat-4': 'Push notifikacije',
        'plan-prof-feat-5': 'Do 3 salon lokacije',
        'plan-prof-feat-6': 'Neograničene usluge',
        'plan-prof-feat-7': 'Do 5 radnika',
        'plan-prof-feat-8': 'Analitika (30 dana)',
        'plan-prof-feat-9': 'Prioritetna podrška',

        'plan-premium-feat-1': 'Sve iz Profesionalnog, plus:',
        'plan-premium-feat-2': 'Neograničene lokacije',
        'plan-premium-feat-3': 'Neograničeni radnici',
        'plan-premium-feat-4': 'Neograničena analitika i izveštaji',
        'plan-premium-feat-5': 'Detekcija odlaganja plaćanja',
        'plan-premium-feat-6': 'Upravljanje Instagram/Facebook reklamama',
        'plan-premium-feat-7': '24/7 prioritetna podrška',

        // Mobile App Mockup Data
        'mockup-calendar-title': 'Kalendar',
        'mockup-calendar-subtitle': 'Upravljaj rezervacijama',
        'mockup-date': 'Petak, 08 Oktobar',
        'mockup-today': 'Danas',
        'mockup-bookings': '3 rezervacije • Klikni za promenu',
        'mockup-add-booking': '+ Dodaj rezervaciju',
        'mockup-service-1': 'Izlivanje gelom M',
        'mockup-service-2': 'Korekcija noktiju',
        'mockup-service-3': 'Ojačavanje gelom L',
        'mockup-client-1': 'Ana Petrović',
        'mockup-client-2': 'Marija Jovanović',
        'mockup-client-3': 'Jelena Nikolić',
        'mockup-status-confirmed': 'Potvrđeno',

        'mockup-notifications-title': 'AI Notifikacije',
        'mockup-notifications-subtitle': 'Pametna obaveštenja',
        'mockup-notif-1-title': 'Nova Rezervacija',
        'mockup-notif-1-time': 'Pre 5 min',
        'mockup-notif-1-msg': 'AI je zakazao termin za Anu Petrović - Izlivanje gelom M',
        'mockup-notif-2-title': 'Analiza Fotografije',
        'mockup-notif-2-time': 'Pre 12 min',
        'mockup-notif-2-msg': 'AI je analizirao sliku i preporučio uslugu',
        'mockup-image-badge': 'Slika priložena',
        'mockup-notif-3-title': 'Novi Razgovor',
        'mockup-notif-3-time': 'Pre 18 min',
        'mockup-notif-3-msg': 'Klijent pita o cenama - AI odgovorio',

        'mockup-analytics-title': 'Analitika',
        'mockup-analytics-subtitle': 'Pregled performansi',
        'mockup-analytics-today': 'Danas zakazano',
        'mockup-analytics-revenue': 'Nedeljni prihod',
        'mockup-analytics-weekly': 'Nedeljne rezervacije',
        'mockup-analytics-services': 'Najpopularnije usluge',
        'mockup-day-mon': 'Pon',
        'mockup-day-tue': 'Uto',
        'mockup-day-wed': 'Sre',
        'mockup-day-thu': 'Čet',
        'mockup-day-fri': 'Pet',
        'mockup-day-sat': 'Sub',
        'mockup-day-sun': 'Ned',

        'mockup-instagram-title': 'Instagram',
        'mockup-instagram-subtitle': 'Povežite nalog',
        'mockup-instagram-connect-title': 'Povežite Instagram Business nalog',
        'mockup-instagram-connect-desc': 'Povežite vaš Instagram Business nalog da biste omogućili automatsko upravljanje porukama i rezervacijama.',
        'mockup-instagram-feat-1': 'Automatski odgovori',
        'mockup-instagram-feat-2': 'AI zakazivanje termina',
        'mockup-instagram-feat-3': 'Upravljanje porukama',
        'mockup-instagram-warning': 'Napomena: Potreban je Instagram Business nalog povezan sa Facebook stranicom',
        'mockup-instagram-btn': 'Povežite Instagram nalog',

        'mockup-salon-title': 'Podešavanje salona',
        'mockup-salon-subtitle': 'Automatski Luma asistent prilagođava se vašim postavkama',
        'mockup-salon-feat-1-title': 'Usluge i cene',
        'mockup-salon-feat-1-desc': 'Definiši katalog usluga koje Luma koristi za zakazivanje i odgovore',
        'mockup-salon-feat-2-title': 'Zaposleni',
        'mockup-salon-feat-2-desc': 'Dodaj članove osoblja i Luma ih automatski raspoređuje po terminima',
        'mockup-salon-feat-3-title': 'Godišnji odmori',
        'mockup-salon-feat-3-desc': 'Postavi periode zatvaranja i Luma neće zakazivati tokom odmora',
        'mockup-salon-feat-4-title': 'Posebne napomene',
        'mockup-salon-feat-4-desc': 'Dodaj napomene i promocije koje Luma deli sa klijentima',
        'mockup-salon-footer': 'Luma automatski koristi vaša podešavanja za pametno upravljanje rezervacijama',

        // Instagram Chat Messages
        'chat-msg-1': 'Cao! Ja bih zelela korekciju noktiju, tuđji rad',
        'chat-msg-2': 'Korekcija – tuđi rad. 🗓️ Trajanje: 1 sat i 30 min. 💰 Ukupna cena: 2.600 RSD.',
        'chat-msg-3': 'Prvi slobodan termin je utorak, 02.09.2025 u 09:00h. Da li vam to odgovara ili želite da proverim neki kasniji termin? 😊',
        'chat-msg-4': 'Odgovara, hvala',
        'chat-msg-5': 'Super! 👍 Samo mi recite vaše ime i broj telefona pa da potvrdim rezervaciju 😊',
        'chat-msg-6': 'Marija, 0607270397',
        'chat-msg-7': 'Odlično! ✅ Termin je rezervisan za utorak, 02.09.2025. u 09:00. Molimo dođite 5 minuta ranije. Vidimo se! 💅',

        // Footer
        'footer-tagline': 'AI-powered Instagram automatizacija za salone lepote',
        'footer-product': 'Proizvod',
        'footer-product-features': 'Funkcije',
        'footer-product-pricing': 'Cene',
        'footer-product-integrations': 'Integracije',
        'footer-support': 'Podrška',
        'footer-support-help': 'Centar za pomoć',
        'footer-support-contact': 'Kontaktirajte nas',
        'footer-support-status': 'Status',
        'footer-support-community': 'Zajednica',
        'footer-company': 'Kompanija',
        'footer-company-about': 'O nama',
        'footer-company-blog': 'Blog',
        'footer-company-careers': 'Karijere',
        'footer-company-privacy': 'Privatnost',
        'footer-copyright': '© 2025 Luma. Sva prava zadržana.'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-features': 'Features',
        'nav-pricing': 'Pricing',
        'nav-testimonials': 'Testimonials',
        'nav-contact': 'Contact',
        'nav-privacy': 'Privacy Policy',

        // Hero Section
        'hero-title': 'Instagram Assistant for Your Salon',
        'hero-subtitle': 'AI assistant that automatically responds to Instagram messages, schedules appointments and manages conversations with clients 24/7 while you control everything from your mobile app',
        'hero-cta': 'Try For Free',

        // Features Section
        'features-title': 'Why Choose Luma',
        'features-subtitle': 'Powerful automation features designed specifically for beauty salons',
        'feature-1-title': '24/7 Instant Response',
        'feature-1-desc': 'Never miss a potential client. Luma responds instantly to Instagram messages, even when you\'re busy or closed.',
        'feature-2-title': 'Automatic Scheduling',
        'feature-2-desc': 'Clients book appointments directly through Instagram. Appointments automatically appear in your mobile app with all details.',
        'feature-3-title': 'Photo Analysis',
        'feature-3-desc': 'Luma analyzes client photos to recommend the best services and provide accurate pricing.',
        'feature-4-title': 'Smart Analytics',
        'feature-4-desc': 'Track conversation metrics, booking rates and client satisfaction to optimize your service.',
        'feature-5-title': 'Client Management',
        'feature-5-desc': 'Maintain detailed client profiles, preferences and booking history for personalized service.',
        'feature-6-title': 'Mobile App',
        'feature-6-desc': 'Control everything from your mobile app - view appointments, manage AI notifications and track analytics in real-time.',

        // Mobile App Section
        'app-title': 'Control Everything from Your Mobile App',
        'app-subtitle': 'Modern mobile app designed specifically for salon owners',
        'app-calendar-title': 'View All Appointments',
        'app-calendar-desc': 'Daily, weekly and monthly view of all scheduled appointments. Add new appointments or update existing ones directly from the app.',
        'app-calendar-feature-1': 'View appointments by date',
        'app-calendar-feature-2': 'Client and service details',
        'app-calendar-feature-3': 'Booking status (scheduled/completed/cancelled)',
        'app-ai-title': 'AI Conversation Control',
        'app-ai-desc': 'Get notifications when AI analyzes images or complex requests. Decide whether AI continues or you take over the conversation.',
        'app-ai-feature-1': 'Notifications for all important events',
        'app-ai-feature-2': 'Review and edit AI responses',
        'app-ai-feature-3': 'Send manual message or continue with AI',
        'app-analytics-title': 'Performance Insights',
        'app-analytics-desc': 'Track number of appointments, revenue, popular services and trends. All metrics in one place.',
        'app-analytics-feature-1': 'Booking chart by day',
        'app-analytics-feature-2': 'Total revenue and number of appointments',
        'app-analytics-feature-3': 'Most requested services',
        'app-instagram-title': 'Simple Connection',
        'app-instagram-desc': 'Connect your Instagram Business account with one click. OAuth authentication without complicated setup.',
        'app-instagram-feature-1': 'Secure OAuth authentication',
        'app-instagram-feature-2': 'Automatic message synchronization',
        'app-management-title': 'AI Learning from Your Settings',
        'app-management-desc': 'Everything you set up in the app, Luma automatically uses to manage clients. No need for manual updates - Luma adapts in real-time.',
        'app-management-feature-1': 'Luma automatically suggests services to clients',
        'app-management-feature-2': 'Smart employee scheduling',
        'app-management-feature-3': 'Automatic respect for holidays and vacations',
        'app-management-feature-4': 'Share promotions and notes with clients',

        // Pricing Section
        'pricing-title': 'Choose Your Plan',
        'pricing-subtitle': 'Simple, transparent pricing for salons of all sizes',
        'pricing-monthly': 'Monthly',
        'pricing-yearly': 'Yearly',
        'pricing-discount': 'Save 6000 RSD',
        'pricing-plan-starter': 'Starter',
        'pricing-plan-professional': 'Professional',
        'pricing-plan-premium': 'Premium',
        'pricing-popular': 'Most Popular',
        'pricing-cta-trial': 'Try For Free',
        'pricing-cta-contact': 'Contact Us',

        // Testimonials Section
        'testimonials-title': 'What Our Clients Say',
        'testimonials-subtitle': 'Trusted by hundreds of users',

        // CTA Section
        'cta-title': 'Ready to Transform Your Salon?',
        'cta-subtitle': 'Start your 14-day free trial today. No credit card required.',
        'cta-trial': 'Try For Free',
        'cta-feature-1': '14-day free trial',
        'cta-feature-2': 'No setup fees',
        'cta-feature-3': 'Cancel anytime',

        // Testimonials
        'testimonial-1': '"Luma has transformed our business! We book 3x more appointments through Instagram and our clients love the instant responses."',
        'testimonial-1-role': 'Owner, Beauty Lux, Novi Sad',
        'testimonial-2': '"The AI is incredibly smart - it understands our services and can handle complex booking requests. It\'s like having a dedicated receptionist 24/7."',
        'testimonial-2-role': 'Manager, Elite Hair Salon',
        'testimonial-3': '"Our Instagram engagement has exploded since using Luma. Clients appreciate the quick responses and easy booking process."',
        'testimonial-3-role': 'Founder, Bella Beauty Bar',

        // Pricing Plans Features
        'plan-starter-feat-1': 'AI bookings via DM',
        'plan-starter-feat-2': 'Mobile app',
        'plan-starter-feat-3': '1 salon location',
        'plan-starter-feat-4': 'Up to 10 services',
        'plan-starter-feat-5': '1 employee',
        'plan-starter-feat-6': 'Appointment calendar',
        'plan-starter-feat-7': 'Analytics (7 days)',
        'plan-starter-feat-8': 'Email support',

        'plan-prof-feat-1': 'Everything in Starter, plus:',
        'plan-prof-feat-2': 'AI nail photo analysis',
        'plan-prof-feat-3': 'Voice messages - transcript',
        'plan-prof-feat-4': 'Push notifications',
        'plan-prof-feat-5': 'Up to 3 salon locations',
        'plan-prof-feat-6': 'Unlimited services',
        'plan-prof-feat-7': 'Up to 5 employees',
        'plan-prof-feat-8': 'Analytics (30 days)',
        'plan-prof-feat-9': 'Priority support',

        'plan-premium-feat-1': 'Everything in Professional, plus:',
        'plan-premium-feat-2': 'Unlimited locations',
        'plan-premium-feat-3': 'Unlimited employees',
        'plan-premium-feat-4': 'Unlimited analytics and reports',
        'plan-premium-feat-5': 'Payment delay detection',
        'plan-premium-feat-6': 'Instagram/Facebook ads management',
        'plan-premium-feat-7': '24/7 priority support',

        // Mobile App Mockup Data
        'mockup-calendar-title': 'Calendar',
        'mockup-calendar-subtitle': 'Manage bookings',
        'mockup-date': 'Friday, October 08',
        'mockup-today': 'Today',
        'mockup-bookings': '3 bookings • Click to change',
        'mockup-add-booking': '+ Add booking',
        'mockup-service-1': 'Gel Extension M',
        'mockup-service-2': 'Nail Correction',
        'mockup-service-3': 'Gel Strengthening L',
        'mockup-client-1': 'Ana Petrović',
        'mockup-client-2': 'Marija Jovanović',
        'mockup-client-3': 'Jelena Nikolić',
        'mockup-status-confirmed': 'Confirmed',

        'mockup-notifications-title': 'AI Notifications',
        'mockup-notifications-subtitle': 'Smart notifications',
        'mockup-notif-1-title': 'New Booking',
        'mockup-notif-1-time': '5 min ago',
        'mockup-notif-1-msg': 'AI scheduled appointment for Ana Petrović - Gel Extension M',
        'mockup-notif-2-title': 'Photo Analysis',
        'mockup-notif-2-time': '12 min ago',
        'mockup-notif-2-msg': 'AI analyzed image and recommended service',
        'mockup-image-badge': 'Image attached',
        'mockup-notif-3-title': 'New Conversation',
        'mockup-notif-3-time': '18 min ago',
        'mockup-notif-3-msg': 'Client asking about prices - AI responded',

        'mockup-analytics-title': 'Analytics',
        'mockup-analytics-subtitle': 'Performance overview',
        'mockup-analytics-today': 'Booked today',
        'mockup-analytics-revenue': 'Weekly revenue',
        'mockup-analytics-weekly': 'Weekly bookings',
        'mockup-analytics-services': 'Most popular services',
        'mockup-day-mon': 'Mon',
        'mockup-day-tue': 'Tue',
        'mockup-day-wed': 'Wed',
        'mockup-day-thu': 'Thu',
        'mockup-day-fri': 'Fri',
        'mockup-day-sat': 'Sat',
        'mockup-day-sun': 'Sun',

        'mockup-instagram-title': 'Instagram',
        'mockup-instagram-subtitle': 'Connect account',
        'mockup-instagram-connect-title': 'Connect Instagram Business account',
        'mockup-instagram-connect-desc': 'Connect your Instagram Business account to enable automatic message and booking management.',
        'mockup-instagram-feat-1': 'Automatic responses',
        'mockup-instagram-feat-2': 'AI appointment scheduling',
        'mockup-instagram-feat-3': 'Message management',
        'mockup-instagram-warning': 'Note: Instagram Business account connected to Facebook page required',
        'mockup-instagram-btn': 'Connect Instagram account',

        'mockup-salon-title': 'Salon settings',
        'mockup-salon-subtitle': 'Luma assistant automatically adapts to your settings',
        'mockup-salon-feat-1-title': 'Services and pricing',
        'mockup-salon-feat-1-desc': 'Define service catalog that Luma uses for booking and responses',
        'mockup-salon-feat-2-title': 'Employees',
        'mockup-salon-feat-2-desc': 'Add staff members and Luma automatically assigns them to appointments',
        'mockup-salon-feat-3-title': 'Annual holidays',
        'mockup-salon-feat-3-desc': 'Set closure periods and Luma won\'t schedule during vacations',
        'mockup-salon-feat-4-title': 'Special notes',
        'mockup-salon-feat-4-desc': 'Add notes and promotions that Luma shares with clients',
        'mockup-salon-footer': 'Luma automatically uses your settings for smart booking management',

        // Instagram Chat Messages
        'chat-msg-1': 'Hi! I would like nail correction, someone else\'s work',
        'chat-msg-2': 'Nail correction – someone else\'s work. 🗓️ Duration: 1 hour 30 min. 💰 Total price: 2,600 RSD.',
        'chat-msg-3': 'First available appointment is Tuesday, 02.09.2025 at 09:00. Does that work for you or would you like me to check a later time? 😊',
        'chat-msg-4': 'That works, thanks',
        'chat-msg-5': 'Great! 👍 Just tell me your name and phone number so I can confirm the booking 😊',
        'chat-msg-6': 'Marija, 0607270397',
        'chat-msg-7': 'Perfect! ✅ Appointment is booked for Tuesday, 02.09.2025 at 09:00. Please arrive 5 minutes early. See you! 💅',

        // Footer
        'footer-tagline': 'AI-powered Instagram automation for beauty salons',
        'footer-product': 'Product',
        'footer-product-features': 'Features',
        'footer-product-pricing': 'Pricing',
        'footer-product-integrations': 'Integrations',
        'footer-support': 'Support',
        'footer-support-help': 'Help Center',
        'footer-support-contact': 'Contact Us',
        'footer-support-status': 'Status',
        'footer-support-community': 'Community',
        'footer-company': 'Company',
        'footer-company-about': 'About Us',
        'footer-company-blog': 'Blog',
        'footer-company-careers': 'Careers',
        'footer-company-privacy': 'Privacy',
        'footer-copyright': '© 2025 Luma. All rights reserved.'
    }
};

// Initialize language
let currentLang = localStorage.getItem('language') || 'en';

// Language Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('langToggle');
    const langOptions = document.querySelectorAll('.lang-option');

    // Set initial language
    setLanguage(currentLang);

    // Add click event to language options
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });
});

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update active state
    document.querySelectorAll('.lang-option').forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });

    // Update all translatable elements
    updateTranslations(lang);

    // Only restart Instagram chat animation if it's already running
    // (i.e., not on initial page load)
    if (chatAnimationRunning) {
        animateInstagramChat();
    }
}

function updateTranslations(lang) {
    const t = translations[lang];

    // Update navigation
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const enText = link.getAttribute('data-en');
        const srText = link.getAttribute('data-sr');
        if (lang === 'en' && enText) {
            link.textContent = enText;
        } else if (lang === 'sr' && srText) {
            link.textContent = srText;
        }
    });

    // Update elements with data-translate attributes
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update hero section
    const heroTitle = document.querySelector('.hero-content h1');
    const heroSubtitle = document.querySelector('.hero-content p');
    const heroCTA = document.querySelector('.hero-buttons .btn-primary');

    if (heroTitle) heroTitle.textContent = t['hero-title'];
    if (heroSubtitle) heroSubtitle.textContent = t['hero-subtitle'];
    if (heroCTA) heroCTA.textContent = t['hero-cta'];

    // Update features section
    const featuresTitle = document.querySelector('#features .section-header h2');
    const featuresSubtitle = document.querySelector('#features .section-header p');
    if (featuresTitle) featuresTitle.textContent = t['features-title'];
    if (featuresSubtitle) featuresSubtitle.textContent = t['features-subtitle'];

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');
        if (title) title.textContent = t[`feature-${index + 1}-title`];
        if (desc) desc.textContent = t[`feature-${index + 1}-desc`];
    });

    // Update mobile app section
    const appTitle = document.querySelector('#mobile-app .section-header h2');
    const appSubtitle = document.querySelector('#mobile-app .section-header p');
    if (appTitle) appTitle.textContent = t['app-title'];
    if (appSubtitle) appSubtitle.textContent = t['app-subtitle'];

    // Update mobile app features content
    const appFeatures = document.querySelectorAll('.app-feature-content');
    const appKeys = [
        ['app-calendar-title', 'app-calendar-desc', 'app-calendar-feature-1', 'app-calendar-feature-2', 'app-calendar-feature-3'],
        ['app-ai-title', 'app-ai-desc', 'app-ai-feature-1', 'app-ai-feature-2', 'app-ai-feature-3'],
        ['app-analytics-title', 'app-analytics-desc', 'app-analytics-feature-1', 'app-analytics-feature-2', 'app-analytics-feature-3'],
        ['app-instagram-title', 'app-instagram-desc', 'app-instagram-feature-1', 'app-instagram-feature-2'],
        ['app-management-title', 'app-management-desc', 'app-management-feature-1', 'app-management-feature-2', 'app-management-feature-3', 'app-management-feature-4']
    ];

    appFeatures.forEach((feature, index) => {
        if (appKeys[index]) {
            const h3 = feature.querySelector('h3');
            const p = feature.querySelector('p');
            const listItems = feature.querySelectorAll('.feature-list li');

            if (h3) h3.textContent = t[appKeys[index][0]];
            if (p) p.textContent = t[appKeys[index][1]];

            listItems.forEach((li, liIndex) => {
                const textKey = appKeys[index][2 + liIndex];
                if (textKey && t[textKey]) {
                    const textNode = Array.from(li.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
                    if (textNode) {
                        textNode.textContent = ' ' + t[textKey];
                    }
                }
            });
        }
    });

    // Update mobile app mockup data
    updateMockupData(t);

    // Update pricing section
    const pricingTitle = document.querySelector('#pricing .section-header h2');
    const pricingSubtitle = document.querySelector('#pricing .section-header p');
    if (pricingTitle) pricingTitle.textContent = t['pricing-title'];
    if (pricingSubtitle) pricingSubtitle.textContent = t['pricing-subtitle'];

    // Update pricing billing toggle
    const monthlyLabel = document.getElementById('monthly-label');
    const yearlyLabel = document.getElementById('yearly-label');
    if (monthlyLabel) {
        monthlyLabel.childNodes[0].textContent = t['pricing-monthly'];
    }
    if (yearlyLabel) {
        yearlyLabel.childNodes[0].textContent = t['pricing-yearly'] + ' ';
        const discountBadge = yearlyLabel.querySelector('.discount-badge');
        if (discountBadge) {
            discountBadge.textContent = t['pricing-discount'];
        }
    }

    // Update pricing cards
    updatePricingPlans(t);

    // Update testimonials section
    const testimonialsTitle = document.querySelector('#testimonials .section-header h2');
    const testimonialsSubtitle = document.querySelector('#testimonials .section-header p');
    if (testimonialsTitle) testimonialsTitle.textContent = t['testimonials-title'];
    if (testimonialsSubtitle) testimonialsSubtitle.textContent = t['testimonials-subtitle'];

    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        const text = card.querySelector('.testimonial-content p');
        const role = card.querySelector('.author-info p');
        if (text) text.textContent = t[`testimonial-${index + 1}`];
        if (role) role.textContent = t[`testimonial-${index + 1}-role`];
    });

    // Update CTA section
    const ctaTitle = document.querySelector('#contact .cta-content h2');
    const ctaSubtitle = document.querySelector('#contact .cta-content p');
    const ctaCTA = document.querySelector('#contact .btn-primary');
    if (ctaTitle) ctaTitle.textContent = t['cta-title'];
    if (ctaSubtitle) ctaSubtitle.textContent = t['cta-subtitle'];
    if (ctaCTA) ctaCTA.textContent = t['cta-trial'];

    const ctaFeatures = document.querySelectorAll('.cta-feature span');
    ctaFeatures.forEach((span, index) => {
        if (t[`cta-feature-${index + 1}`]) {
            span.textContent = t[`cta-feature-${index + 1}`];
        }
    });

    // Update all "Probajte Besplatno" / "Try For Free" buttons
    document.querySelectorAll('.btn-primary, .btn-outline').forEach(button => {
        if (button.textContent.includes('Probajte') || button.textContent.includes('Try')) {
            button.textContent = t['pricing-cta-trial'];
        } else if (button.textContent.includes('Kontaktirajte') || button.textContent.includes('Contact')) {
            button.textContent = t['pricing-cta-contact'];
        }
    });

    // Update footer
    const footerTagline = document.querySelector('.footer-brand p');
    if (footerTagline) footerTagline.textContent = t['footer-tagline'];

    const footerColumns = document.querySelectorAll('.footer-column');
    if (footerColumns[0]) {
        const h4 = footerColumns[0].querySelector('h4');
        const links = footerColumns[0].querySelectorAll('li a');
        if (h4) h4.textContent = t['footer-product'];
        if (links[0]) links[0].textContent = t['footer-product-features'];
        if (links[1]) links[1].textContent = t['footer-product-pricing'];
        if (links[2]) links[2].textContent = t['footer-product-integrations'];
    }
    if (footerColumns[1]) {
        const h4 = footerColumns[1].querySelector('h4');
        const links = footerColumns[1].querySelectorAll('li a');
        if (h4) h4.textContent = t['footer-support'];
        if (links[0]) links[0].textContent = t['footer-support-help'];
        if (links[1]) links[1].textContent = t['footer-support-contact'];
        if (links[2]) links[2].textContent = t['footer-support-status'];
        if (links[3]) links[3].textContent = t['footer-support-community'];
    }
    if (footerColumns[2]) {
        const h4 = footerColumns[2].querySelector('h4');
        const links = footerColumns[2].querySelectorAll('li a');
        if (h4) h4.textContent = t['footer-company'];
        if (links[0]) links[0].textContent = t['footer-company-about'];
        if (links[1]) links[1].textContent = t['footer-company-blog'];
        if (links[2]) links[2].textContent = t['footer-company-careers'];
        if (links[3]) links[3].textContent = t['footer-company-privacy'];
    }

    const footerCopyright = document.querySelector('.footer-bottom p');
    if (footerCopyright) footerCopyright.textContent = t['footer-copyright'];

    // Update all elements with data-sr and data-en attributes (footer links, etc.)
    document.querySelectorAll('[data-sr][data-en]').forEach(element => {
        const srText = element.getAttribute('data-sr');
        const enText = element.getAttribute('data-en');
        if (lang === 'en' && enText) {
            element.textContent = enText;
        } else if (lang === 'sr' && srText) {
            element.textContent = srText;
        }
    });
}

function updateMockupData(t) {
    // Update all mobile mockup headers (Calendar, AI Notifications, Analytics, Instagram)
    const mockupHeaders = document.querySelectorAll('.mobile-header-content');
    mockupHeaders.forEach((header, index) => {
        const h4 = header.querySelector('h4');
        const p = header.querySelector('p');

        if (index === 0 && h4 && p) {
            // Calendar
            h4.textContent = t['mockup-calendar-title'];
            p.textContent = t['mockup-calendar-subtitle'];
        } else if (index === 1 && h4 && p) {
            // AI Notifications
            h4.textContent = t['mockup-notifications-title'];
            p.textContent = t['mockup-notifications-subtitle'];
        } else if (index === 2 && h4 && p) {
            // Analytics
            h4.textContent = t['mockup-analytics-title'];
            p.textContent = t['mockup-analytics-subtitle'];
        } else if (index === 3 && h4 && p) {
            // Instagram
            h4.textContent = t['mockup-instagram-title'];
            p.textContent = t['mockup-instagram-subtitle'];
        }
    });

    const dateTitle = document.querySelector('.date-title');
    const todayBadge = document.querySelector('.today-badge');
    const dateSubtitle = document.querySelector('.date-subtitle');
    const addBookingBtn = document.querySelector('.add-booking-btn');

    if (dateTitle) dateTitle.textContent = t['mockup-date'];
    if (todayBadge) todayBadge.textContent = t['mockup-today'];
    if (dateSubtitle) dateSubtitle.textContent = t['mockup-bookings'];
    if (addBookingBtn) addBookingBtn.textContent = t['mockup-add-booking'];

    // Booking items
    const serviceNames = document.querySelectorAll('.booking-service-name');
    serviceNames.forEach((name, index) => {
        if (t[`mockup-service-${index + 1}`]) {
            name.textContent = t[`mockup-service-${index + 1}`];
        }
    });

    const statusBadges = document.querySelectorAll('.booking-status-badge');
    statusBadges.forEach(badge => {
        badge.textContent = t['mockup-status-confirmed'];
    });

    // Notifications mockup
    const notifTitles = document.querySelectorAll('.notification-title-text');
    notifTitles.forEach((title, index) => {
        if (t[`mockup-notif-${index + 1}-title`]) {
            title.textContent = t[`mockup-notif-${index + 1}-title`];
        }
    });

    const notifTimes = document.querySelectorAll('.notification-time-text');
    notifTimes.forEach((time, index) => {
        if (t[`mockup-notif-${index + 1}-time`]) {
            time.textContent = t[`mockup-notif-${index + 1}-time`];
        }
    });

    const notifMsgs = document.querySelectorAll('.notification-message-text');
    notifMsgs.forEach((msg, index) => {
        if (t[`mockup-notif-${index + 1}-msg`]) {
            msg.textContent = t[`mockup-notif-${index + 1}-msg`];
        }
    });

    const imageBadge = document.querySelector('.image-preview-badge span');
    if (imageBadge) imageBadge.textContent = t['mockup-image-badge'];

    // Analytics mockup
    const analyticsLabels = document.querySelectorAll('.analytics-label');
    if (analyticsLabels[0]) analyticsLabels[0].textContent = t['mockup-analytics-today'];
    if (analyticsLabels[1]) analyticsLabels[1].textContent = t['mockup-analytics-revenue'];

    const analyticsSectionTitles = document.querySelectorAll('.analytics-section-title');
    if (analyticsSectionTitles[0]) analyticsSectionTitles[0].textContent = t['mockup-analytics-weekly'];
    if (analyticsSectionTitles[1]) analyticsSectionTitles[1].textContent = t['mockup-analytics-services'];

    // Days of week
    const chartDays = document.querySelectorAll('.chart-day');
    const dayKeys = ['mockup-day-mon', 'mockup-day-tue', 'mockup-day-wed', 'mockup-day-thu', 'mockup-day-fri', 'mockup-day-sat', 'mockup-day-sun'];
    chartDays.forEach((day, index) => {
        if (t[dayKeys[index]]) {
            day.textContent = t[dayKeys[index]];
        }
    });

    // Instagram connect mockup
    const instagramConnectTitle = document.querySelector('.connect-title');
    const instagramConnectDesc = document.querySelector('.connect-description');
    if (instagramConnectTitle) instagramConnectTitle.textContent = t['mockup-instagram-connect-title'];
    if (instagramConnectDesc) instagramConnectDesc.textContent = t['mockup-instagram-connect-desc'];

    const connectFeatures = document.querySelectorAll('.connect-feature-item span');
    if (connectFeatures[0]) connectFeatures[0].textContent = t['mockup-instagram-feat-1'];
    if (connectFeatures[1]) connectFeatures[1].textContent = t['mockup-instagram-feat-2'];
    if (connectFeatures[2]) connectFeatures[2].textContent = t['mockup-instagram-feat-3'];

    const instagramWarning = document.querySelector('.warning-text-connect');
    if (instagramWarning) instagramWarning.textContent = t['mockup-instagram-warning'];

    const instagramBtn = document.querySelector('.instagram-connect-button span');
    if (instagramBtn) instagramBtn.textContent = t['mockup-instagram-btn'];

    // Salon management mockup
    const salonHeader = document.querySelector('.management-header h3');
    const salonSubtitle = document.querySelector('.management-header p');
    if (salonHeader) salonHeader.textContent = t['mockup-salon-title'];
    if (salonSubtitle) salonSubtitle.textContent = t['mockup-salon-subtitle'];

    const managementItems = document.querySelectorAll('.management-item-content');
    managementItems.forEach((item, index) => {
        const h4 = item.querySelector('h4');
        const p = item.querySelector('p');
        if (h4) h4.textContent = t[`mockup-salon-feat-${index + 1}-title`];
        if (p) p.textContent = t[`mockup-salon-feat-${index + 1}-desc`];
    });

    const salonFooter = document.querySelector('.management-footer p');
    if (salonFooter) salonFooter.textContent = t['mockup-salon-footer'];
}

function updatePricingPlans(t) {
    const pricingCards = document.querySelectorAll('.pricing-card');

    pricingCards.forEach((card, index) => {
        const planName = card.querySelector('.pricing-header h3');
        const period = card.querySelector('.period');
        const features = card.querySelectorAll('.pricing-features li');

        // Update plan names
        if (index === 0 && planName) {
            planName.textContent = t['pricing-plan-starter'];
        } else if (index === 1 && planName) {
            planName.textContent = t['pricing-plan-professional'];
        } else if (index === 2 && planName) {
            planName.textContent = t['pricing-plan-premium'];
        }

        // Update period
        if (period) {
            period.textContent = '/' + (t['pricing-monthly'] ? t['pricing-monthly'].toLowerCase() : 'mesečno');
        }

        // Update features
        let featurePrefix = '';
        if (index === 0) featurePrefix = 'plan-starter-feat-';
        else if (index === 1) featurePrefix = 'plan-prof-feat-';
        else if (index === 2) featurePrefix = 'plan-premium-feat-';

        features.forEach((li, liIndex) => {
            const key = `${featurePrefix}${liIndex + 1}`;
            if (t[key]) {
                const icon = li.querySelector('i');
                const strong = li.querySelector('strong');
                if (strong) {
                    strong.textContent = t[key];
                } else {
                    const textNode = Array.from(li.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
                    if (textNode) {
                        textNode.textContent = ' ' + t[key];
                    } else {
                        li.innerHTML = icon ? icon.outerHTML + ' ' + t[key] : t[key];
                    }
                }
            }
        });
    });

    // Update "Najpopularniji" badge
    const popularBadge = document.querySelector('.pricing-badge');
    if (popularBadge) {
        popularBadge.textContent = t['pricing-popular'];
    }
}

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Throttle function for better performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Navbar background on scroll with throttling
const handleNavbarScroll = throttle(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}, 16);

window.addEventListener('scroll', handleNavbarScroll, { passive: true });

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add click handlers for CTA buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add a ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Here you would typically handle the actual button action
        if (this.textContent.includes('Start Free Trial')) {
            // Handle free trial signup
            console.log('Starting free trial...');
        } else if (this.textContent.includes('Schedule Demo') || this.textContent.includes('Watch Demo')) {
            // Handle demo scheduling
            console.log('Scheduling demo...');
        } else if (this.textContent.includes('Contact Sales')) {
            // Handle sales contact
            console.log('Contacting sales...');
        }
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Typing animation for hero text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Instagram Chat Animation
let chatAnimationTimeouts = [];
let chatAnimationRunning = false;

function animateInstagramChat() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;

    // Clear all existing timeouts
    chatAnimationTimeouts.forEach(timeout => clearTimeout(timeout));
    chatAnimationTimeouts = [];
    chatAnimationRunning = false;

    const t = translations[currentLang];
    const messages = [
        { type: 'sent', text: t['chat-msg-1'], time: '09:15' },
        { type: 'received', text: t['chat-msg-2'], time: '09:16' },
        { type: 'received', text: t['chat-msg-3'], time: '09:16' },
        { type: 'sent', text: t['chat-msg-4'], time: '09:17' },
        { type: 'received', text: t['chat-msg-5'], time: '09:17' },
        { type: 'sent', text: t['chat-msg-6'], time: '09:18' },
        { type: 'received', text: t['chat-msg-7'], time: '09:18' }
    ];

    // Clear existing messages except date separator
    const dateSeparator = chatMessages.querySelector('.date-separator');
    chatMessages.innerHTML = '';
    if (dateSeparator) {
        chatMessages.appendChild(dateSeparator);
    }

    let messageIndex = 0;
    chatAnimationRunning = true;

    // Add typing indicator
    function showTypingIndicator() {
        const typingElement = document.createElement('div');
        typingElement.className = 'message received typing-indicator';
        typingElement.innerHTML = `
            <div class="message-content">
                <p class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </p>
            </div>
        `;
        chatMessages.appendChild(typingElement);
        chatMessages.scrollTo({
            top: chatMessages.scrollHeight,
            behavior: 'smooth'
        });
        return typingElement;
    }

    function addMessage() {
        if (!chatAnimationRunning) return;

        if (messageIndex >= messages.length) {
            // Restart animation after a pause
            const timeout = setTimeout(() => {
                if (!chatAnimationRunning) return;
                messageIndex = 0;
                const dateSeparator = chatMessages.querySelector('.date-separator');
                chatMessages.innerHTML = '';
                if (dateSeparator) {
                    chatMessages.appendChild(dateSeparator);
                }
                addMessage();
            }, 4000);
            chatAnimationTimeouts.push(timeout);
            return;
        }

        const message = messages[messageIndex];

        // Show typing indicator for assistant messages (received)
        let typingIndicator = null;
        if (message.type === 'received') {
            typingIndicator = showTypingIndicator();

            // Wait a bit before showing the actual message
            const timeout = setTimeout(() => {
                if (!chatAnimationRunning) return;
                if (typingIndicator) {
                    typingIndicator.remove();
                }
                showActualMessage();
            }, 1500);
            chatAnimationTimeouts.push(timeout);
        } else {
            showActualMessage();
        }

        function showActualMessage() {
            if (!chatAnimationRunning) return;

            const messageElement = document.createElement('div');
            messageElement.className = `message ${message.type}`;

            messageElement.innerHTML = `
                <div class="message-content">
                    <p>${message.text}</p>
                    <span class="message-time">${message.time}</span>
                </div>
            `;

            chatMessages.appendChild(messageElement);

            // Smooth scroll to bottom with delay for visual effect
            const scrollTimeout = setTimeout(() => {
                chatMessages.scrollTo({
                    top: chatMessages.scrollHeight,
                    behavior: 'smooth'
                });
            }, 100);
            chatAnimationTimeouts.push(scrollTimeout);

            // Add bounce pop-up effect when message appears
            messageElement.style.transform = 'scale(0.8) translateY(20px)';
            messageElement.style.opacity = '0';

            const animTimeout = setTimeout(() => {
                messageElement.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                messageElement.style.transform = 'scale(1) translateY(0)';
                messageElement.style.opacity = '1';
            }, 100);
            chatAnimationTimeouts.push(animTimeout);

            messageIndex++;

            // Add next message after a shorter delay for client messages, longer for assistant
            const delay = message.type === 'received' ? 2000 : 1200;
            const nextTimeout = setTimeout(addMessage, delay);
            chatAnimationTimeouts.push(nextTimeout);
        }
    }

    // Start the animation
    const startTimeout = setTimeout(addMessage, 1000);
    chatAnimationTimeouts.push(startTimeout);
}

// Phone Carousel Functionality
function initCarousel() {
    const carouselLabels = document.querySelectorAll('.carousel-label');
    const phoneContainers = document.querySelectorAll('.phone-container');

    function switchToPhone(targetIndex) {
        // Remove active class from all elements
        phoneContainers.forEach(container => container.classList.remove('active'));
        carouselLabels.forEach(label => label.classList.remove('active'));

        // Add active class to target elements
        if (phoneContainers[targetIndex]) phoneContainers[targetIndex].classList.add('active');
        if (carouselLabels[targetIndex]) carouselLabels[targetIndex].classList.add('active');
    }

    function circularSwitch() {
        const activeIndex = Array.from(phoneContainers).findIndex(container => container.classList.contains('active'));
        const nextIndex = (activeIndex + 1) % phoneContainers.length;
        switchToPhone(nextIndex);
    }

    // Add click handlers to labels
    carouselLabels.forEach((label, index) => {
        label.addEventListener('click', () => {
            switchToPhone(index);
            pauseAutoSwitch();
            setTimeout(resumeAutoSwitch, 3000);
        });
    });

    // Auto-cycle through phones
    let autoSwitch = true;
    let autoSwitchTimer;

    function startAutoSwitch() {
        clearTimeout(autoSwitchTimer);
        if (!autoSwitch) return;

        autoSwitchTimer = setTimeout(() => {
            circularSwitch();
            startAutoSwitch();
        }, 8000); // Switch every 8 seconds
    }

    function pauseAutoSwitch() {
        autoSwitch = false;
        clearTimeout(autoSwitchTimer);
    }

    function resumeAutoSwitch() {
        autoSwitch = true;
        startAutoSwitch();
    }

    // Start auto-cycle
    setTimeout(startAutoSwitch, 8000);
}

// Initialize animations when page loads
window.addEventListener('load', () => {
    console.log('Page loaded, initializing...');

    // Initialize carousel
    initCarousel();

    // Initialize modal functionality
    try {
        initModal();
        console.log('Modal initialization completed');
    } catch (error) {
        console.error('Error initializing modal:', error);
    }

    // Start Instagram chat animation with slight delay to let hero animate first
    setTimeout(animateInstagramChat, 1500);

    // Initialize mobile app animations on visibility
    initMobileAppAnimations();
});


// Mobile App Animations - Initialize on visibility
function initMobileAppAnimations() {
    const mobileAppSection = document.getElementById('mobile-app');
    if (!mobileAppSection) {
        console.log('Mobile app section not found!');
        return;
    }

    const isMobile = window.innerWidth <= 768;

    // On mobile: Skip Intersection Observer entirely, use simple timeout
    if (isMobile) {
        console.log('Mobile detected: Using simple timeout trigger (no Intersection Observer)');
        setTimeout(() => {
            console.log('Mobile: Triggering animations after 1 second delay');
            animateMobileMockups();
        }, 1000);
        return;
    }

    // Desktop: Use Intersection Observer
    console.log('Desktop detected: Using Intersection Observer');
    let hasAnimated = false;

    const mobileAppObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log('Intersection entry:', entry.isIntersecting, 'ratio:', entry.intersectionRatio);
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                console.log('Mobile app section is visible, triggering animations...');
                animateMobileMockups();
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '50px'
    });

    mobileAppObserver.observe(mobileAppSection);
}

function animateMobileMockups() {
    console.log('animateMobileMockups called');

    // Animate booking items
    const bookingItems = document.querySelectorAll('.booking-item');
    console.log(`Found ${bookingItems.length} booking items`);
    bookingItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 300);
    });

    // Animate notification items
    const notificationItems = document.querySelectorAll('.notification-item');
    console.log(`Found ${notificationItems.length} notification items`);
    notificationItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 300);
    });

    // Animate analytics metrics
    const analyticsMetrics = document.querySelectorAll('.analytics-cards-row, .analytics-section');
    console.log(`Found ${analyticsMetrics.length} analytics items`);
    analyticsMetrics.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 200);
    });

    // Animate Instagram connect card
    const connectCard = document.querySelector('.instagram-connect-card');
    const connectButton = document.querySelector('.connect-button-wrapper');
    console.log(`Found connect card: ${!!connectCard}, button: ${!!connectButton}`);
    if (connectCard) {
        setTimeout(() => {
            connectCard.classList.add('visible');
        }, 300);
    }
    if (connectButton) {
        setTimeout(() => {
            connectButton.classList.add('visible');
        }, 600);
    }
}

// Parallax effect for hero section (disabled on mobile for better performance)
const handleParallax = throttle(() => {
    // Only apply parallax on desktop devices
    if (window.innerWidth > 768) {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        const speed = scrolled * 0.3; // Reduced speed for smoother effect

        if (parallax) {
            parallax.style.transform = `translateY(${speed}px)`;
        }
    }
}, 16);

// Only add parallax on desktop
if (window.innerWidth > 768) {
    window.addEventListener('scroll', handleParallax, { passive: true });
}

// Modal Functionality
function initModal() {
    console.log('Initializing modal...');
    const modal = document.getElementById('trialModal');
    const closeBtn = document.querySelector('.close');
    const trialForm = document.getElementById('trialForm');
    
    console.log('Modal elements:', { modal: !!modal, closeBtn: !!closeBtn, trialForm: !!trialForm });
    
    if (!modal || !closeBtn || !trialForm) {
        console.error('Missing modal elements, aborting modal initialization');
        return;
    }
    
    // Get all "Probajte Besplatno" buttons
    const trialButtons = document.querySelectorAll('.btn-primary, .btn-outline');
    
    console.log('Found trial buttons:', trialButtons.length);
    
    // Add click event to all trial buttons
    trialButtons.forEach((button, index) => {
        console.log(`Button ${index}:`, button.textContent.trim());
        if (button.textContent.includes('Probajte Besplatno')) {
            console.log(`Adding event listener to button ${index}`);
            button.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Trial button clicked!');
                
                // Check if button is in pricing card to auto-select plan
                const pricingCard = button.closest('.pricing-card');
                if (pricingCard) {
                    const planType = pricingCard.querySelector('h3').textContent.toLowerCase();
                    console.log('Plan type detected:', planType);
                    if (planType.includes('početni')) {
                        selectPlan('starter');
                    } else if (planType.includes('profesional')) {
                        selectPlan('professional');
                    }
                }
                
                openModal();
            });
        }
    });
    
    // Close modal events
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    // Form submission
    if (trialForm) {
        console.log('Attaching form submission handler');
        trialForm.addEventListener('submit', handleFormSubmission);
        
        // Also add click handler to submit button as backup
        const submitBtn = trialForm.querySelector('button[type="submit"]');
        if (submitBtn) {
            console.log('Also attaching click handler to submit button');
            submitBtn.addEventListener('click', (e) => {
                console.log('Submit button clicked directly!');
                handleFormSubmission(e);
            });
        }
    } else {
        console.error('Trial form not found!');
    }
    
    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    function selectPlan(planType) {
        const planRadio = document.getElementById(planType);
        if (planRadio) {
            planRadio.checked = true;
        }
    }
    
    function handleFormSubmission(e) {
        e.preventDefault();
        console.log('Form submitted!');
        
        // Clear previous validation errors
        clearValidationErrors();
        
        // Validate required fields
        const isValid = validateForm();
        console.log('Form validation result:', isValid);
        if (!isValid) {
            console.log('Form validation failed, stopping submission');
            return;
        }
        
        // Get form data
        const formData = new FormData(trialForm);
        const data = Object.fromEntries(formData.entries());
        
        // Show loading state
        const submitBtn = trialForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Šalje se...';
        submitBtn.disabled = true;
        
        // Send emails (notification + auto-reply)
        sendEmail(data)
            .then(() => {
                // Success
                showSuccessMessage();
                setTimeout(() => {
                    closeModal();
                    trialForm.reset();
                }, 3000);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                showErrorMessage();
            })
            .finally(() => {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    }
    
    function validateForm() {
        const requiredFields = ['salonName', 'ownerName', 'email', 'phone'];
        let isValid = true;
        
        console.log('Validating form...');
        
        requiredFields.forEach(fieldName => {
            const field = document.getElementById(fieldName);
            console.log(`Checking field ${fieldName}:`, field ? field.value : 'Field not found');
            if (!field.value.trim()) {
                console.log(`Field ${fieldName} is empty, adding error class`);
                field.classList.add('error');
                isValid = false;
            }
        });
        
        // Validate email format
        const emailField = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailField.value.trim() && !emailRegex.test(emailField.value)) {
            console.log('Email format is invalid');
            emailField.classList.add('error');
            isValid = false;
        }
        
        console.log('Validation complete, isValid:', isValid);
        return isValid;
    }
    
    function clearValidationErrors() {
        const inputs = trialForm.querySelectorAll('input');
        inputs.forEach(input => {
            input.classList.remove('error');
        });
    }
    
    // Add event listeners to clear errors when user starts typing
    trialForm.addEventListener('input', (e) => {
        if (e.target.tagName === 'INPUT') {
            e.target.classList.remove('error');
        }
    });
    
    function showSuccessMessage() {
        // Remove any existing message
        const existingMessage = trialForm.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-message success';
        successMessage.innerHTML = `
            <div class="message-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <div class="message-content">
                <h3>Uspešno poslato!</h3>
                <p>Kontaktiraćemo vas uskoro za postavljanje vašeg besplatnog probnog perioda.</p>
            </div>
        `;
        
        // Insert at the top of the form
        trialForm.insertBefore(successMessage, trialForm.firstChild);
        
        // Add animation
        setTimeout(() => {
            successMessage.classList.add('show');
        }, 100);
    }
    
    function showErrorMessage() {
        // Remove any existing message
        const existingMessage = trialForm.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'form-message error';
        errorMessage.innerHTML = `
            <div class="message-icon">
                <i class="fas fa-exclamation-circle"></i>
            </div>
            <div class="message-content">
                <h3>Greška pri slanju</h3>
                <p>Molimo pokušajte ponovo ili nas kontaktirajte direktno.</p>
            </div>
        `;
        
        // Insert at the top of the form
        trialForm.insertBefore(errorMessage, trialForm.firstChild);
        
        // Add animation
        setTimeout(() => {
            errorMessage.classList.add('show');
        }, 100);
    }
    
    async function sendEmail(data) {
        // Initialize EmailJS with your credentials
        try {
            // Initialize EmailJS with your public key
            emailjs.init("5h1_IyLFUQ_pS6KGa");
            
            // Send notification email to yourself
            const notificationResult = await emailjs.send(
                "service_va9urxb", // Your service ID
                "template_aid7vnp", // Your template ID
                {
                    to_email: "bailey.bytes@outlook.com",
                    salon_name: data.salonName,
                    owner_name: data.ownerName,
                    email: data.email,
                    phone: data.phone,
                    instagram: data.instagramHandle || 'Nije navedeno',
                    plan: data.plan === 'starter' ? 'Početni (2999 RSD)' : 'Profesionalni (4999 RSD)',
                    date: new Date().toLocaleString('sr-RS')
                }
            );
            
            // Send auto-reply email to the user
            const autoReplyResult = await emailjs.send(
                "service_va9urxb", // Your service ID
                "template_rlowh6j", // Auto-reply template ID
                {
                    email: data.email,
                    owner_name: data.ownerName,
                    salon_name: data.salonName,
                    plan: data.plan === 'starter' ? 'Početni (2999 RSD)' : 'Profesionalni (4999 RSD)'
                }
            );
            
            console.log('Both emails sent successfully:', { notificationResult, autoReplyResult });
            return Promise.resolve();
        } catch (error) {
            console.error('EmailJS error:', error);
            // Fallback to alternative method
            return sendEmailFallback(data);
        }
        
    }
    
    async function sendEmailFallback(data) {
        // Fallback method - you can implement webhook, Netlify forms, or other service
        console.log('Using fallback email method');
        
        // For now, we'll use a webhook service like Formspree or similar
        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: 'bailey.bytes@outlook.com',
                    subject: 'Zahtev za besplatni probni period - Luma',
                    message: `
Novi zahtev za besplatni probni period:

Salon: ${data.salonName}
Ime i prezime: ${data.ownerName}
Email: ${data.email}
Telefon: ${data.phone}
Instagram: ${data.instagramHandle || 'Nije navedeno'}
Plan: ${data.plan === 'starter' ? 'Početni (2999 RSD)' : 'Profesionalni (4999 RSD)'}

Datum: ${new Date().toLocaleString('sr-RS')}
Poslano sa Luma landing page.
                    `
                })
            });
            
            if (response.ok) {
                console.log('Fallback email sent successfully');
                return Promise.resolve();
            } else {
                throw new Error('Fallback email failed');
            }
        } catch (error) {
            console.error('Fallback email error:', error);
            
            // Last resort - log the data for manual processing
            console.log('EMAIL DATA FOR MANUAL PROCESSING:', {
                to: 'bailey.bytes@outlook.com',
                subject: 'Zahtev za besplatni probni period - Luma',
                salon: data.salonName,
                owner: data.ownerName,
                email: data.email,
                phone: data.phone,
                instagram: data.instagramHandle || 'Nije navedeno',
                plan: data.plan === 'starter' ? 'Početni (2999 RSD)' : 'Profesionalni (4999 RSD)',
                date: new Date().toLocaleString('sr-RS')
            });
            
            // Still show success to user (data is logged for manual processing)
            return Promise.resolve();
        }
    }
}

// Add loading state for buttons
function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Loading...';
    button.disabled = true;
    button.style.opacity = '0.7';
    
    // Simulate loading time
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        button.style.opacity = '1';
    }, 2000);
}

// Form validation (if forms are added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Cookie consent (simple implementation)
function showCookieConsent() {
    if (!localStorage.getItem('cookieConsent')) {
        const banner = document.createElement('div');
        banner.innerHTML = `
            <div style="
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 20px;
                z-index: 10000;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 20px;
            ">
                <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
                <button onclick="acceptCookies()" style="
                    background: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                ">Accept</button>
            </div>
        `;
        document.body.appendChild(banner);
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'true');
    document.querySelector('[style*="position: fixed"][style*="bottom: 0"]').remove();
}

// Initialize cookie consent
setTimeout(showCookieConsent, 1000);

// Analytics tracking (placeholder)
function trackEvent(eventName, properties = {}) {
    console.log('Event tracked:', eventName, properties);
    // Here you would integrate with your analytics service
    // Example: gtag('event', eventName, properties);
}

// Track button clicks
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn-primary, .btn-secondary, .btn-outline')) {
        trackEvent('button_click', {
            button_text: e.target.textContent,
            button_location: e.target.closest('section')?.id || 'unknown'
        });
    }
});

// Performance monitoring
window.addEventListener('load', () => {
    // Log page load time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log('Page load time:', loadTime + 'ms');
    
    trackEvent('page_load', {
        load_time: loadTime,
        user_agent: navigator.userAgent
    });
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    trackEvent('javascript_error', {
        message: e.message,
        filename: e.filename,
        line: e.lineno
    });
});

// Add accessibility improvements
document.addEventListener('DOMContentLoaded', () => {
    // Add ARIA labels to buttons without text
    document.querySelectorAll('button:not([aria-label])').forEach(button => {
        if (!button.textContent.trim()) {
            button.setAttribute('aria-label', 'Button');
        }
    });
    
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        border-radius: 4px;
    `;
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main landmark
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.setAttribute('id', 'main');
        heroSection.setAttribute('role', 'main');
    }

    // Pricing billing toggle functionality
    initPricingToggle();
});

// Pricing Toggle - Monthly vs Yearly
function initPricingToggle() {
    const billingToggle = document.getElementById('billing-toggle');
    const monthlyLabel = document.getElementById('monthly-label');
    const yearlyLabel = document.getElementById('yearly-label');
    const priceElements = document.querySelectorAll('.pricing-card .amount');

    if (!billingToggle) return;

    // Set initial state
    updateLabels(false);

    billingToggle.addEventListener('change', function() {
        const isYearly = this.checked;
        updateLabels(isYearly);
        updatePrices(isYearly);
    });

    function updateLabels(isYearly) {
        if (isYearly) {
            monthlyLabel.classList.remove('active');
            yearlyLabel.classList.add('active');
        } else {
            monthlyLabel.classList.add('active');
            yearlyLabel.classList.remove('active');
        }
    }

    function updatePrices(isYearly) {
        priceElements.forEach(priceElement => {
            const monthlyPrice = parseInt(priceElement.getAttribute('data-monthly'));
            const yearlyPrice = parseInt(priceElement.getAttribute('data-yearly'));

            const targetPrice = isYearly ? yearlyPrice : monthlyPrice;
            const currentPrice = parseInt(priceElement.textContent);

            // Animate the price change
            animatePrice(priceElement, currentPrice, targetPrice);
        });
    }

    function animatePrice(element, start, end) {
        const duration = 500; // milliseconds
        const startTime = performance.now();
        const difference = end - start;

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (easeOutCubic)
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            const currentValue = Math.round(start + (difference * easeProgress));
            element.textContent = currentValue;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }
}
