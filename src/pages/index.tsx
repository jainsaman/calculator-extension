import styles from "../styles/index.module.scss";
import { Montserrat } from "next/font/google";
import { Header, PriceTable, MeasurementsTable } from "@/components/common";
import "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${styles.main} ${montserrat.className} border-slate-900`}>
      <Header />
      <div className="flex gap-x-5 w-full px-5 py-3">
        <PriceTable />
        <MeasurementsTable />
      </div>
    </main>
  );
}
