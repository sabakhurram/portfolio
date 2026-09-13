const projectDetails = {
  // =========================================================
  // 01 — MILEAGE & FLEET MANAGEMENT
  // =========================================================
  mileageFleet: {
    number: "01",
    category: "FEATURED PROJECT",
    title: "Mileage & Fleet Management",

    overviewTitle:
      "A centralized system for managing vehicle mileage and fleet operations.",

    stack:
      "React · Node.js · Express.js · PostgreSQL · Supabase",

    subtitle:
      "A full-stack fleet management system that replaces manual mileage records with a centralized, role-based digital workflow.",

    overview:
      "Mileage & Fleet Management is a private business application developed to replace  manual vehicle mileage recording process. The system centralizes vehicles, drivers, mileage entries, categories, monthly limits, authentication, and operational reporting into one structured platform.",

    problem: {
      title: "Manual records made fleet operations harder to manage.",
      content:
        "Vehicle mileage was previously recorded manually, making it difficult to maintain consistent records, monitor monthly limits, track vehicle usage, and generate operational reports. The system needed to provide a reliable digital workflow for administrators and drivers while enforcing the company's business rules."
    },

    solution: {
      title: "A role-based system built around real fleet workflows.",
      content:
        "I developed a full-stack application where administrators manage vehicles, drivers, categories, and reporting while drivers submit their own mileage records. Authentication, database policies, validation, and business rules work together to keep the workflow controlled and consistent."
    },

    architecture: {
      frontend: "React · Vite · CSS",
      backend: "Node.js · Express.js",
      authentication: "Supabase Auth · Row Level Security",
      database: "PostgreSQL · Supabase"
    },

    features: [
      {
        number: "01",
        title: "Role-Based Authentication",
        description:
          "Separate admin and driver workflows ensure that users can access only the functionality relevant to their role."
      },
      {
        number: "02",
        title: "Vehicle Management",
        description:
          "Administrators can add, update, assign, and manage vehicle records and their current status."
      },
      {
        number: "03",
        title: "Driver Management",
        description:
          "Driver records and active status are managed centrally, allowing access to be controlled without removing historical records."
      },
      {
        number: "04",
        title: "Mileage Recording",
        description:
          "Drivers can submit daily mileage records including dates, starting mileage, ending mileage, trip type, and remarks."
      },
      {
        number: "05",
        title: "Monthly Mileage Limits",
        description:
          "Vehicle categories can have configured monthly kilometer limits for monitoring fleet utilization."
      },
      {
        number: "06",
        title: "Business Rule Enforcement",
        description:
          "The system validates driver status, vehicle status, mileage values, trip types, and configured operational rules before accepting records."
      },
      {
        number: "07",
        title: "PDF Reporting",
        description:
          "Administrators can generate structured monthly PDF reports for reviewing and sharing operational mileage information."
      },
      {
        number: "08",
        title: "Audit-Friendly Records",
        description:
          "Centralized mileage records provide a more consistent and traceable alternative to manually maintained records."
      }
    ],

    engineering: {
      title: "Where business rules meet full-stack engineering.",
      points: [
        {
          title: "Role-Based Access",
          text:
            "Authentication and authorization were structured around separate admin and driver workflows so each role receives the correct level of access."
        },
        {
          title: "Database Security",
          text:
            "Supabase Authentication and Row Level Security help protect database access while keeping the application workflow controlled."
        },
        {
          title: "Validation & Business Logic",
          text:
            "Mileage calculations, vehicle status, driver status, trip type, and monthly limits are validated as part of the submission workflow."
        },
        {
          title: "Operational Reporting",
          text:
            "Structured mileage data can be displayed in the dashboard and converted into monthly PDF reports."
        }
      ]
    },

    database: [
      "Users and role information",
      "Driver records",
      "Vehicle records",
      "Vehicle categories",
      "Monthly category limits",
      "Mileage entries",
      "Operational reporting data"
    ],

    security: [
      "Supabase Authentication",
      "Row Level Security",
      "Role-based authorization",
      "Protected API routes",
      "Server-side validation",
      "Inactive account restrictions"
    ],

    role: "Full Stack Developer",

    roleTitle: {
      main: "Full-stack development",
      accent: " across the system."
    },

    roleDescription:
      "I worked across the frontend and backend, translating the company's manual workflow into a structured digital application with authentication, business rules, database integration, reporting, and responsive interfaces.",

    contributions: [
      "Designed and developed the React frontend",
      "Built Express.js REST API endpoints",
      "Integrated Supabase Authentication and PostgreSQL",
      "Implemented role-based access control",
      "Developed vehicle and driver management workflows",
      "Implemented mileage validation and calculation logic",
      "Added monthly category mileage limits",
      "Implemented inactive driver and vehicle restrictions",
      "Built operational reporting workflows",
      "Implemented monthly PDF report generation",
      "Designed responsive admin and driver dashboards"
    ],

    outcomeTitle: {
      main: "From manual records",
      accent: " to a centralized system."
    },

    outcome:
      "The completed system replaces a manual mileage-recording workflow with a centralized platform for managing drivers, vehicles, mileage, limits, and reports. The project strengthened my ability to translate real business requirements into full-stack functionality while keeping authentication, authorization, validation, and database design aligned with the actual workflow.",

    learnings: [
      "Translated a manual business process into a digital workflow",
      "Strengthened authentication and authorization skills",
      "Improved experience with Supabase and PostgreSQL",
      "Learned to enforce business rules across frontend and backend",
      "Improved understanding of role-based application architecture",
      "Gained experience generating operational PDF reports"
    ],

    futureImprovements: [
      "Add advanced fleet analytics and visual dashboards",
      "Add automated alerts for approaching mileage limits",
      "Introduce richer historical reporting and filtering",
      "Add vehicle maintenance tracking",
      "Add additional report export formats"
    ],

    technologies: [
      "React",
      "Vite",
      "CSS",
      "Node.js",
      "Express.js",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "Row Level Security"
    ],

    image: "/projects/mileage-management.png",

    live: "https://admin.margallatravels.com.pk/",
    github: "https://github.com/sabakhurram/margalla-travels-management-frontend",
  },

  // =========================================================
  // 02 — FIXITNOW
  // =========================================================
  fixitnow: {
    number: "02",
    category: "COLLABORATIVE PROJECT",
    title: "FixItNow",

    overviewTitle:
      "Connecting solar services through one digital platform.",

    stack:
      "React · Node.js · Express.js · Firebase · PostgreSQL · Supabase",

    subtitle:
      "A collaborative full-stack solar services platform connecting customers, service requests, authentication, and administrative operations.",

    overview:
      "FixItNow is a collaborative web application developed with another developer to bring solar service workflows into one digital platform. The application includes customer-facing services, authentication, service requests, dashboards, and administrative functionality designed around the needs of a solar service business.",

    problem: {
      title: "Solar service processes needed one connected workflow.",
      content:
        "Customers needed a clear way to explore services and submit requests, while administrators needed centralized tools for managing users, requests, and operations. The challenge was connecting these workflows while maintaining authentication, protected routes, and a consistent experience."
    },

    solution: {
      title: "A connected customer and administrative platform.",
      content:
        "The application combines a responsive React frontend with an Express.js backend, Firebase authentication, and a centralized PostgreSQL database through Supabase. Customer and administrative workflows communicate through REST APIs and protected application routes."
    },

    architecture: {
      frontend: "React · Vite · React Router",
      backend: "Node.js · Express.js · REST APIs",
      authentication: "Firebase Authentication · Firebase Admin",
      database: "PostgreSQL · Supabase"
    },

    features: [
      {
        number: "01",
        title: "Customer Dashboard",
        description:
          "A dedicated customer experience provides access to services, requests, profile information, and account activity."
      },
      {
        number: "02",
        title: "Service Requests",
        description:
          "Customers can explore solar services and submit requests through structured forms."
      },
      {
        number: "03",
        title: "Authentication",
        description:
          "Firebase Authentication supports user sign-in while Firebase Admin supports protected server-side operations."
      },
      {
        number: "04",
        title: "Admin Portal",
        description:
          "Administrative workflows provide centralized access to users, service activity, and operational management."
      },
      {
        number: "05",
        title: "REST API Integration",
        description:
          "The React frontend communicates with the Express backend through REST APIs for application data and protected operations."
      },
      {
        number: "06",
        title: "Centralized Database",
        description:
          "PostgreSQL through Supabase provides a centralized data layer for users and application records."
      }
    ],

    engineering: {
      title: "Building a full-stack product within a team.",
      points: [
        {
          title: "Frontend Architecture",
          text:
            "React and React Router were used to structure customer and administrative experiences into clear application flows."
        },
        {
          title: "Authentication",
          text:
            "Firebase Authentication and Firebase Admin were integrated to support authenticated users and protected backend operations."
        },
        {
          title: "API Communication",
          text:
            "The frontend communicates with the Express.js backend through REST endpoints rather than handling business operations entirely in the browser."
        },
        {
          title: "Database Integration",
          text:
            "Supabase and PostgreSQL provide the centralized data layer used for persistent application records."
        }
      ]
    },

    role: "Full Stack Developer · Team Project",

    roleTitle: {
      main: "Full-stack development",
      accent: " within a team."
    },

    roleDescription:
      "I contributed to FixItNow as part of a collaborative development team, working across frontend and backend functionality while coordinating responsibilities with another developer.",

    contributions: [
      "Contributed to the React frontend architecture",
      "Developed customer-facing dashboard functionality",
      "Worked with React Router and protected routes",
      "Integrated frontend workflows with REST APIs",
      "Worked with Firebase Authentication",
      "Worked with Firebase Admin for backend authentication",
      "Integrated PostgreSQL through Supabase",
      "Contributed to service request workflows",
      "Worked on administrative functionality",
      "Helped refine responsive UI and user experience"
    ],

    outcomeTitle: {
      main: "From disconnected service processes",
      accent: " to one connected platform."
    },

    outcome:
      "FixItNow brings customer and administrative solar service workflows into one connected digital platform. The project also gave me experience working collaboratively, coordinating responsibilities, integrating multiple technologies, and contributing to a larger full-stack product.",

    learnings: [
      "Strengthened experience working in a collaborative development environment",
      "Learned to coordinate frontend and backend responsibilities",
      "Improved understanding of Firebase Authentication",
      "Strengthened REST API integration skills",
      "Improved understanding of protected application workflows",
      "Learned how multiple developers contribute to one full-stack product"
    ],

    futureImprovements: [
      "Add advanced service request tracking",
      "Introduce real-time notifications",
      "Add richer administrative analytics",
      "Improve service scheduling workflows",
      "Expand customer communication features"
    ],

    technologies: [
      "React",
      "Vite",
      "React Router",
      "Node.js",
      "Express.js",
      "Firebase",
      "Firebase Admin",
      "Supabase",
      "PostgreSQL",
      "Cloudinary",
      "EmailJS"
    ],

    image: "/projects/fixitnow.png",

    live: "https://fixitnow-services.vercel.app/",
    github: "https://github.com/sabakhurram/FixItNow_Frontend",
  },

  // =========================================================
  // 03 — MARGALLA TRAVELS
  // =========================================================
  margallaTravels: {
    number: "03",
    category: "REAL-WORLD WEB PROJECT",
    title: "Margalla Travels",

    overviewTitle:
      "A modern digital presence for an established transportation company.",

    stack:
      "HTML · CSS · JavaScript · GSAP · EmailJS",

    subtitle:
      "A responsive corporate website designed to present Margalla Travels' services, fleet, and business experience through a polished, animation-driven interface.",

    overview:
      "Margalla Travels is a corporate car rental and transportation company with an established presence in the industry. The goal of this project was to create a modern website that communicates the company's services, fleet, experience, and professional positioning while making the overall digital experience more engaging and accessible.",

    problem: {
      title: "A strong business needed a stronger digital presence.",
      content:
        "The challenge was to translate an established transportation business into a modern web experience without losing the professionalism and trust expected from corporate clients. The website needed to communicate a large amount of information while remaining engaging, easy to navigate, and responsive."
    },

    solution: {
      title: "A structured, responsive experience built around motion.",
      content:
        "I designed and developed a multi-section website combining clear information architecture with responsive layouts and purposeful animation. GSAP was used to introduce sections, guide attention, and create smoother transitions without compromising usability."
    },

    architecture: {
      frontend: "HTML · CSS · JavaScript . EmailJS",
      backend: "Not required",
      authentication: "Not required",
      database: "Not required"
    },

    features: [
      {
        number: "01",
        title: "Corporate Hero Experience",
        description:
          "A strong opening section introduces the company and establishes a professional visual identity with clear calls to action."
      },
      {
        number: "02",
        title: "Services Showcase",
        description:
          "Dedicated sections present the company's transportation and rental services in a structured format."
      },
      {
        number: "03",
        title: "Fleet Presentation",
        description:
          "The website showcases the available fleet and helps visitors understand the range of transportation options."
      },
      {
        number: "04",
        title: "Responsive Design",
        description:
          "Layouts, typography, navigation, imagery, and content sections adapt across desktop, tablet, and mobile screens."
      },
      {
        number: "05",
        title: "20+ GSAP Animations",
        description:
          "More than 20 animations and scroll interactions create visual rhythm and reveal content naturally."
      },
      {
        number: "06",
        title: "Inquiry Integration",
        description:
          "EmailJS allows visitors to submit inquiries directly through the website without a traditional backend form system."
      }
    ],

    engineering: {
      title: "Where design meets frontend engineering.",
      points: [
        {
          title: "Responsive Layouts",
          text:
            "Responsive CSS ensures content, navigation, imagery, and sections adapt cleanly across desktop, tablet, and mobile layouts."
        },
        {
          title: "Motion Design",
          text:
            "GSAP was used for more than 20 animations and scroll interactions, carefully timing reveals and transitions to support visual hierarchy."
        },
        {
          title: "Interactive Experience",
          text:
            "JavaScript supports interactive behavior and connects different parts of the experience beyond static HTML and CSS."
        },
        {
          title: "Form Integration",
          text:
            "EmailJS connects the frontend inquiry form with email delivery, providing a lightweight contact workflow."
        }
      ]
    },

    role: "Frontend Developer",

    roleTitle: {
      main: "Building the experience",
      accent: " from structure to motion."
    },

    roleDescription:
      "I was responsible for designing and developing the website's frontend experience, turning the company's content and requirements into a responsive, interactive, and professional web presence.",

    contributions: [
      "Designed and developed the responsive website structure",
      "Built major sections and content layouts",
      "Implemented the fleet and services presentation",
      "Created 20+ GSAP animations and scroll interactions",
      "Implemented responsive behavior across screen sizes",
      "Integrated EmailJS for customer inquiries",
      "Refined visual hierarchy and user experience"
    ],

    outcomeTitle: {
      main: "From a traditional business presence",
      accent: " to a modern digital experience."
    },

    outcome:
      "The completed website gives Margalla Travels a polished digital platform for presenting its services, fleet, company experience, and corporate positioning. The project strengthened my ability to combine frontend development with visual design, responsive thinking, and motion.",

    learnings: [
      "Learned to balance animation with usability and performance",
      "Improved understanding of responsive layout systems",
      "Gained deeper experience with GSAP and scroll interactions",
      "Learned to translate real business requirements into frontend decisions",
      "Strengthened visual hierarchy and content presentation skills"
    ],

    futureImprovements: [
      "Add a dedicated booking workflow",
      "Introduce a backend for managing inquiries and bookings",
      "Add vehicle availability and pricing management",
      "Improve image optimization and performance",
      "Add analytics to understand visitor behavior"
    ],

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "GSAP",
      "EmailJS"
    ],

    image: "/projects/coperate-website.png",

     live: "https://margallatravels.com.pk/",
    github: "https://github.com/sabakhurram/Margalla-Travels",
  },

  // =========================================================
  // 04 — QUIZPOP
  // =========================================================
  quizPop: {
    number: "04",
    category: "INTERACTIVE WEB PROJECT",
    title: "QuizPop",

    overviewTitle:
      "An interactive quiz experience built with vanilla JavaScript.",

    stack: "HTML · CSS · JavaScript",

    subtitle:
      "A browser-based trivia game featuring multiple categories, timed questions, progress tracking, answer feedback, and a playful visual identity.",

    overview:
      "QuizPop is an interactive quiz application designed to make trivia more engaging through game-like interactions and a clear user interface. Users can choose from six categories, answer timed multiple-choice questions, track their progress, and receive feedback throughout the quiz.",

    problem: {
      title: "A quiz needed to feel like an experience, not a form.",
      content:
        "A basic collection of multiple-choice questions can quickly become repetitive. The challenge was creating a quiz interface that kept users engaged while making the current question, timer, progress, and answer state easy to understand."
    },

    solution: {
      title: "A focused quiz flow with interactive feedback.",
      content:
        "I built a complete browser-based quiz experience using HTML, CSS, and JavaScript. The interface combines category selection, timed questions, progress tracking, answer handling, and feedback into a single interactive flow."
    },

    architecture: {
      frontend: "HTML · CSS · JavaScript",
      backend: "Not required",
      authentication: "Not required",
      database: "Not required"
    },

    features: [
      {
        number: "01",
        title: "Six Quiz Categories",
        description:
          "Users can choose from six trivia categories, giving each session a clear topic and variety."
      },
      {
        number: "02",
        title: "Timed Questions",
        description:
          "Each question includes a countdown timer that adds urgency and keeps the quiz moving."
      },
      {
        number: "03",
        title: "Progress Tracking",
        description:
          "A visible progress indicator helps users understand their position within the quiz."
      },
      {
        number: "04",
        title: "Interactive Answer States",
        description:
          "Answer selection provides immediate visual feedback and makes interaction states clear."
      },
      {
        number: "05",
        title: "Quiz Flow Management",
        description:
          "JavaScript controls category selection, question progression, answer handling, timer behavior, and quiz stages."
      },
      {
        number: "06",
        title: "Score & Results",
        description:
          "The application tracks performance and presents the final result after the quiz is completed."
      },
      {
        number: "07",
        title: "Playful Visual Identity",
        description:
          "A custom SVG mascot and playful interface details give the application a distinct personality."
      }
    ],

    engineering: {
      title: "Simple stack. Real interaction.",
      points: [
        {
          title: "JavaScript Logic",
          text:
            "JavaScript handles quiz state, question progression, answer selection, scoring, and transitions between different stages."
        },
        {
          title: "Timer Management",
          text:
            "The countdown system keeps each question time-bound and integrates the timer into the overall quiz flow."
        },
        {
          title: "Dynamic UI Updates",
          text:
            "Question content, progress information, answer states, and results update dynamically rather than relying on separate static pages."
        },
        {
          title: "Responsive Interface",
          text:
            "The interface adapts across screen sizes while keeping quiz content and controls easy to access."
        }
      ]
    },

    role: "Frontend Developer",

    roleTitle: {
      main: "Turning simple frontend technologies",
      accent: " into an interactive experience."
    },

    roleDescription:
      "I designed and developed the complete frontend experience, including category selection, question flow, timer, answer interactions, progress tracking, scoring, and visual presentation.",

    contributions: [
      "Built the complete quiz interface with HTML and CSS",
      "Implemented quiz logic using vanilla JavaScript",
      "Created the category selection flow",
      "Implemented timed questions and countdown behavior",
      "Built answer selection and feedback interactions",
      "Implemented progress tracking and score calculation",
      "Created and integrated the SVG mascot",
      "Optimized the interface for responsive layouts"
    ],

    outcomeTitle: {
      main: "From static questions",
      accent: " to a complete interactive game."
    },

    outcome:
      "QuizPop demonstrates how a simple technology stack can be used to create a complete interactive web experience. The project strengthened my understanding of JavaScript-driven UI behavior, state changes, timers, event handling, and designing interfaces around user interaction.",

    learnings: [
      "Strengthened JavaScript event handling skills",
      "Learned to manage multiple pieces of interactive UI state",
      "Improved understanding of timers and asynchronous browser behavior",
      "Learned to structure a multi-step user flow",
      "Improved responsive interactive interface design"
    ],

    futureImprovements: [
      "Add persistent high scores using a database",
      "Add difficulty levels for each category",
      "Introduce randomized question sets",
      "Add sound effects and additional game feedback",
      "Add a larger question library"
    ],

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "SVG"
    ],

    image: "/projects/quiz-pop.png",

    live: "#",
   github: "https://github.com/sabakhurram/QuizPop",
  }
};

export default projectDetails;