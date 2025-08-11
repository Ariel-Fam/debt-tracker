import Link from "next/link";
import styles from "@/styles/modules/home.module.css"

export default function Page() {
  return (
    <div className="grid gap-6">
      <div className={styles.container}>
        <h1 className="text-3xl font-semibold mb-2">NebulaPay — Debt Tracker</h1>
        <p className="opacity-80">Access the app bellow</p>
        <div className="mt-4 flex gap-3 bg-white flex h-20 w-100 mb-10 ">

          <Link href={"/debt-tracker"}>


          <button className={styles.button}>Open App</button>
          
          </Link>
          
        </div>
      </div>
    </div>
  );
}
