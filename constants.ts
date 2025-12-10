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
    description: 'More than mere silence, Eirene is the active cultivation of inner stillness. It is the sanctuary where the restless mind settles and the nervous system exhales, allowing the body’s innate intelligence to begin its profound work of repair.',
    icon: Leaf
  },
  {
    greek: 'Iaso',
    english: 'Healing',
    description: 'Named for the goddess of recuperation, this pillar embodies the art of gentle restoration. We believe true healing is not forced, but unveiled—nurtured through rest, connection with nature, and soft, intentional therapies.',
    icon: Heart
  },
  {
    greek: 'Ambrosia',
    english: 'Nourishment',
    description: 'In myth, it conferred immortality. For us, it represents the wisdom of high-vibrational sustenance. We treat every meal as a sacred ritual, transforming biological necessity into a source of radiant energy and joy.',
    icon: Utensils
  },
  {
    greek: 'Palingenesis',
    english: 'Renewal',
    description: 'The ancient concept of rebirth. We guide you through the shedding of old layers—stress, toxins, and fatigue—to emerge revitalized, with a clarity of purpose and vitality that feels like a new life beginning.',
    icon: Zap
  },
  {
    greek: 'Sophrosyne',
    english: 'Harmony',
    description: 'The elegant balance between enjoyment and discipline. It is a soundness of mind that allows one to navigate the modern world with grace, moderation, and deep alignment between one’s values and actions.',
    icon: Scale
  },
  {
    greek: 'Agape',
    english: 'Community',
    description: 'The highest form of love—selfless and universal. We foster a space where genuine connection becomes the antidote to modern isolation, reminding us that we flourish best when we flourish together.',
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