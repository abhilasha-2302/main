import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import ServiceIntro from '../../components/services/ServiceIntro';



export default function ServicesPage() {
  return (
    <Layout>
      <Head>
        <title>Verification Services | Veripoint Technologies</title>
        <meta name="description" content="Comprehensive verification services for semiconductor and beyond" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ServiceIntro />

     
    </Layout>
  );
}