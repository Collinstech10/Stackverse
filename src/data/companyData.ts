import { ProductItem, ServiceItem, ProjectItem, VentureStep, ProcessStep, InsightArticle, FAQItem } from '../types';

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'sme-os',
    name: 'SME Operating System',
    category: 'Business SaaS',
    description: 'A unified platform designed to help small and medium-sized businesses manage operations, customers, finances and growth.',
    longDescription: 'StackVerse SME OS provides a single-pane digital interface for core SME business functions. Built with micro-frontend architecture, modular workflow engines, and localized invoicing standards.',
    status: 'Coming Soon',
    iconName: 'LayoutGrid',
    features: ['Operational Dashboards', 'Customer Management (CRM)', 'Integrated Billing & Invoicing', 'Inventory Tracking'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    targetAudience: 'Growing SMEs, regional enterprises, and multi-branch service businesses'
  },
  {
    id: 'ai-engine',
    name: 'StackVerse Core AI Engine',
    category: 'AI Platform',
    description: 'Enterprise API gateway and orchestration layer for multi-llm routing, document parsing, and automated workflow intelligence.',
    longDescription: 'An infrastructure platform enabling companies to route, evaluate, and deploy domain-specific LLM workflows with fallback guarantees, semantic caching, and strict data privacy controls.',
    status: 'In Development',
    iconName: 'Cpu',
    features: ['Multi-LLM Routing', 'Semantic Vector Search', 'Enterprise Security Controls', 'Cost & Latency Optimizer'],
    techStack: ['Python', 'TypeScript', 'FastAPI', 'VectorDB', 'Kubernetes'],
    targetAudience: 'Software engineering teams, enterprise IT, and digital product builders'
  },
  {
    id: 'cloud-forge',
    name: 'CloudForge DevOps Suite',
    category: 'Developer Tools',
    description: 'Automated CI/CD and multi-cloud deployment orchestrator for fast-growing technology startups.',
    longDescription: 'CloudForge streamlines container deployment, serverless scaling, secret management, and infrastructure-as-code state verification without complex YAML maintenance.',
    status: 'In Development',
    iconName: 'CloudLightning',
    features: ['Zero-Downtime Deployments', 'Automated Health Monitoring', 'Environment Drift Detection', 'Infrastructure Blueprints'],
    techStack: ['Go', 'Terraform', 'Docker', 'AWS/GCP APIs', 'React'],
    targetAudience: 'DevOps engineers, CTOs, and agile development studios'
  },
  {
    id: 'enterprise-shield',
    name: 'ShieldGuard Cybersecurity',
    category: 'Cybersecurity SaaS',
    description: 'Continuous web application security scanner, API vulnerability monitoring, and compliance automated auditing tool.',
    longDescription: 'ShieldGuard performs continuous automated penetration checks against web applications and REST/GraphQL APIs, surfacing actionable developer-friendly patches.',
    status: 'Private Beta',
    iconName: 'ShieldCheck',
    features: ['API Security Auditing', 'OWASP Top 10 Active Scanning', 'Dependency Risk Tracker', 'Real-time Threat Alerts'],
    techStack: ['Rust', 'Node.js', 'Elasticsearch', 'WebSockets', 'Tailwind'],
    targetAudience: 'Security leads, compliance officers, and SaaS engineering teams'
  },
  {
    id: 'venture-hub',
    name: 'Venture Studio Platform',
    category: 'Venture Operating Platform',
    description: 'Internal venture orchestration platform for rapid ideation, market validation, MVP prototyping, and launch execution.',
    longDescription: 'The core operational engine powering StackVerse ventures, unifying founder talent, code repositories, market data, and growth analytics.',
    status: 'Research & Incubating',
    iconName: 'Rocket',
    features: ['Idea Evaluation Matrix', 'Rapid Prototyping Blueprints', 'Shared Tech Infrastructure', 'Go-To-Market Analytics'],
    techStack: ['Next.js', 'GraphQL', 'Prisma', 'Tailwind CSS'],
    targetAudience: 'StackVerse internal product teams, venture partners, and co-founders'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    shortDesc: 'Modern, fast and scalable websites and web applications built with cutting-edge frontend and backend architectures.',
    fullDesc: 'We design and engineer high-performance web applications using modern component-driven frameworks, serverless APIs, and responsive design systems optimized for speed, accessibility, and conversion.',
    category: 'Software Engineering',
    iconName: 'Globe',
    deliverables: ['Custom Web Applications', 'Single Page Applications (SPAs)', 'Progressive Web Apps (PWAs)', 'Performance Optimization', 'Headless CMS Integration'],
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'Node.js']
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    shortDesc: 'Production-ready mobile applications for iOS and Android built for seamless user experience and high reliability.',
    fullDesc: 'From intuitive native experiences to cross-platform mobile products, CollinsTech delivers mobile apps with offline capability, push notifications, secure local storage, and smooth native feel.',
    category: 'Product Development',
    iconName: 'Smartphone',
    deliverables: ['Cross-Platform Apps (React Native / Flutter)', 'iOS & Android Native Integration', 'Offline-First Architectures', 'App Store & Play Store Publishing', 'Biometric Security & Push Sync'],
    techStack: ['React Native', 'TypeScript', 'Flutter', 'iOS / Android SDKs', 'Firebase / REST APIs']
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    shortDesc: 'Tailored business software systems engineered around your specific operational workflows and enterprise data needs.',
    fullDesc: 'When off-the-shelf software falls short, CollinsTech builds bespoke business systems — internal portals, workflow engines, ERP extensions, and automated operational dashboards.',
    category: 'Software Engineering',
    iconName: 'Code2',
    deliverables: ['Internal Business Portals', 'Automated Workflow Engines', 'Legacy System Modernization', 'Multi-tenant Enterprise Software', 'Custom Reporting & BI Dashboards'],
    techStack: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'Redis']
  },
  {
    id: 'saas-dev',
    title: 'SaaS Development',
    shortDesc: 'End-to-end SaaS engineering — multi-tenancy, subscription billing, onboarding flows, and scalable cloud backends.',
    fullDesc: 'We turn software ideas into commercially viable SaaS products with robust multi-tenant data isolation, self-serve onboarding, payment gateway integration, and telemetry.',
    category: 'Product Development',
    iconName: 'Layers',
    deliverables: ['Multi-Tenant Architecture', 'Stripe / Payment Gateway Integration', 'Role-Based Access Control (RBAC)', 'Subscription & Metered Billing', 'Analytics & Admin Portals'],
    techStack: ['React', 'Node.js', 'PostgreSQL / Firestore', 'Stripe API', 'Docker']
  },
  {
    id: 'api-backend',
    title: 'Cloud & Backend Development',
    shortDesc: 'Robust APIs, microservices, databases, authentication, and secure cloud infrastructure.',
    fullDesc: 'Architect resilient server-side foundations. We design RESTful and GraphQL APIs, high-throughput microservices, database schemas, serverless functions, and CI/CD pipelines.',
    category: 'Cloud & Infrastructure',
    iconName: 'Server',
    deliverables: ['RESTful & GraphQL API Design', 'Microservices Architecture', 'Database Optimization & Schema Design', 'OAuth2 & JWT Auth Systems', 'Cloud Migration & Infrastructure'],
    techStack: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'Docker', 'AWS / GCP / Cloud Run']
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Integrations',
    shortDesc: 'AI-powered applications, document intelligence, intelligent chatbots, automated workflows, and LLM integrations.',
    fullDesc: 'Integrate artificial intelligence directly into your core business applications. We build smart search, automated document extraction, conversational assistants, and predictive automation.',
    category: 'AI & Automation',
    iconName: 'Sparkles',
    deliverables: ['Gemini / OpenAI API Integrations', 'RAG (Retrieval-Augmented Generation)', 'Document Parsing & Extraction', 'Custom AI Chat Assistants', 'Automated Decision Pipelines'],
    techStack: ['Python', 'TypeScript', '@google/genai SDK', 'Vector Databases', 'LangChain / LlamaIndex']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    shortDesc: 'Security-focused engineering, application protection, security audits, and code vulnerability testing.',
    fullDesc: 'Security isn\'t an afterthought at CollinsTech. We conduct application threat modeling, vulnerability assessments, secure code reviews, and implement OWASP security best practices.',
    category: 'Cybersecurity',
    iconName: 'Shield',
    deliverables: ['Web & API Security Audits', 'OWASP Top 10 Mitigation', 'Penetration Testing Reports', 'Data Encryption Standards', 'Compliance Architecture (GDPR / ISO)'],
    techStack: ['Security Scanners', 'OAuth 2.0 / OIDC', 'TLS / HTTPS Hardening', 'Audit Logging Systems']
  },
  {
    id: 'automation',
    title: 'Business Automation',
    shortDesc: 'Eliminate manual repetitive processes through custom webhook integrations, automated reporting, and smart workflows.',
    fullDesc: 'Connect disparate software systems together. We build automated data pipelines, cross-application synchronization, transactional email/SMS flows, and background processing task queues.',
    category: 'AI & Automation',
    iconName: 'Bot',
    deliverables: ['System-to-System Webhooks', 'Automated Report Generation', 'Task Queue & Background Processors', 'Third-Party API Connectors', 'Workflow Analytics'],
    techStack: ['Node.js', 'Redis Queue / BullMQ', 'Zapier Custom Apps', 'Python Automation Scripts']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Development',
    shortDesc: 'Intuitive product design, interactive prototypes, design systems, and responsive user experience engineering.',
    fullDesc: 'We build digital products that look exceptional and feel natural to use. We craft cohesive design systems, interactive wireframes, and pixel-perfect responsive interfaces.',
    category: 'Product Development',
    iconName: 'Palette',
    deliverables: ['User Interface & Visual Design', 'Interactive Figma Prototypes', 'Design Systems & Component Libraries', 'User Journey Mapping', 'Usability Testing'],
    techStack: ['Figma', 'Tailwind CSS', 'Framer Motion', 'Radix UI', 'Design Systems']
  }
];

