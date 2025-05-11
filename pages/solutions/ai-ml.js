import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import IndustrySolutions from '../../components/solutions/IndustrySolutions';
import CallToAction from '../../components/home/CallToAction';

export default function AiMlSolutionsPage() {
  return (
    <Layout>
      <Head>
        <title>AI/ML Solutions | Veripoint Technologies</title>
        <meta name="description" content="Industry-specific AI and ML solutions for various sectors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndustrySolutions />
      <CallToAction />
    </Layout>
  );
}