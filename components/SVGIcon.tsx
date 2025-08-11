"use client";
import React from "react";
import { CardIcon } from "@/lib/types";

export default function SVGIcon({ type, color = "#60a5fa", size = 28 }: { type: CardIcon; color?: string; size?: number }) {
  switch (type) {
    case "rocket":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
          <path d="M32 6c8 6 12 16 10 26l6 6-10 2-2 10-6-6C16 44 6 40 6 32c0-3 1-6 2-8 6-8 18-16 24-18z" fill={color} opacity="0.9"/>
          <circle cx="34" cy="20" r="4" fill="#0f172a"/>
          <path d="M14 46c2 4 6 6 10 6" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round"/>
        </svg>
      );
    case "planet":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
          <circle cx="32" cy="32" r="14" fill={color} opacity="0.9"/>
          <ellipse cx="32" cy="34" rx="28" ry="8" fill="none" stroke={color} strokeWidth="3"/>
        </svg>
      );
    case "comet":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
          <circle cx="48" cy="16" r="6" fill={color}/>
          <path d="M8 40c10-12 20-20 34-26" stroke={color} strokeWidth="6" strokeLinecap="round" fill="none"/>
        </svg>
      );
    case "satellite":
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
          <rect x="26" y="26" width="12" height="12" rx="2" fill={color}/>
          <rect x="14" y="28" width="10" height="8" fill={color} opacity="0.6"/>
          <rect x="40" y="28" width="10" height="8" fill={color} opacity="0.6"/>
          <path d="M32 12v8M32 44v8" stroke={color} strokeWidth="3" strokeLinecap="round"/>
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
          <circle cx="28" cy="28" r="12" fill={color}/>
          <polygon points="40,40 60,44 44,60" fill={color} opacity="0.7"/>
        </svg>
      );
  }
}