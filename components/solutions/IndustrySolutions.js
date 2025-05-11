export default function IndustrySolutions() {
  const industries = [
    {
      title: 'Finance and Banking',
      description: 'Our AI/ML solutions for the finance and banking industry drive innovation and efficiency across various functions.',
      applications: [
        {
          title: 'Cross-border Payment Systems',
          details: 'AI-powered solutions that optimize cross-border transactions, reducing costs and settlement times while ensuring compliance with international regulations.',
        },
        {
          title: 'Fraud Prevention',
          details: 'Advanced machine learning algorithms that detect and prevent fraudulent activities in real-time, protecting both institutions and customers.',
        },
        {
          title: 'Smart Contracts',
          details: 'Automated contract verification and execution powered by AI, ensuring accuracy and compliance across all agreements.',
        },
        {
          title: 'Decentralized KYC',
          details: 'AI-driven Know Your Customer solutions that streamline customer onboarding while maintaining the highest security standards.',
        },
      ],
    },
    {
      title: 'Telecommunication',
      description: 'Transform telecommunications operations and customer experiences with our cutting-edge AI/ML technologies.',
      applications: [
        {
          title: 'Network Optimization',
          details: 'AI-driven solutions that dynamically optimize network resources, reduce latency, and improve overall service quality.',
        },
        {
          title: 'Chatbots',
          details: 'Intelligent virtual assistants that provide personalized customer support, reducing response times and improving satisfaction.',
        },
        {
          title: 'Predictive Maintenance',
          details: 'ML algorithms that predict equipment failures before they occur, minimizing downtime and maintenance costs.',
        },
      ],
    },
    {
      title: 'Agriculture',
      description: 'Revolutionize agricultural practices and increase productivity with our AI/ML-powered solutions.',
      applications: [
        {
          title: 'Precision Farming',
          details: 'AI systems that analyze soil conditions, weather patterns, and crop health to optimize farming practices and resource allocation.',
        },
        {
          title: 'Yield Prediction',
          details: 'Advanced ML models that accurately predict crop yields, enabling better planning and resource management.',
        },
        {
          title: 'Climate Resilience',
          details: 'AI-powered solutions that help farmers adapt to changing climate conditions and mitigate environmental risks.',
        },
      ],
    },
    {
      title: 'Insurance',
      description: 'Transform risk assessment, claims processing, and customer experiences in the insurance industry with our AI/ML solutions.',
      applications: [
        {
          title: 'Automated Underwriting',
          details: 'ML algorithms that accurately assess risk and determine appropriate premiums, streamlining the underwriting process.',
        },
        {
          title: 'Fraud Prevention',
          details: 'AI-powered systems that detect potentially fraudulent claims, reducing losses and improving efficiency.',
        },
        {
          title: 'Cloud Scalability',
          details: 'Elastic cloud infrastructure that scales with demand, ensuring optimal performance and cost efficiency.',
        },
      ],
    },
    {
      title: 'Healthcare',
      description: 'Enhance patient care, improve diagnostics, and optimize healthcare operations with our AI/ML technologies.',
      applications: [
        {
          title: 'Early Diagnosis',
          details: 'AI algorithms that analyze medical data to identify potential health issues before they become serious.',
        },
        {
          title: 'Personalized Treatment',
          details: 'ML-powered systems that recommend personalized treatment plans based on patient data and medical history.',
        },
        {
          title: 'Predictive Analytics',
          details: 'Advanced analytics that predict patient outcomes, helping healthcare providers make informed decisions.',
        },
      ],
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            AI/ML Solutions
          </h1>
          <p className="mt-5 text-xl text-gray-500 max-w-3xl mx-auto">
            Transforming industries with advanced artificial intelligence and machine learning
          </p>
        </div>
        
        <div className="mx-auto max-w-3xl mb-16">
          <p className="text-lg text-gray-600 mb-6">
            At Veripoint Technologies, we leverage cutting-edge AI and machine learning technologies to 
            develop innovative solutions that address the unique challenges of various industries. Our 
            team of experienced data scientists and industry experts work together to create custom 
            solutions that drive efficiency, improve decision-making, and create competitive advantages.
          </p>
          <p className="text-lg text-gray-600">
            Our AI/ML solutions are designed to be scalable, adaptable, and easily integrated into 
            existing systems, allowing organizations to quickly realize value from their data and 
            accelerate their digital transformation journey.
          </p>
        </div>
        
        <div className="space-y-16">
          {industries.map((industry, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {industry.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {industry.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {industry.applications.map((app, appIndex) => (
                  <div key={appIndex} className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {app.title}
                    </h3>
                    <p className="text-gray-600">
                      {app.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}