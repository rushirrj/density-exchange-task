import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Openvacancies from "../components/Openvacancies";
export default function Home() {
  return (
    <>
      <Navbar />
      <Openvacancies />
      <Footer/>
    </>
  );
}
