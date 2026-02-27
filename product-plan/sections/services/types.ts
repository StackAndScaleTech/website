/**
 * Service
 * Represents a service offering with name, description, target audience, and key outcomes.
 */
export interface Service {
  id: string;
  name: string;
  description: string;
  whoItIsFor: string;
  keyOutcomes: string[];
  expanded: boolean;
}

/**
 * ServicesProps
 * Props for the Services section component.
 */
export interface ServicesProps {
  /** Array of service offerings to display */
  services: Service[];

  /**
   * Called when a service card is toggled to expand or collapse.
   * @param serviceId - The ID of the service being toggled
   */
  onToggleService?: (serviceId: string) => void;
}
