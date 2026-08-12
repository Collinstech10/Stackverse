export type NavigationRoute = 
  | '/' 
  | '/products' 
  | '/collinstech' 
  | '/services' 
  | '/ventures' 
  | '/about' 
  | '/insights' 
  | '/contact';

export type ProductStatus = 'Coming Soon' | 'In Development' | 'Private Beta' | 'Research & Incubating';

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  status: ProductStatus;
  iconName: string;
  features: string[];
  techStack: string[];
  targetAudience: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Software Engineering' | 'Product Development' | 'AI & Automation' | 'Cybersecurity' | 'Cloud & Infrastructure';
  iconName: string;
  deliverables: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  technology: string[];
  description: string;
  solution: string;
  result: string;
  isDemoCaseStudy: boolean;
  imageBg: string;
}

export interface VentureStep {
  step: string;
  title: string;
  description: string;
  focus: string;
  status: 'Active' | 'In Progress' | 'Planned';
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  details: string[];
}

export interface InsightArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Technology' | 'AI' | 'Software Engineering' | 'Cybersecurity' | 'Startups' | 'Product Development' | 'Business';
  author: {
    name: string;
    role: string;
  };
  date: string;
  readTime: string;
  tags: string[];
  isSampleContent: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  inquiryType: 'collinstech' | 'stackverse';
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}
