"use client";
import React from "react";
import { DebtCard } from "@/lib/types";
import SVGIcon from "./SVGIcon";

export default function CardList({ cards, onRemove }: { cards: DebtCard[]; onRemove: (id: string) => void }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((c) => (
        <div key={c.id} className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur">
          <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-20 blur-2xl" style={{ background: c.color }} />
          <div className="flex items-center gap-3">
            <SVGIcon type={c.icon} color={c.color} />
            <div className="flex-1">
              <h3 className="font-semibold tracking-wide">{c.name}</h3>
              <p className="text-xs opacity-70">Limit: ${c.limit.toLocaleString()} • Owed: ${c.owed.toLocaleString()}</p>
            </div>
          </div>
          <div className="mt-3 h-2 w-full rounded bg-slate-800">
            <div className="h-2 rounded" style={{ width: `${Math.min((c.owed / Math.max(1, c.limit)) * 100, 100)}%`, background: c.color }} />
          </div>
          <button onClick={() => onRemove(c.id)} className="mt-3 text-xs opacity-70 hover:opacity-100 underline">Remove</button>
        </div>
      ))}
    </div>
  );
}