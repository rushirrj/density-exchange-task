import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Openvacancies from "../components/Openvacancies";
import EQbeatsIQ from "../components/EQbeatsIQ";
import BeBestYou from "../components/BeBestYou";
import Test from "../components/Test";
import WorkWithUs from "../components/WorkWithUs";
import MeetAheadCard from "@/components/MeetAheadCard";
import DoesThisSoundFamiliar from "../components/DoesThisSoundFamiliar";
export default function Home() {
  return (
    <>
      <Navbar />
      <EQbeatsIQ />
      <DoesThisSoundFamiliar />
      <MeetAheadCard/>
      <BeBestYou />
      <Test />
      <WorkWithUs />
      <Openvacancies />
      <Footer />
    </>
  );
}
