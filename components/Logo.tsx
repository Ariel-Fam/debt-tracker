"use client";
import React from "react";

export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg width={size} height={size} viewBox="0 0 64 64" aria-label="NebulaPay Logo" role="img">
        <defs>
          <radialGradient id="g" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="60%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </radialGradient>
        </defs>
        <circle cx="32" cy="32" r="28" fill="url(#g)" />
        <path d="M8,36 C24,20 40,20 56,36" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <circle cx="20" cy="30" r="3" fill="#fff" />
        <circle cx="44" cy="28" r="2" fill="#fff" />
      </svg>
      <span className="text-xl font-semibold tracking-wide">NebulaPay</span>
    </div>
  );
}