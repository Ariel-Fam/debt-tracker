import { DebtCard, CardIcon } from "./types";

export const iconPool: CardIcon[] = ["rocket", "planet", "comet", "satellite", "asteroid"];
const colors = ["#7dd3fc", "#a78bfa", "#f472b6", "#fb7185", "#fbbf24", "#34d399", "#60a5fa"]; // cyan, violet, pink, rose, amber, green, blue

export function randomIcon(): CardIcon {
  return iconPool[Math.floor(Math.random() * iconPool.length)];
}

export function randomColor(): string {
  return colors[Math.floor(Math.random() * colors.length)];
}

export function uid(): string {
  return Math.random().toString(36).slice(2, 10);
}

export function loadCards(): DebtCard[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem("debt-cards");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCards(cards: DebtCard[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem("debt-cards", JSON.stringify(cards));
}

export function totals(cards: DebtCard[]) {
  const totalLimit = cards.reduce((s, c) => s + c.limit, 0);
  const totalOwed = cards.reduce((s, c) => s + c.owed, 0);
  return { totalLimit, totalOwed, utilization: totalLimit ? (totalOwed / totalLimit) * 100 : 0 };
}

export function percent(n: number, d: number) {
  return d ? (n / d) * 100 : 0;
}