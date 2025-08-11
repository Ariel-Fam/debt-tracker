"use client";
import React, { useState } from "react";
import { DebtCard } from "@/lib/types";
import { randomIcon, randomColor, uid } from "@/lib/utils";

export default function CardForm({ onAdd }: { onAdd: (c: DebtCard) => void }) {
  const [name, setName] = useState("");
  const [limit, setLimit] = useState<string>("");
  const [owed, setOwed] = useState<string>("");

  function reset() {
    setName("");
    setLimit("");
    setOwed("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lim = Number(limit);
    const ow = Number(owed);
    if (!name || !Number.isFinite(lim) || !Number.isFinite(ow)) return;

    onAdd({ id: uid(), name, limit: lim, owed: ow, icon: randomIcon(), color: randomColor() });
    reset();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col">
        <label className="text-sm opacity-80">Card Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Sapphire Preferred" className="px-3 py-2 rounded-md bg-slate-900/60 border border-slate-700 outline-none focus:ring-2 focus:ring-cyan-400" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col">
          <label className="text-sm opacity-80">Limit</label>
          <input value={limit} onChange={(e) => setLimit(e.target.value)} inputMode="decimal" placeholder="5000" className="px-3 py-2 rounded-md bg-slate-900/60 border border-slate-700 outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm opacity-80">Owed</label>
          <input value={owed} onChange={(e) => setOwed(e.target.value)} inputMode="decimal" placeholder="1200" className="px-3 py-2 rounded-md bg-slate-900/60 border border-slate-700 outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>
      </div>
      <button className="mt-1 rounded-xl px-4 py-2 bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-900 font-semibold shadow hover:opacity-90 active:opacity-80">Add Card</button>
    </form>
  );
}