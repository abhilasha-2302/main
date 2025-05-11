import Head from 'next/head';
import Layout from '../components/layout/Layout';
import VideoHero from '../components/home/VideoHero';
import ServicesSection from '../components/home/ServicesSection';
import EcosystemPartners from '../components/home/EcosystemPartners';
import TechnologiesSection from '../components/home/TechnologiesSection';
import SupportCareers from '../components/home/SupportCareers';
import CallToAction from '../components/home/CallToAction';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Veripoint Technologies | Semiconductor Solutions</title>
        <meta name="description" content="Veripoint Technologies offers AI-based verification and semiconductor solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VideoHero />
      <ServicesSection />
      <EcosystemPartners />
      <TechnologiesSection />
      <SupportCareers />
      <CallToAction />
    </Layout>
  );
}