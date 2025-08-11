export type CardIcon = "rocket" | "planet" | "comet" | "satellite" | "asteroid";

export interface DebtCard {
  id: string;
  name: string;
  limit: number;
  owed: number;
  icon: CardIcon;
  color: string; // accent color per card
}