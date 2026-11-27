export type Tier = 'Russell Group' | 'London' | 'Career-Focused';
export type Intake = 'Sep' | 'Jan' | 'May';

export interface University {
  name: string;
  city: string;
  tier: Tier;
  intakes: Intake[];
  moi: boolean;
  tuition: string; // indicative yearly postgraduate fees
  scholarship: string;
  courses: string[];
}

// Fees and scholarships are indicative; always confirm with the university and X-Axis counsellor.
export const universities: University[] = [
  { name: 'University of Manchester', city: 'Manchester', tier: 'Russell Group', intakes: ['Sep'], moi: false, tuition: '£27,000 – £35,000', scholarship: 'Merit awards on selected courses', courses: ['Data Science', 'Engineering', 'Management'] },
  { name: 'University of Birmingham', city: 'Birmingham', tier: 'Russell Group', intakes: ['Sep', 'Jan'], moi: false, tuition: '£26,000 – £32,000', scholarship: 'Up to £5,000 (Global Masters)', courses: ['Computer Science', 'Finance', 'Civil Engineering'] },
  { name: 'University of Leeds', city: 'Leeds', tier: 'Russell Group', intakes: ['Sep'], moi: false, tuition: '£26,000 – £33,000', scholarship: 'Selected merit scholarships', courses: ['Business Analytics', 'Mechanical Engineering', 'Public Health'] },
  { name: 'University of Glasgow', city: 'Glasgow', tier: 'Russell Group', intakes: ['Sep'], moi: false, tuition: '£25,000 – £30,000', scholarship: 'Up to £10,000 (Global Leader)', courses: ['Cyber Security', 'Accounting & Finance', 'Law'] },
  { name: 'University of Sheffield', city: 'Sheffield', tier: 'Russell Group', intakes: ['Sep'], moi: false, tuition: '£25,000 – £31,000', scholarship: 'Merit awards available', courses: ['Data Science', 'Mechanical Engineering', 'Management'] },
  { name: 'University of Nottingham', city: 'Nottingham', tier: 'Russell Group', intakes: ['Sep'], moi: false, tuition: '£26,000 – £33,000', scholarship: 'Selected merit scholarships', courses: ['Computer Science', 'Finance', 'Engineering'] },
  { name: 'Queen Mary University of London', city: 'London', tier: 'Russell Group', intakes: ['Sep'], moi: false, tuition: '£27,000 – £34,000', scholarship: 'Merit awards on selected courses', courses: ['Artificial Intelligence', 'Banking & Finance', 'Law'] },
  { name: 'Cardiff University', city: 'Cardiff', tier: 'Russell Group', intakes: ['Sep'], moi: false, tuition: '£23,000 – £28,000', scholarship: 'Up to £2,500 – £5,000', courses: ['Computing', 'Business', 'Civil Engineering'] },
  { name: 'University of Westminster', city: 'London', tier: 'London', intakes: ['Sep', 'Jan'], moi: true, tuition: '£16,000 – £19,000', scholarship: 'Up to £3,000 – £5,000', courses: ['Data Science', 'Marketing', 'Construction Management'] },
  { name: 'University of Greenwich', city: 'London', tier: 'London', intakes: ['Sep', 'Jan', 'May'], moi: true, tuition: '£15,000 – £18,000', scholarship: 'Up to £4,000', courses: ['Cyber Security', 'MBA', 'Project Management'] },
  { name: 'University of East London', city: 'London', tier: 'London', intakes: ['Sep', 'Jan'], moi: true, tuition: '£15,000 – £17,000', scholarship: 'Up to £3,500', courses: ['Data Science', 'Business', 'Civil Engineering'] },
  { name: 'Middlesex University London', city: 'London', tier: 'London', intakes: ['Sep', 'Jan'], moi: true, tuition: '£15,000 – £17,500', scholarship: 'Up to £3,000', courses: ['Computer Science', 'Finance', 'Public Health'] },
  { name: 'Brunel University of London', city: 'London', tier: 'London', intakes: ['Sep', 'Jan'], moi: false, tuition: '£20,000 – £25,000', scholarship: 'Merit awards available', courses: ['Engineering', 'Data Science', 'Management'] },
  { name: 'Kingston University London', city: 'London', tier: 'London', intakes: ['Sep', 'Jan'], moi: true, tuition: '£16,000 – £19,000', scholarship: 'Up to £3,000', courses: ['Computing', 'Business', 'Mechanical Engineering'] },
  { name: 'Coventry University', city: 'Coventry', tier: 'Career-Focused', intakes: ['Sep', 'Jan', 'May'], moi: true, tuition: '£15,000 – £18,000', scholarship: 'Up to £3,000 – £5,000', courses: ['Automotive Engineering', 'Data Analytics', 'MBA'] },
  { name: 'De Montfort University (DMU)', city: 'Leicester', tier: 'Career-Focused', intakes: ['Sep', 'Jan'], moi: true, tuition: '£15,000 – £17,000', scholarship: 'Up to £4,000', courses: ['Cyber Security', 'Business', 'Engineering'] },
  { name: 'University of Hertfordshire', city: 'Hatfield', tier: 'Career-Focused', intakes: ['Sep', 'Jan'], moi: true, tuition: '£15,000 – £17,500', scholarship: 'Up to £3,000 – £5,000', courses: ['Artificial Intelligence', 'MBA', 'Aerospace'] },
  { name: 'Northumbria University', city: 'Newcastle', tier: 'Career-Focused', intakes: ['Sep', 'Jan'], moi: true, tuition: '£17,000 – £20,000', scholarship: 'Up to £4,000', courses: ['Computer Science', 'Business', 'Construction'] },
  { name: 'Aston University', city: 'Birmingham', tier: 'Career-Focused', intakes: ['Sep'], moi: false, tuition: '£20,000 – £24,000', scholarship: 'Up to £5,000 (selected)', courses: ['Business Analytics', 'Engineering', 'Pharmacy'] },
  { name: 'Teesside University', city: 'Middlesbrough', tier: 'Career-Focused', intakes: ['Sep', 'Jan'], moi: true, tuition: '£14,000 – £16,500', scholarship: 'Up to £3,000', courses: ['Digital & Computing', 'Business', 'Engineering'] },
  { name: 'Anglia Ruskin University', city: 'Cambridge / Chelmsford', tier: 'Career-Focused', intakes: ['Sep', 'Jan', 'May'], moi: true, tuition: '£15,000 – £17,000', scholarship: 'Up to £3,500', courses: ['Computer Science', 'MBA', 'Public Health'] },
  { name: 'Ulster University', city: 'Belfast', tier: 'Career-Focused', intakes: ['Sep', 'Jan'], moi: true, tuition: '£15,000 – £17,500', scholarship: 'Up to £3,000', courses: ['Data Science', 'Business', 'Engineering'] },
  { name: 'University of Strathclyde', city: 'Glasgow', tier: 'Career-Focused', intakes: ['Sep', 'Jan'], moi: false, tuition: '£22,000 – £26,000', scholarship: 'Merit awards available', courses: ['Engineering', 'Finance', 'Computer Science'] },
  { name: 'Swansea University', city: 'Swansea', tier: 'Career-Focused', intakes: ['Sep', 'Jan'], moi: true, tuition: '£19,000 – £22,000', scholarship: 'Up to £5,000', courses: ['Computer Science', 'Civil Engineering', 'Management'] },
];

