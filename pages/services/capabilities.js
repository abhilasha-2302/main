import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import CapabilitiesList from '../../components/capabilities/CapabilitiesList';
import CallToAction from '../../components/home/CallToAction';

export default function CapabilitiesPage() {
  return (
    <Layout>
      <Head>
        <title>Verification Capabilities | Veripoint Technologies</title>
        <meta name="description" content="Detailed capabilities and expertise in semiconductor verification" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CapabilitiesList />
      <CallToAction />
    </Layout>
  );
}