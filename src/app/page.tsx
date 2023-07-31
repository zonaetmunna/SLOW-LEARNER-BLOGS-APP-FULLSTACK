import { Inter } from "@next/font/google";
import MainBanner from "./_components/mainBanner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <MainBanner />
    </main>
  );
}
