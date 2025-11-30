
import { SheetData } from './types';

export const PORTFOLIO_DATA: SheetData[] = [
  // SHEET 1: Cover & Intro
  {
    id: 1,
    front: {
      type: 'cover',
      title: '/   ',
      subtitle: 'PHAM XUAN SANG (CHIP VIET)',
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
        'Hello, I am a Product Designer & Product Designer Business Analyst based in Da Nang, Vietnam.',
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
            heading: 'Business Analyst',
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
                'During this tenure, I designed critical functions such as Investment portals, Lending logic, Invoice management, and Finance AI assistants.',
                'Key competencies honed during this period include UX/UI Design, Wireframing, and Prototyping using tools like Figma and Draw.io. I also facilitated collaboration between business and technical teams, translating requirements into robust product flows.'
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
          // type: 'resume',
          // pageNumber: '06',
          // title: 'SKILLS & EDUCATION',
          // resumeSections: [
          //     {
          //         heading: 'Professional Skills',
          //         items: [
          //             'My core design competencies lie in Mobile & Web design, complex Wire-framing, Prototyping, and Design Systems. I am also experienced in HMI Design. Technically, I have experience in React Native, and ReactJS, with a foundational understanding of Java Springboot.'
          //         ]
          //     },
          //     {
          //         heading: 'Danang University of Technology',
          //         subheading: 'Bachelor of IT',
          //         date: '2017',
          //         items: [
          //             'Graduated with a focus on software engineering and system design, providing a strong technical foundation for my design career.'
          //         ]
          //     },
          //     {
          //         heading: 'AWS Build On Vietnam 2021',
          //         subheading: 'Champion',
          //         date: '2021',
          //         items: [
          //             'Achieved the Champion title and "Best Presentation" award out of 63 competing teams. Hosted by Amazon Web Services, this competition challenged us to solve real-world problems using cloud technology.'
          //         ]
          //     }
          // ]
             type: 'section-title',
          pageNumber: '07',
          title: 'SELECTED WORKS',
      },
      back: {
           type: 'project-opener',
        pageNumber: '09',
        projectIndex: '0.1',
        title: 'VERYPAY',
        subtitle: 'FINTECH SUPER APP',
        descriptionPrj: 'VeryPay is closed-loop contactless tap and go payment technology extend utility, increase usage of mobile money, and drive growth for Mobile Network Operators across the African continent.',
        imageSrc: '/assets/verypay-merchant-tapcard.png', 
        details: {
          year: '2020 - 2025',
          location: 'Global',
          specs: [
            { label: 'ROLE', value: 'Business Analyst & Product Designer' },
            { label: 'DOMAIN', value: 'Fintech / Payments' },
            { label: 'PLATFORM', value: 'iOS / Android / Web / POS devices / Card Printer' },
            { label: 'Responsibilities',  value: 
                  'Mobile Design / Web Design / Wireframing / Prototyping / Design Systems / Business Analysis',
            },
            // {label: 'View more', value: 'https://www.verypay.global/', isLink: true },
          ],
          description: [] 
        },
      }
  },
  // SHEET 5: PROJECT INDEX (FRONT) & VERYPAY OPENER (BACK)
  // {
  //     id: 5,
  //     front: {
  //         type: 'project-index',
  //         pageNumber: '08',
  //         title: 'INDEX',
  //         subtitle: '2020 - Present',
  //         description: [
  //             'VeryPay | Fintech',
  //             'Kletta | Accountant SaaS',
  //             'Curo | Drone HMI',
  //             'Koodaa | AI Bookkeeper'
  //         ]
  //     },
  //     back: {
  //       type: 'project-opener',
  //       pageNumber: '09',
  //       projectIndex: '0.1',
  //       title: 'VERYPAY',
  //       subtitle: 'FINTECH SUPER APP',
  //       descriptionPrj: 'VeryPay is closed-loop contactless tap and go payment technology extend utility, increase usage of mobile money, and drive growth for Mobile Network Operators across the African continent.',
  //       imageSrc: '/assets/verypay-cover.png', 
  //       details: {
  //         year: '2020 - 2025',
  //         location: 'Global',
  //         specs: [
  //           { label: 'ROLE', value: 'Lead Product Designer' },
  //           { label: 'DOMAIN', value: 'Fintech / Payments' },
  //           { label: 'PLATFORM', value: 'iOS / Android / Web' },
  //           { label: 'Responsibilities',  value: 
  //                 'Mobile Design / Web Design / Wireframing / Prototyping / Design Systems / Business Analysis',
  //           },
  //           {label: 'View more', value: 'https://www.verypay.global/', isLink: true },
  //         ],
  //         description: [] 
  //       },
  //     }
  // },
  // SHEET 6: VERYPAY DETAIL (FRONT) & KLETTA OPENER (BACK)
  {
    id: 6,
    front: {
      type: 'project-detail',
      pageNumber: '10',
      title: 'VERYPAY INSIGHTS',
      
      diagrams: [
         '/assets/verypay-card.png', 
          '/assets/verypay-bo.png', 
           '/assets/verypay-customer.png', 
      ]
    },
    back: {
        type: 'project-opener',
        pageNumber: '11',
        projectIndex: '0.2',
        title: 'KLETTA',
        subtitle: 'ACCOUNTANT SAAS',
        imageSrc: '/assets/kletta-cover.png', 
        descriptionPrj: 'Kletta is a SaaS platform designed to streamline accounting processes for small to medium-sized businesses. It offers features such as automated invoicing, expense tracking, and real-time financial reporting, all accessible through an intuitive mobile & web interface.',
        details: {
            year: '2023 - 2024',
            location: 'Nordic Market',
            specs: [
                { label: 'ROLE', value: 'UX/UI Designer' },
                { label: 'DOMAIN', value: 'Accounting / Tax' },
                { label: 'PLATFORM', value: 'Mobile & Web apps' },
                 { label: 'Responsibilities',  value: 
                  'Mobile Design / Web Design / Prototyping / Design Systems',
                },
            ],
            description: []
        },
    },
    
  },
  // SHEET 7: KLETTA DETAIL (FRONT) & CURO OPENER (BACK)
  {
      id: 7,
      front: {
        type: 'project-detail',
        pageNumber: '12',
        title: 'KLETTA INSIGHTS',

        diagrams: [
           '/assets/kletta-appicon.png',
           '/assets/kletta-typo.png',
           '/assets/kletta-branding.png',
            '/assets/kletta-portal-mobile.png',
            '/assets/kletta-mobile-onboard.png',
            '/assets/kletta-mobile-receipt.png',
            
        ]
      },
      back: {
        type: 'project-opener',
        pageNumber: '13',
        projectIndex: '0.3',
        title: 'CURO',
        subtitle: 'DRONE MONITORING (HMI)',
        descriptionPrj: 'Curo is an enterprise drone-management platform that remotely monitors and controls Drone-in-a-Box systems—complete with solar-powered mobility and DJI Dock 2 integration. It automates compliance, flight operations, and asset tracking so businesses can deploy drones anywhere with confidence.',
       imageSrc: '/assets/curo-web1.png', 
        details: {
            year: '2022',
            location: 'International',
            specs: [
                { label: 'ROLE', value: 'HMI Designer' },
                { label: 'DOMAIN', value: 'HMI / Dashboard' },
                { label: 'PLATFORM', value: 'Tablet / Web apps' },
                 { label: 'Responsibilities',  value: 
                  'Web Design / Wireframing / Prototyping / Design Systems',
                },
            ],
            description: [],
            
        },
      }
  },
  // SHEET 8: CURO DETAIL (FRONT) & KOODAA OPENER (BACK)
  {
      id: 8,
      front: {
        type: 'project-detail',
        pageNumber: '14',
        title: 'CURO INSIGHTS',
       
        diagrams: [
              '/assets/curo-whydrone.png',
               '/assets/curo-user.png',
              '/assets/curo-module.png',
                '/assets/curo-tablet.png',
             
        ]
      },
      back: {
         type: 'contact', 
        pageNumber: '17',
        title: 'CONTACT',
        description: [
            '(+84) 329456195'
        ],
        email: 'chipviet.designer@gmail.com',
        socials: [
          { label: 'Behance', url: 'https://www.behance.net/chipviet' },
          { label: 'Dribbble', url: 'https://dribbble.com/chipvietdesigner' }
        ]
      }
  },
  // SHEET 9: KOODAA DETAIL (FRONT) & CONTACT (BACK)
  
  // SHEET 10: BACK COVER (FRONT) & EMPTY (BACK)
  {
      id: 10,
      front: {
        type: 'end', // Reusing end layout for back cover appearance
        title: 'Thank you for watching',
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
