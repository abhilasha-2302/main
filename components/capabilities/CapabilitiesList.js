import Image from 'next/image';

export default function CapabilitiesList() {
  const capabilities = [
    {
      title: 'UVM-based Testbench Development',
      description: 'We develop comprehensive UVM testbenches for complex IPs and subsystems, following industry best practices and leveraging reusable verification components. Our approach ensures thorough verification coverage and early bug detection.',
      features: [
        'Reusable verification components',
        'Coverage-driven verification',
        'Constrained random testing',
        'Automated test generation',
        'Advanced scoreboarding and checking',
      ],
      icon: '/images/icons/uvm.svg',
    },
    {
      title: 'Functional and Assertion-based Verification',
      description: 'Our functional verification methodology combines traditional simulation-based techniques with powerful assertion-based approaches to verify design correctness under various scenarios.',
      features: [
        'SystemVerilog assertions',
        'Formal property checking',
        'Comprehensive test scenarios',
        'Protocol compliance validation',
        'Edge case detection',
      ],
      icon: '/images/icons/functional.svg',
    },
    {
      title: 'Formal Methods',
      description: 'We apply mathematical techniques to exhaustively verify design properties without relying on simulation test vectors, providing rigorous proofs of correctness for critical design aspects.',
      features: [
        'Property verification',
        'Equivalence checking',
        'Model checking',
        'Formal specification',
        'Exhaustive analysis',
      ],
      icon: '/images/icons/formal.svg',
    },
    {
      title: 'Low-power Validation (UPF/CPF)',
      description: 'Our power-aware verification ensures that low-power designs function correctly across all power states and transitions, using industry-standard UPF and CPF methodologies.',
      features: [
        'Power state verification',
        'Power domain crossing checks',
        'Retention verification',
        'Power-up/down sequence validation',
        'Power optimization analysis',
      ],
      icon: '/images/icons/low-power.svg',
    },
    {
      title: 'Performance Benchmarking',
      description: 'We conduct comprehensive performance analysis to evaluate and optimize your designs, ensuring they meet or exceed performance targets under various conditions.',
      features: [
        'Throughput analysis',
        'Latency measurement',
        'Resource utilization',
        'Bottleneck identification',
        'Performance optimization',
      ],
      icon: '/images/icons/performance.svg',
    },
    {
      title: 'High-speed Interface Verification',
      description: 'We specialize in verifying complex high-speed interfaces like PCIe, USB, DDR, and CXL, ensuring protocol compliance and interoperability.',
      features: [
        'Protocol compliance testing',
        'Interoperability verification',
        'Performance validation',
        'Stress testing',
        'Error injection and recovery',
      ],
      icon: '/images/icons/high-speed.svg',
    },
    {
      title: 'Compute Architecture Verification',
      description: 'Our expertise extends to verifying complex compute architectures including ARM, RISC-V, and DSPs, ensuring functional correctness and performance.',
      features: [
        'Instruction set verification',
        'Pipeline verification',
        'Memory subsystem validation',
        'Exception handling',
        'Performance analysis',
      ],
      icon: '/images/icons/compute.svg',
    },
    {
      title: 'Hybrid Co-verification and Emulation',
      description: 'We employ hybrid verification approaches combining simulation, emulation, and FPGA prototyping to accelerate verification of complex designs.',
      features: [
        'Hardware-accelerated verification',
        'Software-hardware co-verification',
        'System-level validation',
        'Real-world scenario testing',
        'Performance profiling',
      ],
      icon: '/images/icons/hybrid.svg',
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Capabilities
          </h1>
          <p className="mt-5 text-xl text-gray-500 max-w-3xl mx-auto">
            Comprehensive verification expertise to tackle your most complex challenges
          </p>
        </div>
        
        <div className="space-y-16">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              <div className="md:w-1/3">
                <div className="bg-green-100 p-8 rounded-full inline-block">
                  <div className="relative h-24 w-24">
                    <Image
                      src={capability.icon}
                      alt={capability.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {capability.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {capability.description}
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}