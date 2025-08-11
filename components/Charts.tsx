"use client";
import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { DebtCard } from "@/lib/types";
import { totals, percent } from "@/lib/utils";

export default function Charts({ cards }: { cards: DebtCard[] }) {
  const t = totals(cards);

  const dataOwed = cards.map((c) => ({ name: c.name, owed: c.owed }));
  const dataDistribution = cards.map((c) => ({ name: c.name, pct: +percent(c.owed, t.totalOwed).toFixed(2) }));
  const dataCompare = cards.map((c) => ({ name: c.name, limit: c.limit, owed: c.owed }));

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <ChartCard title="Owed per Card">
        <BarWrap data={dataOwed} bars={[{ dataKey: "owed", label: "Owed" }]} />
      </ChartCard>
      <ChartCard title="Debt Distribution (%)">
        <BarWrap data={dataDistribution} bars={[{ dataKey: "pct", label: "% of Total" }]} />
      </ChartCard>
      <ChartCard title="Limit vs Owed">
        <BarWrap data={dataCompare} bars={[{ dataKey: "limit", label: "Limit" }, { dataKey: "owed", label: "Owed" }]} />
      </ChartCard>
    </div>
  );
}

function ChartCard({ title, children }: React.PropsWithChildren<{ title: string }>) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <h4 className="mb-2 font-semibold tracking-wide">{title}</h4>
      {children}
    </div>
  );
}

function BarWrap({ data, bars }: { data: any[]; bars: { dataKey: string; label: string }[] }) {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" hide={false} />
          <YAxis />
          <Tooltip />
          <Legend />
          {bars.map((b) => (
            <Bar key={b.dataKey} dataKey={b.dataKey} name={b.label} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}