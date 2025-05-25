// import { useState } from 'react';
// import { ChevronRightIcon, CheckCircleIcon, ClockIcon, ShieldCheckIcon, CpuChipIcon, BeakerIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

// export default function VerificationServices() {
//   const [activeTab, setActiveTab] = useState('overview');

//   const keyMetrics = [
//     { label: '40% Faster', description: 'Verification Time', icon: ClockIcon },
//     { label: '100%', description: 'Coverage Accuracy', icon: ShieldCheckIcon },
//     { label: '500+', description: 'Silicon Designs Verified', icon: CpuChipIcon },
//     { label: '99.9%', description: 'First-Time Success Rate', icon: CheckCircleIcon }
//   ];

//   const protocols = [
//     'PCIe', 'CXL', 'UCIe', 'USB', 'LPDDR', 'Ethernet', 'NVMe', 'HDMI', 
//     'DisplayPort', 'MIPI DSI/CSI', 'DDRx', 'SRAM', 'Flash', 'eMMC'
//   ];

//   const serviceAreas = [
//     {
//       title: 'IP, SoC, ASIC, FPGA Verification',
//       description: 'Comprehensive verification planning and execution',
//       features: ['Architecture Planning', 'Reusable UVM Test Benches', 'Protocol/VIP Integration', 'Functional Coverage'],
//       icon: CpuChipIcon
//     },
//     {
//       title: 'Coverage-Driven & Formal Verification',
//       description: 'Advanced verification methodologies for complete coverage',
//       features: ['Coverage Modeling', 'SVA Development', 'Formal Property Checking', 'Closure Acceleration'],
//       icon: BeakerIcon
//     },
//     {
//       title: 'Safety-Critical Verification',
//       description: 'Compliance-ready flows for critical applications',
//       features: ['DO-254 Compliance', 'ISO 26262 Flows', 'Certified Processes', 'Documentation'],
//       icon: ShieldCheckIcon
//     },
//     {
//       title: 'Emulation & Post-Silicon',
//       description: 'Bridge verification to real hardware',
//       features: ['FPGA Validation', 'Prototyping', 'Hybrid Co-verification', 'HW/SW Integration'],
//       icon: RocketLaunchIcon
//     }
//   ];

//   const technologies = {
//     protocols: ['PCIe', 'CXL', 'UCIe', 'NVMe', 'Ethernet', 'USB'],
//     memory: ['LPDDR', 'DDRx', 'SRAM', 'Flash', 'eMMC', 'NAND/NOR'],
//     display: ['HDMI', 'DisplayPort', 'MIPI DSI/CSI', 'Audio/Video Codec'],
//     tools: ['VCS', 'Questa', 'Xcelium', 'Verdi', 'JasperGold', 'Vivado', 'SpyGlass']
//   };

//   const applications = [
//     { name: 'Automotive', description: 'ISO 26262 compliant verification for ADAS and autonomous systems' },
//     { name: 'Aerospace', description: 'DO-254 certified flows for mission-critical avionics' },
//     { name: 'Data Centers', description: 'High-performance computing and server verification' },
//     { name: 'Consumer Electronics', description: 'Mobile, IoT, and edge computing verification' },
//     { name: 'Telecommunications', description: '5G/6G infrastructure and networking equipment' },
//     { name: 'AI/ML Hardware', description: 'Neural processing units and AI accelerators' }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-600/20 border border-green-400/30 text-green-300 text-sm font-medium mb-6">
//                 <ShieldCheckIcon className="w-4 h-4 mr-2" />
//                 Silicon Verification Services
//               </div>
              
//               <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//                 Accelerate
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
//                   First-Time Silicon Success
//                 </span>
//               </h1>
              
//               <p className="text-xl text-gray-300 mb-8 leading-relaxed">
//                 AI-driven verification solutions and expert services for IP, SoC, ASIC, and FPGA designs. 
//                 Achieve faster tape-out with confidence through our proven methodologies and SdCvP-X platform.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-xl">
//                   Get Expert Consultation
//                 </button>
//                 <button className="px-8 py-4 border-2 border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-gray-900 transition-all duration-200">
//                   Explore SdCvP-X Platform
//                 </button>
//               </div>
//             </div>
            
//             <div className="relative">
//               <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
//                 <h3 className="text-2xl font-bold mb-6 text-center">Key Performance Metrics</h3>
//                 <div className="grid grid-cols-2 gap-6">
//                   {keyMetrics.map((metric, index) => {
//                     const IconComponent = metric.icon;
//                     return (
//                       <div key={index} className="text-center group">
//                         <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200">
//                           <IconComponent className="w-6 h-6 text-white" />
//                         </div>
//                         <div className="text-3xl font-bold text-green-400 mb-1">{metric.label}</div>
//                         <div className="text-sm text-gray-400">{metric.description}</div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SdCvP-X Platform Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               SdCvP-X: AI Verification Accelerator
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our proprietary platform brings intelligence and speed to every phase of verification and validation
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
//                     <ClockIcon className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-xl font-bold text-gray-900">40% Faster Verification</h3>
//                     <p className="text-gray-600">Automated comprehensive verification plans</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700">
//                   Automated verification planning for both standard and custom interfaces, dramatically reducing setup time and accelerating time-to-market.
//                 </p>
//               </div>

