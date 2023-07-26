import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Openvacancies from "../components/Openvacancies";
import EQbeatsIQ from "../components/EQbeatsIQ";
import BeBestYou from "../components/BeBestYou";
import Test from "../components/Test";
import WorkWithUs from "../components/WorkWithUs";
export default function Home() {
  return (
    <>
      <Navbar />
      <EQbeatsIQ />
      <BeBestYou />
      <Test />
      <WorkWithUs />
      <Openvacancies />
      <Footer />
    </>
  );
}
