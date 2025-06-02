import React from 'react';
import { CheckCircle, Cpu, Shield, Zap, Award, ArrowRight, Globe, Users, Clock, Target } from 'lucide-react';

export default function VerificationServicesPage() {
  const protocols = [
    'PCIe', 'CXL', 'UCIe', 'USB', 'LPDDR', 'Ethernet', 'NVMe', 'HDMI', 'DisplayPort', 'MIPI DSI/CSI'
  ];

  const keyTechnologies = [
    {
      category: 'High-Speed & Emerging Protocols',
      items: ['PCIe', 'CXL', 'UCIe', 'NVMe', 'Ethernet', 'USB']
    },
    {
      category: 'Memory & Storage',
      items: ['LPDDR', 'DDRx', 'SRAM', 'Flash', 'eMMC', 'NAND/NOR']
    },
    {
      category: 'Display & Multimedia',
      items: ['HDMI', 'DisplayPort', 'MIPI DSI/CSI', 'Audio/Video codec validation']
    },
    {
      category: 'Tools & Methodologies',
      items: ['System Verilog', 'UVM', 'SVA', 'Python', 'VCS', 'Questa', 'Xcelium']
    }
  ];

  const services = [
    {
      title: 'IP, SoC, ASIC, FPGA Verification',
      description: 'Complete verification solutions for all silicon types with comprehensive coverage',
      deliverables: ['Architecture and Verification Planning', 'Reusable UVM test benches', 'Protocol/VIP integration', 'Functional and Code coverage']
    },
    {
      title: 'Subsystem & Integration Testing',
      description: 'End-to-end validation of complex multi-IP systems',
      deliverables: ['Interconnects validation', 'Coherency checks', 'Cross-IP validation', 'System-level testing']
    },
    {
      title: 'Coverage-Driven & Formal Verification',
      description: 'Advanced verification methodologies for comprehensive coverage',
      deliverables: ['Coverage modeling', 'SVA development', 'Formal property checking', 'Closure acceleration']
    },
    {
      title: 'Safety-Critical Verification',
      description: 'Compliance-ready flows for aerospace and automotive applications',
      deliverables: ['DO-254 verification flows', 'ISO 26262 compliance', 'Safety analysis', 'Certification support']
    },
    {
      title: 'Low-Power & CDC Validation',
      description: 'Power-aware verification and clock domain crossing validation',
      deliverables: ['UPF/CPF-based flows', 'Clock/reset domain crossings', 'Static & dynamic checks', 'Power sequence validation']
    },
    {
      title: 'Emulation & Post-Silicon Bridging',
      description: 'Hardware acceleration and post-silicon validation support',
      deliverables: ['FPGA bitstream validation', 'Prototyping support', 'Hybrid co-verification', 'HW/SW integration']
    }
  ];

  const sdcvpFeatures = [
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: '40% Faster Verification',
      description: 'Automated comprehensive verification plans for standard and custom interfaces'
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: 'Smart Coverage',
      description: 'Automated assertions and coverage plans for standard and custom interfaces'
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-600" />,
      title: 'Protocol-Aware Debug',
      description: 'Built-in models simplifying complexity of PCIe, CXL, USB, NVMe, LPDDR, Ethernet & custom interfaces'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: 'Seamless Toolchain',
      description: 'Works with all leading simulators and tools, seamlessly integrates in any verification workflows'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6 text-green-600" />,
      title: 'SdCvP-X Verification Accelerator',
      description: 'Reliable and accurate automated verification with efficient and quick debugging'
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: 'Deep Domain Expertise',
      description: 'Trusted team with track record across IP/SoC/ASIC/FPGA/Subsystem verification'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: 'Standards Compliant Flows',
      description: 'ISO 26262 and DO-254 compliant verification flows and methodologies'
    }
  ];

  const industries = [
    'Automotive', 'Aerospace', 'Data Center', 'Mobile', 'IoT', 'High-Performance Computing'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Design Verification Services
            </h1>
            
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
              At Veripoint Technologies, we redefine hardware verification to accelerate silicon success with AI- driven solutions and deep domain knowledge. From IP and SoC to ASIC and FPGA, we enable you
to tape out confidently - accelerating your path to market.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-sm font-medium">AI-accelerated verification</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-sm font-medium">Protocol fluency across 10+ standards</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-sm font-medium">ISO 26262 & DO-254 compliance</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* SdCvP-X AI Verification Accelerator */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
               SDCVP-X™: AI Verification Tool
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proprietary intellectual property SdCvP-X brings intelligence and speed to every phase of verification and validation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sdcvpFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Verification Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Verification Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive verification solutions across all silicon types and complexity levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 mb-3">Key Deliverables:</h4>
                  {service.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Technologies & Protocols
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across the latest standards, protocols, and verification methodologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyTechnologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-green-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, idx) => (
                    <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have verified hundreds of complex silicon designs across domains, integrating the latest standards, protocols, and power-efficient architectures.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['IP Cores', 'SoCs', 'ASICs', 'Subsystems', 'FPGAs', 'Custom Interfaces'].map((expertise, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <Cpu className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{expertise}</h3>
                <p className="text-sm text-gray-600">
                  {expertise === 'IP Cores' && 'Protocol stacks, interconnects, PHYs, memory controllers'}
                  {expertise === 'SoCs' && 'Coherency, multi-core, cache hierarchies, system fabrics'}
                  {expertise === 'ASICs' && 'RTL signoff, low-power domains, timing-closure ready RTL'}
                  {expertise === 'Subsystems' && 'Inter-IP integration, DMA engines, bridge logic'}
                  {expertise === 'FPGAs' && 'DO-254 compliant, real-time, custom logic'}
                  {expertise === 'Custom Interfaces' && 'Proprietary protocols, mixed-domain interconnects'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving diverse industries with specialized verification requirements
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="py-16 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted Partner to Silicon teams
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {reason.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{reason.title}</h3>
                </div>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Accelerate Your Design Verification
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Whether you are building a new SoC, qualifying a safety-critical FPGA, or closing coverage on an IP/ASIC/SOC — 
            we are here to ensure your silicon works flawlessly.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://forms.gle/nA8YkAY7RoeEHZnB7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}