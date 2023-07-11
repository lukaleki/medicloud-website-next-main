import  Nav  from "../components/nav";
import  ClinicRegistration  from "../components/clinic-registration";
import  MedPartner  from "../components/med-partners";
import  WhatWeOffer  from "../components/whatWeOffer";
import  ClinicWeb  from "../components/clinic-web";
import  MobileApp  from "../components/mobile-app";
import  MedDelivery  from "../components/med-delivery";
import  Reporting  from "../components/reporting";
import  Foreign  from "../components/foreign-exp";
import  HardwareAI  from "../components/hardware-AI";
import  Questions  from "../components/questions";
import  Blog  from "../components/blog";
import  Footer  from "../components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <ClinicRegistration />
      <MedPartner />
      <WhatWeOffer />
      <ClinicWeb />
      <MobileApp />
      <MedDelivery />
      <Reporting />
      <Foreign />
      <HardwareAI />
      <Questions />
      <Blog />
      <Footer />
    </>
  )
}
