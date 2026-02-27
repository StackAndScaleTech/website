export interface Experience {
  id: string;
  title: string;
  /** Icon name from the icon library (e.g. Lucide React) */
  icon: string;
  description: string;
}

export interface ExperienceCTA {
  heading: string;
  description: string;
  buttonText: string;
}

export interface ExperienceProps {
  experiences: Experience[];
  cta: ExperienceCTA;
  /** Called when the user clicks the CTA button */
  onContactClick?: () => void;
}