export const PORTFOLIO_DATA: ProjectItem[] = [
  {
    id: 'case-study-1',
    title: 'Enterprise Fintech Core Gateway',
    category: 'Custom Software & Security',
    technology: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    description: 'A benchmark high-reliability financial transaction processing platform built to demonstrate high concurrency and bank-grade security protocols.',
    solution: 'Designed microservice backend architecture with tokenized payload encryption, real-time transaction logging, and automated compliance tracking.',
    result: 'Sub-100ms API response latency with 99.99% architecture uptime under benchmark stress testing.',
    isDemoCaseStudy: true,
    imageBg: 'from-blue-900/40 via-indigo-900/30 to-slate-900'
  },
  {
    id: 'case-study-2',
    title: 'SME Operations & Billing Suite',
    category: 'SaaS Development',
    technology: ['TypeScript', 'Express', 'React', 'Tailwind CSS', 'PostgreSQL'],
    description: 'A modular multi-tenant business portal engineered to streamline customer management, inventory, and automated invoicing.',
    solution: 'Implemented dynamic schema isolation, role-based access management, and automated PDF invoice generation with payment gateway webhooks.',
    result: 'Demonstrates 75% reduction in manual operational tracking time during automated benchmark simulations.',
    isDemoCaseStudy: true,
    imageBg: 'from-violet-900/40 via-purple-900/30 to-slate-900'
  },
  {
    id: 'case-study-3',
    title: 'AI Document Intelligence Pipeline',
    category: 'AI Solutions & Automation',
    technology: ['Python', 'TypeScript', '@google/genai', 'Vector Database', 'FastAPI'],
    description: 'An automated document processing system capable of extracting structured JSON data from complex multi-page PDF documents.',
    solution: 'Engineered a multi-stage LLM document parsing pipeline with semantic validation and audit logging.',
    result: 'Processes complex multi-page contracts in under 4 seconds with over 98% field extraction precision.',
    isDemoCaseStudy: true,
    imageBg: 'from-cyan-900/40 via-blue-900/30 to-slate-900'
  },
  {
    id: 'case-study-4',
    title: 'Healthcare Patient Portal Mobile App',
    category: 'Mobile App Development',
    technology: ['React Native', 'TypeScript', 'Node.js', 'Encrypted SQLite'],
    description: 'A mobile application framework for secure patient appointment scheduling, telemedicine video links, and encrypted health records.',
    solution: 'Built offline-first state synchronization, biometric login integration, and end-to-end data encryption.',
    result: 'Zero data leakage risk model with seamless offline access to critical medical history.',
    isDemoCaseStudy: true,
    imageBg: 'from-emerald-900/40 via-teal-900/30 to-slate-900'
  }
];