export const courseStreams = [
  { title: 'Data Science & AI', query: 'Data', blurb: 'Analytics, machine learning & AI master\'s with placement options.' },
  { title: 'Cyber Security & Cloud', query: 'Cyber', blurb: 'NCSC-recognised programmes with strong employer links.' },
  { title: 'MBA & Business', query: 'MBA', blurb: 'One-year MBAs and global management degrees.' },
  { title: 'Project Management', query: 'Management', blurb: 'Accredited routes into UK infrastructure & consulting.' },
  { title: 'Finance & FinTech', query: 'Finance', blurb: 'London-linked finance, banking and fintech pathways.' },
  { title: 'Public Health', query: 'Health', blurb: 'Public health and healthcare management courses.' },
  { title: 'Engineering', query: 'Engineering', blurb: 'Civil, mechanical, automotive & EV specialisations.' },
  { title: 'Law & LLM', query: 'Law', blurb: 'International, commercial and corporate law master\'s.' },
];

export const intakes = [
  { name: 'September', tag: 'Main Intake • Most Popular', featured: true, deadline: 'Apply Dec – Jun', detail: 'Widest course and scholarship choice across Russell Group and modern universities.', pros: ['Maximum course availability', 'Highest scholarship pools', 'Full campus orientation'] },
  { name: 'January', tag: 'Secondary Intake', featured: false, deadline: 'Apply Jul – Nov', detail: 'Ideal for mid-year graduates with wide MOI-friendly and fast-track options.', pros: ['Quicker offer turnaround', 'Smaller class sizes', 'Flexible for fresh graduates'] },
  { name: 'May', tag: 'Spring Intake', featured: false, deadline: 'Apply Jan – Mar', detail: 'Select career-focused universities and programmes if you missed January.', pros: ['Fast admission window', 'Selected business & IT courses', 'Strong backup intake'] },
];

