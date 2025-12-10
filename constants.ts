import { NavItem, CoreValue, DayItinerary } from './types';
import { Leaf, Heart, Utensils, Zap, Scale, Users } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Our Story', path: '/story' },
  { label: 'The Reset', path: '/reset' },
  { label: 'Partnership', path: '/partnership' },
  { label: 'Oracle', path: '/oracle' },
];

export const CORE_VALUES: CoreValue[] = [
  {
    greek: 'Eirene',
    english: 'Peace',
    description: 'Serenity as the foundation of health and prosperity.',
    icon: Leaf
  },
  {
    greek: 'Iaso',
    english: 'Healing',
    description: 'Gentle restoration through holistic practices.',
    icon: Heart
  },
  {
    greek: 'Ambrosia',
    english: 'Nourishment',
    description: 'Food as ritual, medicine, and joy.',
    icon: Utensils
  },
  {
    greek: 'Palingenesis',
    english: 'Renewal',
    description: 'Detox as rebirth into clarity and strength.',
    icon: Zap
  },
  {
    greek: 'Sophrosyne',
    english: 'Harmony',
    description: 'Balance in all aspects of living.',
    icon: Scale
  },
  {
    greek: 'Agape',
    english: 'Community',
    description: 'Connection and compassion as pathways to collective flourishing.',
    icon: Users
  },
];

export const ITINERARY: DayItinerary[] = [
  {
    day: "Day 1",
    theme: "Decompression & Release",
    items: [
      { time: "14:00", title: "Arrival & Eirene Elixir", description: "Welcome Drink (Adaptogenic herbal infusion)." },
      { time: "15:00", title: "Check-in", description: "Settling into specialized 'Sanctuary Suites' with aromatherapy." },
      { time: "16:30", title: "Opening Circle", description: "'The Art of Letting Go' – Guided Meditation & Intention Setting." },
      { time: "17:30", title: "Sunset Sound Bath", description: "A 60-minute immersive sound healing session using Tibetan bowls." },
      { time: "19:30", title: "Dinner: The Ambrosia Menu", description: "5-course plant-forward tasting menu focusing on gut health and sleep." }
    ]
  },
  {
    day: "Day 2",
    theme: "Vitality & Flourishing",
    items: [
      { time: "07:30", title: "Awakening Yoga", description: "Flow state movement on the terrace to awaken the lymphatic system." },
      { time: "09:00", title: "Functional Breakfast", description: "Buffet focusing on high-quality proteins and antioxidants." },
      { time: "11:00", title: "Workshop: Kitchen Medicine", description: "Learn to cook dishes that boost mental clarity using premium ingredients." },
      { time: "13:00", title: "Farewell Lunch", description: "Community dining experience celebrating nourishment." },
      { time: "15:00", title: "Departure", description: "Late check-out with a 'Prosperity Gift Set'." }
    ]
  }
];
