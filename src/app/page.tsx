import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Counter from "@/components/main/Counter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className={styles.main}></main>;
}
