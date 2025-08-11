import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/space-bg.css";
import Logo from "@/components/Logo";
import Image from "next/image";
import styles from "@/styles/modules/footer.module.css"



export const metadata: Metadata = {
  title: "NebulaPay — Debt Tracker",
  description: "Track credit card debt in a cosmic, modern UI (Tailwind + CSS Modules)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="starfield"></div>
        <div className="nebula"></div>
        <header className="sticky top-0 z-20 backdrop-blur bg-slate-950/40 border-b border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3"><Logo size={28} /><span className="opacity-70">Debt Tracker</span></div>
            <nav className="flex items-center gap-4 text-sm">
              <a className="underline-offset-4 hover:underline" href="/">Home</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

        <div className={styles.container}>

        <footer className="mt-12 pb-8 text-center text-xs opacity-60">© {new Date().getFullYear()} NebulaPay</footer>
          
        

        <Image 
        src={"/softwareLogo.png"}
        width={100}
        height={50}
        alt=""
        />

        </div>

      </body>
    </html>
  );
}
