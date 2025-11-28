
export interface ProjectSpecs {
  label: string;
  value: string;
  isLink?: boolean; // Optional field to indicate if the value is a link
}

export interface ProjectDetails {
  year: string;
  location: string;
  specs: ProjectSpecs[]; // Array for the grid details (e.g. Total Area, Construction)
  description: string[];
}

export interface ResumeSection {
    heading?: string; // Optional for continued text on next page
    subheading?: string;
    date?: string;
    items?: string[]; // Bullet points or paragraphs
}

export interface SocialLink {
    label: string;
    url: string;
}

export interface PageContentProps {
  type: 'cover' | 'intro' | 'project-opener' | 'project-detail' | 'project-right' | 'end' | 'resume' | 'section-title' | 'contact' | 'project-index';
  title?: string;
  subtitle?: string;
  email?: string; // Added email field
  projectIndex?: string; // e.g. "0.2", "0.3"
  pageNumber?: string;
  details?: ProjectDetails;
  resumeSections?: ResumeSection[]; // For CV pages
  projectSections?: ResumeSection[]; // For Project Detail pages (Key Responsibilities/Achievements)
  imageSrc?: string;
  diagrams?: string[];
  description?: string[];
  socials?: SocialLink[];
}

export interface SheetData {
  id: number;
  front: PageContentProps;
  back: PageContentProps;
}