export const VENTURE_STEPS: VentureStep[] = [
  {
    step: '01',
    title: 'Research',
    description: 'Identifying high-friction market inefficiencies, technology gaps, and emerging software product opportunities.',
    focus: 'Market analysis, technology feasibility, founder discovery',
    status: 'Active'
  },
  {
    step: '02',
    title: 'Prototyping',
    description: 'Building functional low-latency proof-of-concept software engines and validating core user mechanics.',
    focus: 'Rapid MVP code generation, architecture benchmarks',
    status: 'Active'
  },
  {
    step: '03',
    title: 'Product Development',
    description: 'Engineering production-grade SaaS platforms, mobile applications, and AI integrations using StackVerse core infrastructure.',
    focus: 'Full-stack engineering, security, multi-tenant isolation',
    status: 'In Progress'
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Deploying software to early adopters, gathering telemetry data, and refining core product experience.',
    focus: 'Beta user onboarding, operational telemetry, feedback loops',
    status: 'Planned'
  },
  {
    step: '05',
    title: 'Scale',
    description: 'Transitioning validated products into standalone scalable technology ventures with dedicated leadership.',
    focus: 'Capitalization, team scaling, international expansion',
    status: 'Planned'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    summary: 'Understand the business goals, technical constraints, and key success metrics.',
    details: [
      'Comprehensive product discovery workshop',
      'Technical architecture scoping & feasibility',
      'Requirement documentation & user persona mapping',
      'Clear project milestone timeline & transparent quote'
    ]
  },
  {
    number: '02',
    title: 'Design',
    summary: 'Design the product experience, user interface, and system architecture.',
    details: [
      'Interactive Figma prototypes & visual wireframes',
      'Database schema & API contract specification',
      'Design system creation for visual brand consistency',
      'Client feedback iteration & design sign-off'
    ]
  },
  {
    number: '03',
    title: 'Build',
    summary: 'Develop the product using modern, type-safe, and clean code standards.',
    details: [
      'Modular TypeScript component development',
      'Secure backend API & database implementation',
      'Bi-weekly client sprint reviews & live staging preview',
      'Automated linting, type-checking, and unit testing'
    ]
  },
  {
    number: '04',
    title: 'Test',
    summary: 'Rigorous security, performance, accessibility, and quality testing.',
    details: [
      'OWASP web application security scanning',
      'Cross-browser & multi-device responsive testing',
      'Database load benchmarking & latency tuning',
      'User acceptance testing (UAT) sign-off'
    ]
  },
  {
    number: '05',
    title: 'Launch',
    summary: 'Deploy the product safely to production cloud infrastructure.',
    details: [
      'Zero-downtime production deployment',
      'SSL/TLS certificate setup & domain configuration',
      'Application error monitoring & analytics telemetry',
      'Source code handover & technical documentation'
    ]
  },
  {
    number: '06',
    title: 'Scale',
    summary: 'Ongoing maintenance, feature improvements, and proactive monitoring.',
    details: [
      'SLA-backed technical support & maintenance',
      'Performance tuning & database query optimization',
      'Iterative new feature development based on user feedback',
      'Security patch updates & dependency audits'
    ]
  }
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: 'art-1',
    title: 'Building Type-Safe Enterprise Applications in 2026',
    excerpt: 'How modern TypeScript, end-to-end type sharing, and strict compiler boundaries eliminate runtime errors in large-scale software systems.',
    content: `Modern software development demands both rapid execution and uncompromising reliability. As applications grow in complexity, dynamic typing often introduces subtle runtime bugs that cost engineering teams hundreds of hours.

### Why Type Safety Matters at Scale
Type safety is no longer just a developer preference — it is a strategic business safeguard. By leveraging strict TypeScript compiler options, automated API contract generation, and immutable schema definitions, engineering teams achieve:

1. **Zero Runtime Type Coercion Bugs**: Catching mismatches during build time rather than in production.
2. **Refactoring Confidence**: Altering data models across frontend and backend in seconds with immediate compiler feedback.
3. **Self-Documenting Codebases**: Onboarding engineers faster through precise interface declarations.

### Architecture Patterns for 2026
At CollinsTech, every codebase follows strict layered boundary validation. Incoming client payloads pass through runtime schema validation (like Zod) before reaching backend handlers, ensuring that domain logic operates purely on verified, typed data contracts.`,
    category: 'Software Engineering',
    author: {
      name: 'CollinsTech Engineering Team',
      role: 'Software Architecture Practice'
    },
    date: 'August 2026',
    readTime: '5 min read',
    tags: ['TypeScript', 'Architecture', 'Clean Code', 'Node.js'],
    isSampleContent: true
  },
  {
    id: 'art-2',
    title: 'Pragmatic AI Integration: Beyond the Chatbot Hype',
    excerpt: 'A blueprint for integrating Large Language Models and document intelligence into core business software without sacrificing security or performance.',
    content: `Artificial intelligence is transforming software engineering, but many enterprises struggle to move past novelty chat interfaces toward genuine operational value.

### The Real Power: Workflow Intelligence
The true value of AI lies in background automation — parsing unorganized PDFs into validated database records, routing customer tickets dynamically based on intent, and performing semantic search across thousands of internal documents.

### Key Implementation Principles
- **Privacy First**: Never expose customer confidential data to public model training loops.
- **Graceful Fallbacks**: Always design standard deterministic code fallbacks when model confidence falls below strict thresholds.
- **Structured Outputs**: Require strict JSON schema enforcement for all LLM completions.`,
    category: 'AI',
    author: {
      name: 'StackVerse AI Research Group',
      role: 'AI & Automation Division'
    },
    date: 'August 2026',
    readTime: '6 min read',
    tags: ['AI Integrations', 'Gemini API', 'LLM Architecture', 'Automation'],
    isSampleContent: true
  },
  {
    id: 'art-3',
    title: 'Cybersecurity by Default: Protecting Web APIs Against OWASP Threats',
    excerpt: 'Essential security measures every tech company must implement before shipping APIs to production in modern cloud environments.',
    content: `In an era of automated vulnerability scanners and distributed bot networks, launching an API without layered defense is a significant risk.

### Core Security Checkpoints
1. **Rate Limiting & Throttling**: Protecting endpoints from credential stuffing and denial of service.
2. **Token Security**: Storing authentication tokens in httpOnly, Secure, SameSite cookies rather than browser localStorage.
3. **Input Sanitization & Parameterization**: Preventing SQL injection and Cross-Site Scripting (XSS) at the API boundary.
4. **Audit Logging**: Maintaining tamper-evident event logs for all administrative and data-altering transactions.`,
    category: 'Cybersecurity',
    author: {
      name: 'CollinsTech Security Unit',
      role: 'Cybersecurity & Auditing'
    },
    date: 'July 2026',
    readTime: '4 min read',
    tags: ['Cybersecurity', 'API Security', 'OWASP', 'Cloud Security'],
    isSampleContent: true
  },
  {
    id: 'art-4',
    title: 'From Idea to Production: The Startup Studio Venture Model',
    excerpt: 'How StackVerse evaluates product opportunities, builds low-latency MVPs, and scales technology ventures with disciplined software engineering.',
    content: `Building software ventures requires a balance between speed and architectural integrity. The traditional approach often pits fast, hacky prototypes against slow, over-engineered enterprise projects.

### The StackVerse Venture Lifecycle
By combining modular code templates, pre-tested auth and billing components, and CollinsTech engineering capabilities, StackVerse reduces time-to-market for new SaaS platforms while maintaining production-grade standards from Day 1.`,
    category: 'Startups',
    author: {
      name: 'StackVerse Venture Team',
      role: 'Product & Ventures'
    },
    date: 'July 2026',
    readTime: '5 min read',
    tags: ['Venture Studio', 'Startups', 'Product Management', 'SaaS'],
    isSampleContent: true
  }
];