//               <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
//                     <ShieldCheckIcon className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-xl font-bold text-gray-900">Smart Coverage</h3>
//                     <p className="text-gray-600">Automated assertions and coverage plans</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700">
//                   Intelligent coverage analysis with automated assertion generation ensures comprehensive verification without manual effort.
//                 </p>
//               </div>

//               <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
//                     <BeakerIcon className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-xl font-bold text-gray-900">Protocol-Aware Debug</h3>
//                     <p className="text-gray-600">Built-in models for complex protocols</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700">
//                   Simplified debugging with built-in protocol models for PCIe, CXL, USB, NVMe, LPDDR, Ethernet, and custom interfaces.
//                 </p>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
//                 <h3 className="text-2xl font-bold mb-6">Supported Protocols & Standards</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {protocols.map((protocol, index) => (
//                     <div key={index} className="flex items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700">
//                       <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
//                       <span className="text-sm font-medium">{protocol}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="mt-8 p-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg border border-green-500/30">
//                   <p className="text-sm text-green-300 font-medium">
//                     ✨ Seamless integration with all leading simulators and verification tools
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Services Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Core Verification Services
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Comprehensive verification expertise across all silicon design domains
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {serviceAreas.map((service, index) => {
//               const IconComponent = service.icon;
//               return (
//                 <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300">
//                   <div className="flex items-center mb-6">
//                     <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
//                       <IconComponent className="w-7 h-7 text-white" />
//                     </div>
//                     <div className="ml-4">
//                       <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
//                       <p className="text-gray-600">{service.description}</p>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-3">
//                     {service.features.map((feature, featureIndex) => (
//                       <div key={featureIndex} className="flex items-center">
//                         <ChevronRightIcon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
//                         <span className="text-gray-700">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Technologies & Tools Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Technologies & Methodologies
//             </h2>
//             <p className="text-xl text-gray-600">
//               Cutting-edge tools and proven methodologies for comprehensive verification
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-4 gap-8">
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
//               <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">High-Speed Protocols</h3>
//               <div className="space-y-2">
//                 {technologies.protocols.map((tech, index) => (
//                   <div key={index} className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium text-center">
//                     {tech}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
//               <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Memory & Storage</h3>
//               <div className="space-y-2">
//                 {technologies.memory.map((tech, index) => (
//                   <div key={index} className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium text-center">
//                     {tech}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
//               <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Display & Multimedia</h3>
//               <div className="space-y-2">
//                 {technologies.display.map((tech, index) => (
//                   <div key={index} className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium text-center">
//                     {tech}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
//               <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Verification Tools</h3>
//               <div className="space-y-2">
//                 {technologies.tools.map((tech, index) => (
//                   <div key={index} className="px-3 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium text-center">
//                     {tech}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Industry Applications */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Industry Applications
//             </h2>
//             <p className="text-xl text-gray-600">
//               Trusted verification expertise across critical industries
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {applications.map((app, index) => (
//               <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300">
//                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-200">
//                   {app.name}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {app.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">
//               Why Leading Silicon Teams Choose Us
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Proven expertise, cutting-edge technology, and unwavering commitment to your success
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center">
//               <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                 <RocketLaunchIcon className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4">SdCvP-X Platform</h3>
//               <p className="text-gray-300 leading-relaxed">
//                 Reliable and accurate automated verification with efficient and quick debugging capabilities powered by AI.
//               </p>
//             </div>

//             <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                 <ShieldCheckIcon className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4">Deep Domain Expertise</h3>
//               <p className="text-gray-300 leading-relaxed">
//                 Trusted team with proven track record across IP, SoC, ASIC, FPGA, and subsystem verification projects.
//               </p>
//             </div>

//             <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center">
//               <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                 <CheckCircleIcon className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-4">Standards Compliant</h3>
//               <p className="text-gray-300 leading-relaxed">
//                 ISO 26262 and DO-254 compliant flows ensuring your designs meet the highest safety and quality standards.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Accelerate Your Verification Journey?
//           </h2>
//           <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
//             Whether you're building a new SoC, qualifying a safety-critical FPGA, or closing coverage on an IP/ASIC/SOC — 
//             we're here to ensure your silicon works flawlessly.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl">
//               Schedule Consultation
//             </button>
//             <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200">
//               Download Capabilities Brief
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




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
      title: 'SdCvP-X AI Accelerator',
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
              Silicon Verification Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Accelerate First-Time Silicon Success with AI-Driven Solutions and Expert Verification Services
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
              At Veripoint Technologies, we redefine hardware verification with AI and deep domain verification expertise. 
              Whether it's IP, SoC, ASIC, or FPGA — we help you tape-out faster, with confidence.
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
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* SdCvP-X AI Verification Accelerator */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              SdCvP-X: AI Verification Accelerator
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
              We've verified hundreds of complex silicon designs across domains, integrating the latest standards, protocols, and power-efficient architectures.
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
              <div key={index} className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow">
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
              Why Leading Silicon Teams Choose Us
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Verification Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Whether you're building a new SoC, qualifying a safety-critical FPGA, or closing coverage on an IP/ASIC/SOC — 
            we're here to ensure your silicon works flawlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}