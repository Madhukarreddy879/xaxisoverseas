export interface BlogTable {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: BlogTable;
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string; // Omit " | X-Axis Overseas" (layout.tsx appends it)
  description: string;
  category: 'Intakes' | 'MOI & Eligibility' | 'Visa & Funds' | 'Hyderabad Local';
  intakeTag: string;
  publishedAt: string; // ISO YYYY-MM-DD
  updatedAt: string;
  readTime: string;
  quickFacts: { label: string; value: string }[];
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'uk-march-may-2027-intake-universities',
    title: 'UK March, April & May 2027 Intake: Open Universities, Courses & Deadlines',
    seoTitle: 'UK March & May 2027 Intake Universities',
    description:
      'Applying for UK March, April or May 2027 intake? See open UK universities, courses, MOI waiver options, deadlines & free counselling in Ameerpet, Hyderabad.',
    category: 'Intakes',
    intakeTag: 'Spring / May 2027',
    publishedAt: '2026-11-27',
    updatedAt: '2026-11-27',
    readTime: '6 min read',
    quickFacts: [
      { label: 'Best Application Window', value: 'Dec 2026 – Mar 2027' },
      { label: 'Course Availability', value: 'MBA, IT, Data, Health, Engineering' },
      { label: 'Without IELTS (MOI)', value: 'Available at select universities' },
      { label: 'Offer Turnaround', value: 'Typically 2 – 4 weeks' },
    ],
    sections: [
      {
        heading: 'How UK March, April & May (Spring) Intakes Actually Work',
        paragraphs: [
          'Many students in Hyderabad and across India search for "UK March intake" after missing the January deadline. In the UK higher-education calendar, most universities officially group Spring and Summer entry under April or May intake, while a smaller number of business schools and pathway campuses open courses in March.',
          'Because fewer students apply in Spring than in September, admissions teams often process applications faster and class sizes are smaller. You get the exact same UK degree, part-time work rights (up to 20 hours per week during term), and eligibility for the Graduate Route post-study work visa upon completion.',
        ],
      },
      {
        heading: 'Popular UK Universities Offering Spring / May 2027 Entry',
        paragraphs: [
          'Course lists vary each year and seats fill quickly once CAS allocations tighten. Below are well-known UK universities that regularly open Spring / May courses popular with Indian students:',
        ],
        table: {
          caption: 'Indicative UK Spring / May Intake Universities (Confirm Exact Course Availability)',
          headers: ['University', 'City', 'Popular Spring Courses', 'MOI Friendly', 'Indicative Tuition'],
          rows: [
            ['Coventry University', 'Coventry / London', 'MBA, Data Analytics, Engineering', 'Yes', '£15,000 – £18,000'],
            ['University of Greenwich', 'London', 'Cyber Security, MBA, Project Mgmt', 'Yes', '£15,000 – £18,000'],
            ['Anglia Ruskin University', 'Cambridge / Chelmsford', 'Computer Science, MBA, Public Health', 'Yes', '£15,000 – £17,000'],
            ['Ulster University', 'Belfast / London', 'Data Science, International Business', 'Yes', '£15,000 – £17,500'],
            ['University of Hertfordshire', 'Hatfield', 'Business, IT & Select MSc Programmes', 'Yes', '£15,000 – £17,500'],
          ],
        },
      },
      {
        heading: 'Month-by-Month Timeline for March / May 2027 Entry',
        paragraphs: [
          'Spring intake timelines move fast—waiting until March to arrange your 28-day bank funds is the #1 reason students get deferred to September. Plan your milestones early:',
        ],
        bullets: [
          'December 2026 – January 2027: Profile evaluation, university shortlisting, SOP/LOR preparation, and submitting 3–5 applications.',
          'January – February 2027: Receive conditional/unconditional offers, complete MOI verification or IELTS/PTE, and start holding your 28-day UKVI bank balance (or sanction your education loan).',
          'February – March 2027: Pay tuition deposit, clear the university Pre-CAS credibility interview, and collect your CAS letter.',
          'March – April 2027: Complete your UKVI TB test in Hyderabad, file the Student Visa online, attend VFS biometrics, and book flights.',
        ],
      },
      {
        heading: 'Should You Apply for Spring 2027 or Wait for September 2027?',
        paragraphs: [
          'Choose March/April/May 2027 if your target course (such as MBA, Business, Computing, Project Management, or Public Health) is open, you want to avoid an extra study gap, and your finances or education loan can be ready within 4–6 weeks.',
          'Wait for September 2027 if you are strictly aiming for top Russell Group research universities (such as Manchester, Leeds, Sheffield, or Nottingham), specialised lab-based courses, or larger competitive merit scholarships.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which UK universities actually have a March or May 2027 intake?',
        a: 'Universities such as Coventry, Greenwich, Anglia Ruskin, Ulster, and select London campuses regularly offer April/May starts, with a few business and pathway programmes starting in March. Course availability changes every cycle, so get your shortlist verified before applying.',
      },
      {
        q: 'Can I apply for UK May 2027 intake without IELTS?',
        a: 'Yes, several Spring-intake universities accept a Medium of Instruction (MOI) letter or 12th standard English marks (typically 70%+) depending on your Indian university and board, subject to course criteria and Pre-CAS interview checks.',
      },
      {
        q: 'Do May intake students get the Graduate Route post-study work visa?',
        a: 'Yes. Intake month does not affect Graduate Route eligibility. Under official GOV.UK rules, Bachelor’s and Master’s graduates applying on or after 1 January 2027 receive 18 months (3 years for PhD graduates).',
      },
      {
        q: 'When should my 28-day bank balance be ready for May 2027 intake?',
        a: 'Aim to have your required UKVI funds (first-year tuition balance + £14,130 for London or £10,827 outside London under the 30 Nov 2026 rates) parked in your account by late January or early February 2027 so CAS and visa filing face zero delays.',
      },
    ],
    relatedSlugs: ['study-in-uk-without-ielts-jntuh-ou-moi', 'uk-student-visa-28-day-funds-rule-inr'],
  },
  {
    slug: 'study-in-uk-without-ielts-jntuh-ou-moi',
    title: 'Study in UK Without IELTS: JNTUH, Osmania & Telangana MOI Guide',
    seoTitle: 'Study in UK Without IELTS: JNTUH & OU MOI',
    description:
      'Can JNTUH, Osmania & Telangana graduates study in the UK without IELTS? See MOI-friendly UK universities, 12th English rules & free MOI profile check.',
    category: 'MOI & Eligibility',
    intakeTag: 'MOI Waiver Guide',
    publishedAt: '2026-11-27',
    updatedAt: '2026-11-27',
    readTime: '7 min read',
    quickFacts: [
      { label: 'MOI Eligible Boards', value: 'JNTUH, OU, KU, CBSE, ISC & TS/AP Inter' },
      { label: '12th English Benchmark', value: 'Usually 70%+ (varies by university)' },
      { label: 'Degree Graduation Window', value: 'Usually within last 2 – 5 years' },
      { label: 'Extra Step to Expect', value: 'University Pre-CAS Interview' },
    ],
    sections: [
      {
        heading: 'How Medium of Instruction (MOI) Waivers Work in the UK',
        paragraphs: [
          'If you completed your B.Tech, B.Sc, B.Com, BBA, or MBA in English at an accredited Indian university such as JNTUH, Osmania University (OU), Kakatiya University, or JNTUK, you may not need to write IELTS for admission to many UK universities.',
          'UK Student Sponsor universities are permitted by UKVI to assess English proficiency for degree-level courses using approved alternative evidence—most commonly a Medium of Instruction (MOI) certificate issued by your university or college, your Class 12 English marks, or an internal online English test.',
        ],
      },
      {
        heading: 'What UK Universities Check for JNTUH, Osmania & Telangana Students',
        paragraphs: [
          'MOI policies are not identical across every UK campus—they are reviewed every intake. Admissions officers typically evaluate four criteria:',
        ],
        bullets: [
          'Recognised Indian University: Degrees from JNTUH, Osmania University, University of Hyderabad, Kakatiya University, Andhra University, and NIRF/NAAC-accredited autonomous colleges have strong recognition.',
          'Recency of Study: Most universities prefer your degree to be completed within the last 2 to 5 years (older degrees often require IELTS/PTE or an internal test).',
          '12th Standard English Score: Many UK universities waive IELTS directly if you scored 70%+ in English in CBSE, ISC, or Telangana/AP Intermediate—even without a separate MOI letter.',
          'Course Exceptions: Regulated or high-communication programmes (such as Nursing, Healthcare, Pharmacy, Journalism, or Law) usually require official IELTS or PTE Academic regardless of MOI.',
        ],
      },
      {
        heading: 'Popular MOI-Friendly UK Universities for Indian Graduates',
        paragraphs: [
          'Below is an indicative list of UK universities frequently offering MOI or Class 12 English waivers (always confirm current intake-specific rules before applying):',
        ],
        table: {
          caption: 'Indicative MOI-Friendly UK Universities & Intakes',
          headers: ['University', 'Location', 'Typical Intakes', 'Common Waiver Route'],
          rows: [
            ['Coventry University', 'Coventry', 'Sep, Jan, May', 'MOI / 12th English / Internal Test'],
            ['University of Greenwich', 'London', 'Sep, Jan, May', '12th English (70%+) / MOI'],
            ['University of Hertfordshire', 'Hatfield', 'Sep, Jan', '12th English / MOI (select degrees)'],
            ['De Montfort University (DMU)', 'Leicester', 'Sep, Jan', 'MOI / 12th English'],
            ['University of Westminster', 'London', 'Sep, Jan', '12th English (CBSE/ISC/State) / MOI'],
            ['Northumbria University', 'Newcastle', 'Sep, Jan', '12th English / MOI (select courses)'],
            ['Teesside University', 'Middlesbrough', 'Sep, Jan', 'MOI / 12th English'],
            ['Anglia Ruskin University', 'Cambridge / Chelmsford', 'Sep, Jan, May', '12th English / MOI'],
          ],
        },
      },
      {
        heading: 'Important Reality Check: MOI Waiver vs Pre-CAS Credibility Interview',
        paragraphs: [
          'Getting an IELTS waiver does not mean your spoken English goes untested. Almost every MOI-friendly UK university conducts a recorded Pre-CAS credibility interview before issuing your CAS letter—and UKVI can also conduct a short visa interview.',
          'At X-Axis Overseas in Ameerpet, we verify whether your exact JNTUH/OU college and passing year qualify for MOI before you pay any application fees, and we run 1-on-1 mock Pre-CAS interviews so you speak clearly and confidently.',
        ],
      },
      {
        heading: 'How to Get Your MOI Letter Cleanly',
        paragraphs: [
          'Request your Medium of Instruction certificate on official university or college letterhead bearing the registrar/principal signature, institutional stamp, your full name (matching passport), roll/hall-ticket number, degree title, and dates of study confirming all lectures and exams were conducted in English.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do UK universities accept MOI from JNTUH and Osmania University?',
        a: 'Yes, several modern UK universities accept MOI certificates from JNTUH, Osmania University, and accredited Telangana/AP universities for eligible non-regulated Master’s courses, provided your graduation year meets their recency rule.',
      },
      {
        q: 'What 12th English marks are required to study in the UK without IELTS?',
        a: 'Most universities accepting Indian Class 12 English require 70% or higher in CBSE/ISC, and 70%–80% in Telangana or Andhra Pradesh State Intermediate boards. Exact thresholds vary by university.',
      },
      {
        q: 'Does applying without IELTS increase UK student visa refusal risk?',
        a: 'Not if the university formally assesses and confirms your English level on the CAS letter and you communicate clearly during your Pre-CAS interview. Strong academic fit and proper 28-day UKVI financial proof matter far more.',
      },
      {
        q: 'Can Russell Group universities waive IELTS using MOI?',
        a: 'A few Russell Group universities accept CBSE/ISC Class 12 English marks for selected courses, while most require IELTS Academic or PTE Academic. We check each target department’s current requirement for free.',
      },
    ],
    relatedSlugs: ['uk-march-may-2027-intake-universities', 'uk-student-visa-28-day-funds-rule-inr'],
  },
  {
    slug: 'uk-student-visa-28-day-funds-rule-inr',
    title: 'UK Student Visa 28-Day Bank Funds Rule Explained in INR (Nov 2026 Update)',
    seoTitle: 'UK Student Visa 28-Day Funds Rule (2027)',
    description:
      'Updated 30 Nov 2026 UKVI maintenance funds in INR: £1,570/mo London (£14,130) & £1,203/mo outside London (£10,827), 28-day + 31-day rule & loan letters.',
    category: 'Visa & Funds',
    intakeTag: 'Updated Nov 2026',
    publishedAt: '2026-11-27',
    updatedAt: '2026-11-27',
    readTime: '6 min read',
    quickFacts: [
      { label: 'London Living Funds (9 mo)', value: '£14,130 (£1,570/mo — from 30 Nov 2026)' },
      { label: 'Outside London (9 mo)', value: '£10,827 (£1,203/mo — from 30 Nov 2026)' },
      { label: 'Minimum Hold Period', value: '28 consecutive calendar days' },
      { label: 'Statement Freshness', value: 'Must end within 31 days of visa filing' },
    ],
    sections: [
      {
        heading: 'New UKVI Maintenance Funds Effective 30 November 2026',
        paragraphs: [
          'For every UK Student Visa application submitted on or after 30 November 2026, official GOV.UK financial requirements have increased. If you are applying for January, March/May, or September 2027 intake, you must plan your savings or education loan using the updated figures below—not older 2024 or 2025 blog numbers.',
          'Your total required visa balance equals: Remaining First-Year Tuition Fee (total CAS tuition minus any deposit already shown as paid on your CAS) PLUS 9 months of UKVI living costs.',
        ],
        table: {
          caption: 'Official GOV.UK Student Visa Living Funds (Effective 30 Nov 2026; Indicative ₹110/GBP)',
          headers: ['Study Location', 'Monthly Rate', '9-Month Total (GBP)', 'Indicative INR (at ₹110/£)'],
          rows: [
            ['London (City of London + 32 Boroughs)', '£1,570 / month', '£14,130', '≈ ₹15.55 Lakhs'],
            ['Outside London (Manchester, Coventry, Leeds, etc.)', '£1,203 / month', '£10,827', '≈ ₹11.91 Lakhs'],
          ],
        },
      },
      {
        heading: 'Example Total Bank Balance Calculation (Outside London Master’s)',
        paragraphs: [
          'Suppose your 1-year Master’s tuition at an outside-London university is £16,500, you receive a £2,500 scholarship (net tuition £14,000), and you pay a £4,000 CAS deposit. Your remaining tuition balance is £10,000.',
          'Add £10,827 (9 months UKVI outside-London living funds) = £20,827 total required funds. At an indicative rate of ₹110/£ (plus a 5% exchange-rate safety buffer), you should maintain approximately ₹24.0 Lakhs smoothly in your account for 28 consecutive days.',
        ],
      },
      {
        heading: 'Understanding the 28-Day Hold & 31-Day Freshness Rule',
        paragraphs: [
          'UKVI checks two separate date rules on your bank statement or fixed-deposit letter:',
        ],
        bullets: [
          '28-Day Rule: Your closing balance must NOT drop below the required GBP equivalent (converted using the official OANDA rate on the date of application) on even a single day across 28 consecutive days.',
          '31-Day Rule: The final transaction/closing date of your bank statement must be no older than 31 days on the date you pay and submit your online UK Student Visa application.',
          'Always keep a ₹50,000–₹1,00,000 currency fluctuation buffer so a small INR/GBP exchange rate dip never pulls your balance below the UKVI threshold.',
        ],
      },
      {
        heading: 'Acceptable Funding Sources & Education Loans in India',
        paragraphs: [
          'Funds may be held in your own name, your parents’/legal guardians’ name (with birth certificate and signed consent letter), or via an official education loan sanction letter from an RBI-regulated bank or recognised financial institution (such as SBI, Union Bank, Bank of Baroda, HDFC Credila, Avanse, or Auxilo).',
          'Note that mutual funds, shares, gold loans, PF/EPF balances, and overdraft facilities are NOT accepted by UKVI as liquid maintenance funds. Education loan letters do not require 28-day maturity, but must be unconditional (except visa approval) and dated within 6 months of visa submission.',
        ],
      },
      {
        heading: '5 Common Financial Mistakes That Trigger Refusals',
        paragraphs: [
          'Most UK financial refusals happen due to preventable paperwork errors rather than lack of money:',
        ],
        bullets: [
          'Counting 28 days including the deposit date incorrectly (always wait 29 full days to be 100% safe).',
          'Using an outdated GBP/INR exchange rate without a buffer.',
          'Submitting an education loan letter that still lists pending collateral or co-applicant conditions.',
          'Using a co-operative bank not regulated on UKVI’s acceptable financial institution list.',
          'Missing the official bank stamp, manager signature, or printed account holder name matching the passport/birth certificate.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What are the new UK Student Visa maintenance funds from 30 November 2026?',
        a: 'According to GOV.UK, applications submitted on or after 30 November 2026 require £1,570 per month (£14,130 for 9 months) for London courses and £1,203 per month (£10,827 for 9 months) for courses outside London.',
      },
      {
        q: 'Does an education loan need to be kept for 28 days?',
        a: 'No. An official education loan sanction letter from an approved bank or NBFC does not require 28-day maturity, provided it confirms the exact amount, is unconditional (other than visa grant), and is dated within 6 months of your visa application.',
      },
      {
        q: 'Can I combine my parents’ savings account and an education loan?',
        a: 'Yes, you can combine eligible personal/parental savings (held 28 days) with an education loan sanction letter, as long as all documents strictly follow UKVI formatting rules.',
      },
      {
        q: 'Can X-Axis verify my bank statement and loan letter before visa filing?',
        a: 'Yes! Walk into our KVR Enclave, Ameerpet office or message us on WhatsApp (+91 93462 14771) for a free UKVI financial document verification before you submit your visa.',
      },
    ],
    relatedSlugs: ['uk-visa-vfs-hyderabad-tb-test-checklist', 'uk-march-may-2027-intake-universities'],
  },
  {
    slug: 'uk-visa-vfs-hyderabad-tb-test-checklist',
    title: 'UK Student Visa from Hyderabad: VFS Biometrics, TB Test Clinics & Checklist',
    seoTitle: 'UK Student Visa Hyderabad: VFS & TB Test',
    description:
      'Step-by-step UK Student Visa guide for Hyderabad students: UKVI-approved TB test clinics, VFS Global Hyderabad biometrics booking, IHS fees & checklist.',
    category: 'Hyderabad Local',
    intakeTag: 'Hyderabad Visa Guide',
    publishedAt: '2026-11-27',
    updatedAt: '2026-11-27',
    readTime: '5 min read',
    quickFacts: [
      { label: 'Biometrics Centre', value: 'VFS Global, Hyderabad' },
      { label: 'TB Certificate Validity', value: '6 months (UKVI-approved clinic only)' },
      { label: 'Standard Visa Processing', value: 'Typically ~3 weeks after biometrics' },
      { label: 'Free File Check', value: 'KVR Enclave, Ameerpet, Hyderabad' },
    ],
    sections: [
      {
        heading: 'Your Step-by-Step UK Student Visa Roadmap from Hyderabad',
        paragraphs: [
          'Once your UK university issues your Confirmation of Acceptance for Studies (CAS), your visa filing window officially opens (up to 6 months before your course start date). Following the exact sequence below avoids last-minute panic and priority-visa surcharges:',
        ],
        bullets: [
          'Step 1: Book your Tuberculosis (TB) test at a UKVI-approved clinic in Hyderabad—results are valid for 6 months, so do this as soon as you accept your offer.',
          'Step 2: Double-check your 28-day bank statement / education loan sanction letter against the 30 Nov 2026 UKVI rates (£1,570/mo London; £1,203/mo outside London).',
          'Step 3: Fill out the UK Student Route online application on GOV.UK, pay the Immigration Health Surcharge (IHS), and pay the visa application fee.',
          'Step 4: Book your biometrics appointment at VFS Global Hyderabad and upload digital copies of your documents beforehand (self-upload saves scanning charges).',
        ],
      },
      {
        heading: 'UKVI-Approved TB Test Clinics in Hyderabad',
        paragraphs: [
          'Indian residents staying in the UK for more than 6 months must submit a TB clearance certificate strictly from a UKVI-approved medical clinic listed on GOV.UK (reports from regular diagnostic labs are rejected).',
          'Always verify the current Hyderabad clinic list directly on gov.uk/tb-test-visa before booking, and carry your original passport, two passport-size photos, your UK university address/offer letter, and the clinic fee.',
        ],
      },
      {
        heading: 'Complete Document Checklist for VFS Global Hyderabad',
        paragraphs: [
          'Organise both crisp PDF uploads and an original physical folder before walking into your VFS Hyderabad appointment:',
        ],
        bullets: [
          'Valid original passport (plus old passports if you have previous international travel/visas).',
          'Printed VFS Appointment Confirmation Letter & Document Checklist.',
          'CAS Statement (verify passport number, tuition paid, and course dates match 100%).',
          'Academic transcripts, provisional/degree certificates & IELTS/PTE scorecard (if listed on your CAS).',
          'UKVI-approved TB Test Clearance Certificate.',
          'Financial proof: 28-day bank statement / FD / unconditional education loan letter (+ birth certificate & signed parental consent letter if funds are in a parent’s name).',
          'ATAS Certificate (only if required by your specific STEM/research course and stated on your CAS).',
        ],
      },
      {
        heading: 'Get a Free Pre-VFS Visa File Review in Ameerpet',
        paragraphs: [
          'A single mismatched date on a bank letter or an unsigned consent form can delay your visa past campus registration. Students across Hyderabad, Secunderabad, Warangal, Karimnagar, and Vijayawada visit our office at 1st Floor, KVR Enclave, above Bata showroom, beside AAA theatre, Swathi Avenue, Ameerpet (2 minutes from Ameerpet Metro Station) for a complete pre-filing document audit at zero cost.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How long does UK Student Visa processing take after VFS Hyderabad biometrics?',
        a: 'Standard UK Student Visa processing typically takes around 3 weeks (15 working days) after biometrics, though peak seasons (July–August) can take longer. Priority (5 working days) and Super Priority options are also available for an extra fee.',
      },
      {
        q: 'Can I get my UK TB test done at any hospital in Hyderabad?',
        a: 'No. UKVI only accepts TB certificates from officially approved clinics listed on gov.uk/tb-test-visa. Always verify the approved Hyderabad clinic before scheduling your appointment.',
      },
      {
        q: 'Should I use VFS self-upload or pay for document scanning at VFS Hyderabad?',
        a: 'Uploading clean, properly named PDFs on the VFS portal before your appointment is free and faster on appointment day. Our counsellors help you scan, verify, and upload every document cleanly.',
      },
      {
        q: 'When is the earliest I can apply for my UK Student Visa?',
        a: 'You can apply up to 6 months before your course start date once your CAS is issued and your 28-day funds (or education loan letter) and TB test certificate are ready.',
      },
    ],
    relatedSlugs: ['uk-student-visa-28-day-funds-rule-inr', 'study-in-uk-without-ielts-jntuh-ou-moi'],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