export const COLLINSTECH_FAQS: FAQItem[] = [
  {
    category: 'General',
    question: 'What is the relationship between CollinsTech and StackVerse?',
    answer: 'StackVerse is the parent technology company focused on building digital products, SaaS platforms, and technology ventures. CollinsTech is the specialized software engineering and digital solutions division of StackVerse, providing client services, custom software, web/mobile development, AI integrations, and cloud solutions.'
  },
  {
    category: 'Engagement',
    question: 'How do we get started on a software project with CollinsTech?',
    answer: 'You can click "Start a Project" anywhere on the website or fill out our Contact form. We begin with a discovery session to understand your business goals, scope out the technical requirements, and provide a transparent project breakdown and timeline.'
  },
  {
    category: 'Technology',
    question: 'What tech stack does CollinsTech specialize in?',
    answer: 'We build primarily with modern, robust technologies including TypeScript, React, Next.js, Node.js, Python, Express, React Native, PostgreSQL, Docker, AWS, Google Cloud, and AI frameworks like Google GenAI (@google/genai SDK).'
  },
  {
    category: 'Quality & IP',
    question: 'Who owns the intellectual property and source code of the project?',
    answer: 'You do. Upon project completion and final milestone release, 100% of the custom source code, documentation, designs, and intellectual property rights belong exclusively to your business.'
  },
  {
    category: 'Support',
    question: 'Do you offer post-launch support and maintenance?',
    answer: 'Yes. CollinsTech provides post-launch support packages, including server monitoring, security patch updates, feature enhancements, and SLA-backed bug fix guarantees.'
  }
];
