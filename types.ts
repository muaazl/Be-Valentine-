export enum AppScreen {
  WELCOME = 'WELCOME',
  DASHBOARD = 'DASHBOARD',
  GIFT_BOUQUET = 'GIFT_BOUQUET',
  GIFT_LETTER = 'GIFT_LETTER',
  GIFT_MUSIC = 'GIFT_MUSIC',
}

export interface FloatingHeartProps {
  id: number;
  left: string;
  delay: number;
  duration: number;
}