import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface CoreValue {
  greek: string;
  english: string;
  description: string;
  icon?: LucideIcon;
}

export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
}

export interface DayItinerary {
  day: string;
  theme: string;
  items: ItineraryItem[];
}
