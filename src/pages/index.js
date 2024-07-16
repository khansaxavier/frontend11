import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <>
  <h1 className="text-3xl">Home page</h1>
  <Navbar/>
  </>
  );
}
