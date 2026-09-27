export interface JourneyItem {
  period: string;
  title: string;
  description: string;
  // Some milestones may not need a technology list.
  technologies?: string[];
}
