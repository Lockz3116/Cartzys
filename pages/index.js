import dynamic from "next/dynamic";
const CartzysPage = dynamic(() => import("../src/CartzysPage"), { ssr: false });

export default function Home() {
  return <CartzysPage />;
}
