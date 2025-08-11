"use client";
import React, { useEffect, useState } from "react";
import { DebtCard } from "@/lib/types";
import { loadCards, saveCards, totals, percent, randomColor, randomIcon, uid } from "@/lib/utils";
import SVGIcon from "@/components/SVGIcon";
import styles from "@/styles/modules/dashboard.module.css";
import cardStyles from "@/styles/modules/cards.module.css";
import formStyles from "@/styles/modules/form.module.css";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

export default function CSSModulesDash() {
  const [cards, setCards] = useState<DebtCard[]>([]);
  const [name, setName] = useState("");
  const [limit, setLimit] = useState("");
  const [owed, setOwed] = useState("");

  useEffect(() => { setCards(loadCards()); }, []);
  useEffect(() => { saveCards(cards); }, [cards]);

  function addCard(e: React.FormEvent) {
    e.preventDefault();
    const lim = Number(limit), ow = Number(owed);
    if (!name || !Number.isFinite(lim) || !Number.isFinite(ow)) return;
    setCards(prev => [{ id: uid(), name, limit: lim, owed: ow, icon: randomIcon(), color: randomColor() }, ...prev]);
    setName(""); setLimit(""); setOwed("");
  }

  const t = totals(cards);
  const dataOwed = cards.map((c) => ({ name: c.name, owed: c.owed }));
  const dataDistribution = cards.map((c) => ({ name: c.name, pct: +percent(c.owed, t.totalOwed).toFixed(2) }));
  const dataCompare = cards.map((c) => ({ name: c.name, limit: c.limit, owed: c.owed }));

  return (
    <div className={styles.container}>
      <div className={`${styles.panel} glow`}>
        <div className={styles.header}>
          <h2>Dashboard</h2>
          <span className={styles.badge}>Limit Utilization:  {t.utilization.toFixed(1)}%</span>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.panel}>
          <h3>Add Debt</h3>
          <form onSubmit={addCard} className={formStyles.form}>
            <label>
              <div>Debt Name</div>
              <input className={formStyles.input} value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Rewards Card" />
            </label>
            <div className={formStyles.row2}>
              <label>
                <div>Limit</div>
                <input className={formStyles.input} value={limit} onChange={(e) => setLimit(e.target.value)} placeholder="Enter Limit" />
              </label>
              <label>
                <div>Owed</div>
                <input className={formStyles.input} value={owed} onChange={(e) => setOwed(e.target.value)} placeholder="Enter Amount Owed" />
              </label>
            </div>
            <button className={formStyles.btn}>Add Card</button>
          </form>
        </div>

        <div className={styles.panel}>
          <h3>Cards</h3>
          <div className={cardStyles.grid}>
            {cards.map((c) => (
              <div key={c.id} className={cardStyles.card}>
                <div className={cardStyles.bubble} style={{ background: c.color }} />
                <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                  <SVGIcon type={c.icon} color={c.color} />
                  <div>
                    <div style={{ fontWeight: 600 }}>{c.name}</div>
                    <div className={cardStyles.meta}>Limit: ${c.limit.toLocaleString()} • Owed: ${c.owed.toLocaleString()}</div>
                  </div>
                </div>
                <div className={styles.progress} style={{ marginTop: ".75rem" }}>
                  <div style={{ height: "100%", width: `${Math.min((c.owed / Math.max(1, c.limit)) * 100, 100)}%`, background: c.color }} />
                </div>
                <button onClick={() => setCards(cards.filter((x) => x.id !== c.id))} style={{ marginTop: ".5rem", fontSize: ".75rem", opacity: .8, textDecoration: "underline" }}>Remove</button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.grid3}>
          <div className={styles.panel}>
            <h4>Owed per Card</h4>
            <div style={{ height: 256 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataOwed} >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
                  <Bar dataKey="owed" name="Owed" fill={randomColor()} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className={styles.panel}>
            <h4>Debt Distribution (%)</h4>
            <div style={{ height: 256 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataDistribution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
                  <Bar dataKey="pct" name="% of Total" fill="#3dbcd6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className={styles.panel}>
            <h4>Limit vs Owed</h4>
            <div style={{ height: 256 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataCompare}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
                  <Bar dataKey="limit" name="Limit" />
                  <Bar dataKey="owed" name="Owed" fill="#1133a8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 