export const services = [
  { title: 'Profile Evaluation & Gap Analysis', desc: 'Free assessment of your academics, backlogs, gaps and goals to map realistic UK options.' },
  { title: 'Course & University Shortlisting', desc: 'A curated shortlist balanced across ambitious, target and safe universities.' },
  { title: 'SOP, LOR & CV Crafting', desc: 'Personalised statements and references that tell your story honestly and strongly.' },
  { title: 'MOI Waiver & Pre-CAS Interview Prep', desc: 'Guidance on English waiver routes and mock credibility interviews with universities.' },
  { title: 'Scholarships & Education Loans', desc: 'Help applying for university scholarships and assistance with leading banks and NBFC lenders.' },
  { title: 'UKVI Financial Documentation', desc: 'Checking the 28-day fund rule, bank statements and loan letters before you file.' },
  { title: 'Student Visa & Biometrics Support', desc: 'Application filing, document checklist and biometrics appointment preparation.' },
  { title: 'Accommodation & Pre-Departure', desc: 'Housing guidance, forex, flights, SIM and a pre-departure briefing before you fly.' },
];

export const processSteps = [
  { title: 'Free Counselling', desc: 'Meet us at our Ameerpet office or online to discuss your goals.' },
  { title: 'Profile & Shortlist', desc: 'We evaluate your profile and shortlist suitable UK universities.' },
  { title: 'Apply & Offer', desc: 'We prepare SOP/LORs, submit applications and track offers.' },
  { title: 'Funds & CAS', desc: 'Pay tuition deposit, clear Pre-CAS checks and receive your CAS.' },
  { title: 'Visa Filing', desc: 'Complete the UK student visa application and VFS biometrics.' },
  { title: 'Fly & Settle', desc: 'Pre-departure briefing, accommodation and UK arrival support.' },
];

export const trustHighlights = [
  { icon: 'compass', title: 'UK-Only Counsellors', desc: 'Dedicated solely to the UK—current on entry criteria, MOI waivers and UKVI rules.' },
  { icon: 'calculator', title: 'Clear Fee & Loan Plan', desc: 'Honest GBP-to-INR budgets, scholarship checks and bank loan guidance upfront.' },
  { icon: 'shield', title: 'Pre-CAS Mock Prep', desc: 'One-on-one credibility interview practice so you answer university calls confidently.' },
  { icon: 'map', title: 'Walk-In Ameerpet Office', desc: 'Meet our team in person at KVR Enclave—2 mins from Ameerpet Metro Station.' },
];

export const faqs = [
  { q: 'Can I study in the UK without IELTS?', a: 'Several UK universities accept a Medium of Instruction (MOI) letter or your English marks in 12th/degree in place of IELTS. Acceptance depends on the university and course, and UKVI may still require an English test or interview in some cases. We check this for each shortlisted university.' },
  { q: 'How much bank balance do I need to show for the UK student visa?', a: 'You must show first-year tuition fee balance (minus any deposit paid) plus living costs for up to 9 months, held for 28 consecutive days. UKVI living cost figures were £1,483/month in London and £1,136/month outside London at the time of writing; always verify the current amounts on gov.uk.' },
  { q: 'What is the Graduate Route (post-study work) visa?', a: 'After completing an eligible UK degree, students can usually apply to stay and work for 2 years (3 years for PhD graduates). Rules change from time to time, so check gov.uk for the latest duration.' },
  { q: 'Which intake is best — September or January?', a: 'September offers the widest choice and scholarships. January is a good alternative if you graduate mid-year or need more preparation time. May is available at selected universities.' },
  { q: 'Are study gaps and backlogs accepted?', a: 'Many universities accept gaps of a few years with valid explanation and supporting documents, and some allow a limited number of backlogs. Policies vary, so we assess your profile for free.' },
  { q: 'How much does it cost to study in the UK?', a: 'A one-year master\'s typically costs roughly £15,000 – £30,000+ in tuition plus living costs. In Indian rupees the full first-year budget usually ranges from about ₹25 lakh to ₹45 lakh depending on city and university.' },
  { q: 'Can I work while studying?', a: 'Students on a degree-level course can generally work up to 20 hours per week during term time and full-time during official vacations. Always check your visa conditions.' },
  { q: 'What is the Pre-CAS / credibility interview?', a: 'Some universities hold a short interview to check that you are a genuine student before issuing your CAS. We run mock sessions covering your course, university choice, finances and plans.' },
  { q: 'Do you charge for counselling?', a: 'Initial counselling and profile evaluation are free. Our team will explain any service fees transparently before you begin.' },
  { q: 'Can I get an education loan?', a: 'Yes. We help you prepare documents and approach public and private banks and NBFC lenders for UK education loans, and guide you on the UKVI loan-letter requirements.' },
  { q: 'Do you offer scholarships help?', a: 'Many UK universities give partial tuition scholarships based on academic merit. We identify those you are eligible for and handle the applications.' },
  { q: 'Where is your office?', a: '1st Floor, KVR Enclave, above Bata showroom, beside AAA theatre, Swathi Avenue, Ameerpet, Hyderabad, Telangana 500016. Walk-ins are welcome during office hours.' },
];
