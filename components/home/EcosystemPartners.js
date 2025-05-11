import Image from 'next/image';

export default function EcosystemPartners() {
  const partners = [
    { name: 'Rambus', logo: '/images/partners/rambus.svg' },
    { name: 'Ericsson', logo: '/images/partners/ericsson.svg' },
    { name: 'Logic Fruit Technologies', logo: '/images/partners/logic-fruit.svg' },
    { name: 'ICICI Lombard', logo: '/images/partners/icici-lombard.svg' },
    { name: 'Policybazaar', logo: '/images/partners/policybazaar.svg' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Ecosystem Partners
        </h2>
        
        <div className="flex flex-wrap justify-between items-center">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="w-1/2 sm:w-1/3 md:w-1/5 p-4 flex justify-center"
            >
              <div className="relative h-12 w-32">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}