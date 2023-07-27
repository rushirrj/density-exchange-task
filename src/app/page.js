import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Openvacancies from "../components/Openvacancies";
import EQbeatsIQ from "../components/EQbeatsIQ";
import BeBestYou from "../components/BeBestYou";
import Test from "../components/Test";
import WorkWithUs from "../components/WorkWithUs";
import MeetAheadCard from "@/components/MeetAheadCard";
export default function Home() {
  return (
    <>
      <Navbar />
      <EQbeatsIQ />
      <MeetAheadCard/>
      <BeBestYou />
      <Test />
      <WorkWithUs />
      <Openvacancies />
      <Footer />
    </>
  );
}
