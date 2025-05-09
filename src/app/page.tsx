import Navbar from "@/compnents/Navbar";
import Header from "@/compnents/Header";
import AboutUs from "@/compnents/AboutUS";
import Features from "@/compnents/Features";
import Benefits from "@/compnents/Benefits";
import WhoCanUse from "@/compnents/WhoCan";
import Guide from "@/compnents/Guide";
import Download from "@/compnents/Download";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <Features/>
      <Benefits/>
      <Guide/>
      <WhoCanUse/>
      <Download/>

    </div>
  );
}
