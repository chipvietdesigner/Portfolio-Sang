
import { SheetData } from './types';

export const PORTFOLIO_DATA: SheetData[] = [
  // SHEET 1: Cover & Intro
  {
    id: 1,
    front: {
      type: 'cover',
      title: 'Sang Pham',
      subtitle: 'PRODUCT DESIGNER',
      details: {
        year: 'PORTFOLIO',
        location: 'Product Designer',
        specs: [],
        description: ['UI/UX Design & Development']
      }
    },
    back: {
      type: 'intro',
      title: 'INTRODUCTION',
      description: [
        'I am a Product Designer based in Da Nang, Vietnam.',
        'At the heart of my work is a commitment to simplifying complexity, connecting the dots between user needs, business goals, and innovative design solutions.'
      ]
    }
  },
  // SHEET 2: My Journey & Divider
  {
    id: 2,
    front: {
      type: 'resume',
      pageNumber: '02',
      title: 'MY JOURNEY',
      resumeSections: [
        {
          items: [
            "My path began in Computer Science, where I spent my student years building robots, joining product-innovation competitions, and collecting a few small achievements along the way. Those early projects taught me how systems work — and how ideas turn into something real.",
            "I started my career as a Front-end Developer, crafting interfaces and learning how technology behaves from the inside. Over time, my curiosity shifted beyond the screen. I became deeply interested in how products actually solve user problems, how they create value for both businesses and society, and how teams operate behind the scenes to bring those products to life.",
            "That curiosity led me into Product Design, and eventually into a hybrid role as a Product Designer & Business Analyst. Today, I focus on transforming complex systems into clear, intuitive experiences, bridging user needs with business logic, data, and real technical constraints."
          ]
        }
      ]
    },
    back: {
      type: 'section-title',
      pageNumber: '03',
      title: 'EXPERIENCE',
      subtitle: 'Professional Career'
    }
  },
  // SHEET 3: Experience (VeryPay)
  {
    id: 3,
    front: {
      type: 'resume',
      pageNumber: '04',
      title: 'EXPERIENCE',
      resumeSections: [
        {
            heading: 'Lead Designer & Business Analyst',
            subheading: 'VeryPay LLC',
            date: 'Apr 2025 – Present',
            items: [
                'In this role, I work closely with stakeholders and the Product Owner to define business requirements, translating them into actionable specifications such as BRDs, PRDs, and user stories. A key part of my responsibility is bridging UX logic with system architecture to optimize product flows and ensure scalability.',
                'I actively create wireframes and requirement documents while aligning cross-functional teams—including PMs, Developers, and Testers—to ensure unified goals. Additionally, I mentor junior designers and have formalized design operations to significantly improve team workflow and product delivery speeds.'
            ]
        },
        {
            heading: 'Product Designer',
            subheading: 'VeryPay LLC',
            date: 'Aug 2020 – Apr 2025',
            items: [
                'For nearly five years, I designed the UI and UX for a comprehensive fintech ecosystem, which included mobile POS apps, digital receipts, and payment NFC cards. My mission was to bridge the gap between complex financial infrastructure and user-friendly digital experiences.',
                'I collaborated daily with cross-functional stakeholders including PMs, Business Analysts, Developers, and Testers. This constant communication ensured that the product vision was aligned across all teams and that execution remained agile and precise.'
            ]
        }
      ]
    },
    back: {
      type: 'resume',
      pageNumber: '05',
      title: 'EXPERIENCE (CONT.)',
      resumeSections: [
        {
            items: [
                'During this tenure, I delivered critical functions such as Investment portals, Lending logic, Invoice management, and Finance AI assistants. My work ensured strict adherence to PCI DSS Certifications and enabled advanced features like Geo-fencing, Inventory Management, and USSD Integration.',
                'Key competencies honed during this period include UX/UI Design, Wireframing, and Prototyping using tools like Figma and FigJam. I also facilitated collaboration between business and technical teams, translating requirements into robust product flows.'
            ]
        },
        {
            heading: 'Front-end Developer',
            subheading: 'SmartDev LLC',
            date: 'Oct 2019 – Sep 2022',
            items: [
                'As a developer, I built and optimized front-end interfaces for web, iOS, and Android applications. My focus was on improving UI/UX to ensure seamless cross-device performance and consistent interactions.',
                'I integrated complex APIs, managed data workflows, and collaborated with backend engineers to ensure seamless product reliability. My contributions helped deliver production-quality features across multiple environments.'
            ]
        }
      ]
    }
  },
  // SHEET 4: Skills, Education & Awards
  {
      id: 4,
      front: {
          type: 'resume',
          pageNumber: '06',
          title: 'SKILLS & EDUCATION',
          resumeSections: [
              {
                  heading: 'Professional Skills',
                  items: [
                      'My core design competencies lie in Mobile & Web design, complex Wire-framing, Prototyping, and establishing robust Design Systems. I am also experienced in HMI Design. Technically, I am proficient in HTML/CSS, React Native, and ReactJS, with a foundational understanding of Java Springboot.'
                  ]
              },
              {
                  heading: 'Danang University of Technology',
                  subheading: 'Bachelor of IT',
                  date: '2017',
                  items: [
                      'Graduated with a focus on software engineering and system design, providing a strong technical foundation for my design career.'
                  ]
              },
              {
                  heading: 'AWS Build On Vietnam 2021',
                  subheading: 'Champion',
                  date: '2021',
                  items: [
                      'Achieved the Champion title and "Best Presentation" award out of 63 competing teams. Hosted by Amazon Web Services, this competition challenged us to solve real-world problems using cloud technology.'
                  ]
              }
          ]
      },
      back: {
          type: 'section-title',
          pageNumber: '07',
          title: 'SELECTED WORKS',
          subtitle: 'Case Studies'
      }
  },
  // SHEET 5: PROJECT INDEX (FRONT) & VERYPAY OPENER (BACK)
  {
      id: 5,
      front: {
          type: 'project-index',
          pageNumber: '08',
          title: 'INDEX',
          subtitle: '2020 - 2024',
          description: [
              'VeryPay | Fintech',
              'Kletta | Accountant SaaS',
              'Curo | Drone HMI',
              'Koodaa | AI Bookkeeper'
          ]
      },
      back: {
        type: 'project-opener',
        pageNumber: '09',
        projectIndex: '0.1',
        title: 'VERYPAY',
        subtitle: 'FINTECH SUPER APP',
        imageSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop', 
        details: {
          year: '2020 - 2025',
          location: 'Global',
          specs: [
            { label: 'ROLE', value: 'Lead Product Designer' },
            { label: 'DOMAIN', value: 'Fintech / Payments' },
            { label: 'PLATFORM', value: 'iOS / Android / Web' },
          ],
          description: [] 
        }
      }
  },
  // SHEET 6: VERYPAY DETAIL (FRONT) & KLETTA OPENER (BACK)
  {
    id: 6,
    front: {
      type: 'project-detail',
      pageNumber: '10',
      title: 'VERYPAY INSIGHTS',
      projectSections: [
          {
              heading: 'Key Responsibilities',
              items: [
                  'Defined architecture for closed-loop payment systems and mobile wallets.',
                  'Designed end-to-end flows for NFC Tap-to-Pay and Agent POS terminals.',
                  'Facilitated workshops with stakeholders to map complex financial regulations to UI.'
              ]
          },
          {
              heading: 'Key Achievements',
              items: [
                  'Reduced merchant onboarding time by 40% through unified KYC flows.',
                  'Successfully launched PCI-DSS compliant payment modules across 3 African markets.',
                  'Established a centralized Design System used by 12+ developers.'
              ]
          }
      ],
      diagrams: [
          'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop', 
          'https://images.unsplash.com/photo-1616077168712-fc6c738ae826?q=80&w=800&auto=format&fit=crop', 
          'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=800&auto=format&fit=crop'
      ]
    },
    back: {
        type: 'project-opener',
        pageNumber: '11',
        projectIndex: '0.2',
        title: 'KLETTA',
        subtitle: 'ACCOUNTANT SAAS',
        imageSrc: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop', 
        details: {
            year: '2023 - 2024',
            location: 'Nordic Market',
            specs: [
                { label: 'ROLE', value: 'Product Designer' },
                { label: 'DOMAIN', value: 'Accounting / Tax' },
                { label: 'PLATFORM', value: 'Web App' },
            ],
            description: []
        }
    }
  },
  // SHEET 7: KLETTA DETAIL (FRONT) & CURO OPENER (BACK)
  {
      id: 7,
      front: {
        type: 'project-detail',
        pageNumber: '12',
        title: 'KLETTA INSIGHTS',
        projectSections: [
            {
                heading: 'Key Responsibilities',
                items: [
                    'Translated complex tax laws into intuitive, step-by-step wizard interfaces.',
                    'Designed data-heavy dashboards for real-time financial monitoring.',
                    'Conducted user testing with accountants to refine terminology and workflow speed.'
                ]
            },
            {
                heading: 'Key Achievements',
                items: [
                    'Increased user task completion rate by 25% for monthly reconciliation.',
                    'Redesigned the "Year-End Closing" module, reducing support tickets by 15%.',
                    'Delivered a scalable component library for tabular data and charts.'
                ]
            },
        ],
        diagrams: [
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop'
        ]
      },
      back: {
        type: 'project-opener',
        pageNumber: '13',
        projectIndex: '0.3',
        title: 'CURO',
        subtitle: 'DRONE MONITORING (HMI)',
        imageSrc: "https://images.unsplash.com/photo-1506947411487-a5673826e6e6?q=80&w=1600&auto=format&fit=crop", 
        details: {
            year: '2022',
            location: 'International',
            specs: [
                { label: 'ROLE', value: 'UX Designer' },
                { label: 'DOMAIN', value: 'HMI / Dashboard' },
                { label: 'PLATFORM', value: 'Tablet / Controller' },
            ],
            description: []
        }
      }
  },
  // SHEET 8: CURO DETAIL (FRONT) & KOODAA OPENER (BACK)
  {
      id: 8,
      front: {
        type: 'project-detail',
        pageNumber: '14',
        title: 'CURO INSIGHTS',
        projectSections: [
            {
                heading: 'Key Responsibilities',
                items: [
                    'Designed high-contrast HMI interfaces for outdoor visibility (Day/Night modes).',
                    'Optimized touch targets and layouts for tablet-based drone controllers.',
                    'Created critical alert systems for battery low/signal loss scenarios.'
                ]
            },
            {
                heading: 'Key Achievements',
                items: [
                    'Improved operator reaction time to critical alerts by 2 seconds.',
                    'Designed a 3D-map overlay system that enhanced spatial awareness.',
                    'Standardized the icon set for hardware status indicators.'
                ]
            }
        ],
        diagrams: [
            'https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop'
        ]
      },
      back: {
        type: 'project-opener',
        pageNumber: '15',
        projectIndex: '0.4',
        title: 'KOODAA',
        subtitle: 'AI BOOKKEEPER',
        imageSrc: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop', 
        details: {
            year: '2024',
            location: 'Startup',
            specs: [
                { label: 'ROLE', value: 'Product Designer' },
                { label: 'DOMAIN', value: 'AI / Automation' },
                { label: 'PLATFORM', value: 'Web / Responsive' },
            ],
            description: []
        }
      }
  },
  // SHEET 9: KOODAA DETAIL (FRONT) & CONTACT (BACK)
  {
      id: 9,
      front: {
        type: 'project-detail',
        pageNumber: '16',
        title: 'KOODAA INSIGHTS',
        projectSections: [
            {
                heading: 'Key Responsibilities',
                items: [
                    'Designed the Conversational UI (CUI) for the AI assistant to query financial data.',
                    'Created trust-building mechanisms (citations, confidence scores) for AI outputs.',
                    'Developed a "Review Mode" for humans to validate AI-categorized transactions.'
                ]
            },
            {
                heading: 'Key Achievements',
                items: [
                    'Successfully integrated OCR receipt scanning into the chat interface.',
                    'Designed a seamless hand-off flow from AI automation to human manual review.',
                    'Created a dark-mode first aesthetic appealing to tech-savvy freelancers.'
                ]
            }
        ],
        diagrams: [
            'https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop'
        ]
      },
      back: {
        type: 'contact', 
        pageNumber: '17',
        title: 'CONTACT',
        subtitle: 'OPEN FOR NEW OPPORTUNITIES',
        description: [
            'Based in Da Nang, Vietnam',
            '(+84) 329456195'
        ],
        email: 'chipviet.designer@gmail.com',
        socials: [
          { label: 'Behance', url: 'https://www.behance.net/' },
          { label: 'Dribbble', url: 'https://dribbble.com/' }
        ]
    }
  },
  // SHEET 10: BACK COVER (FRONT) & EMPTY (BACK)
  {
      id: 10,
      front: {
        type: 'end', // Reusing end layout for back cover appearance
        title: '',
        subtitle: '',
        details: { year: '', location: '', specs: [], description: [] }
      },
      back: {
          type: 'cover', // Hidden side
          title: '',
          subtitle: ''
      }
  }
];
