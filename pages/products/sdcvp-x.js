import {
  ChevronRight,
  Zap,
  Target,
  TrendingUp,
  BarChart3,
  Bug,
  Layers,
  Clock,
  CheckCircle,
  ArrowRight,
  Shield,
  Cpu,
  Users,
  Award,
  Lightbulb,
  Activity,
  Database,
  Settings,
  Star,
  Calendar,
  Download,
  AlertTriangle,
  Workflow,
  Lock,
  Gauge,
  Sparkles,
  PlayCircle,
  ChevronDown,
  Globe,
  FileText
} from "lucide-react";
import { useState } from "react";

export default function SDCVPXPage() {
  const [activeStory, setActiveStory] = useState(0);
  const [showIntegrations, setShowIntegrations] = useState(false);

  const crisisStories = [
    {
      title: "The Billion dollars Chip Shortage Crisis",
      impact: "Global supply chain disruption",
      description: "When verification failures cascade into silicon re-spins, entire industries halt. Automotive, consumer electronics, and critical infrastructure all depend on chips that work the first time.",
      stat: "14%",
      statLabel: "First-time silicon success rate"
    },
    {
      title: "Project Delays Epidemic",
      impact: "75% of projects behind schedule",
      description: "Every day of delay costs millions. When verification consumes 60-70% of design effort with manual processes, teams struggle to meet market windows.",
      stat: "40-50%",
      statLabel: "Average debug cycle time"
    },
    {
      title: "The Hidden Cost of Manual Verification",
      impact: "Billions lost in inefficiencies",
      description: "Engineers spend more time creating verification plans than innovating. Coverage gaps lead to escaped bugs, field failures, and brand damage.",
      stat: "60-70%",
      statLabel: "Of design effort on verification"
    }
  ];

  const securityFeatures = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Proprietary AI Algorithms",
      description: "Advanced machine learning models trained on industry specifications, not your sensitive data"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "On-Premises Deployment",
      description: "Your specifications and design never leave your secure environment - complete data sovereignty"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Encrypted Processing",
      description: "End-to-end encryption ensures your intellectual property remains protected"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Compliance Ready",
      description: "Built to meet semiconductor industry security and compliance requirements"
    }
  ];

  const integrationWorkflows = [
    {
      category: "IP Verification",
      tools: ["VCS", "Verdi", "Xcelium", "Questa", "Riviera", "Vivado", "Quartus"],
      description: "Seamlessly integrates in existing workflows for thorough IP verification"
    },
    {
      category: "SoC Verification",
      tools: ["VCS", "Verdi", "Xcelium", "Questa", "Riviera", "Vivado", "Quartus"],
      description: "Scales from IP to full SoC comprehensive verification"
    },
    {
      category: "ASIC Verification",
      tools: ["VCS", "Verdi", "Xcelium", "Questa", "Riviera", "Vivado", "Quartus"],
      description: "Scales from IP to full ASIC comprehensive verification"
    },
    {
      category: "FPGA Verification",
      tools: ["VCS", "Verdi", "Xcelium", "Questa", "Riviera", "Vivado", "Quartus"],
      description: "Accelerates FPGA verification with vendor-specific optimizations"
    }
  ];

  const transformationMetrics = [
    { before: "Manual planning: 2-4 weeks", after: "Auto-generation: 1-2 hours", improvement: "95% faster" },
    { before: "Debug cycles: 4-6 weeks", after: "Structured debug: 2-3 weeks", improvement: "50% reduction" },
    { before: "Coverage gaps: 20-30%", after: "Comprehensive: <5%", improvement: "6x improvement" },
    { before: "Spec alignment: Manual", after: "Auto-evolving plans", improvement: "Real-time sync" }
  ];

  const provenIndustries = [
    {
      name: "PCIe 6.2 IP",
      time: "~2 Hours",
      rows: "4000+",
      industry: "Data Center",
      description: "Complete verification plan with constraints, coverage, and assertions for high-speed PCIe 6.2 protocol"
    },
    {
      name: "CXL 3.0 IP",
      time: "~1 Hour",
      rows: "2000+",
      industry: "Memory & Storage",
      description: "Comprehensive verification framework for next-generation memory coherence interfaces"
    },
    {
      name: "ARM Cortex-A Series",
      time: "~1 Hour",
      rows: "700+",
      industry: "Mobile & Embedded",
      description: "Open source processor verification with comprehensive coverage analysis for ARM architecture"
    },
    {
      name: "Custom RISC SoC",
      time: "~1 Hour",
      rows: "800+",
      industry: "IoT & Edge Computing",
      description: "Custom SoC verification with comprehensive coverage for RISC-V based system-on-chip designs"
    },
    {
      name: "Custom PIPE Interface",
      time: "~1 Hour",
      rows: "1200+",
      industry: "Multi-Protocol",
      description: "Intel PIPE 7.0 interface covering PCIe, SATA, USB3.x, USB4.x, and DisplayPort 2.x protocols"
    }
  ];

  const downloadBrochure = () => {
    // Create a temporary link to download the PDF
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,'; // In a real implementation, you'd have the PDF data
    link.download = 'SdCvP-X_AccelerateVerification_by_VeripointTechnologies_Proposal.pdf';
    
    // For demo purposes, we'll show an alert since we can't actually provide the PDF file
    alert('Brochure download would start here. In a real implementation, the PDF file would be downloaded.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-900 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-6 py-3 bg-green-600/20 backdrop-blur-sm rounded-full text-green-200 text-sm font-medium mb-8 border border-green-400/30">
                <Zap className="h-4 w-4 mr-2" />
                AI-Powered Verification Revolution
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">SdCvP-X</span>
                <span className="text-lg md:text-xl block font-normal text-green-200 mt-2">
                  Specification Driven Comprehensive Verification Acceleration
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-green-100 leading-relaxed">
                Smart Verification for First-Time Silicon Success
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="https://forms.gle/zU9AweZYCQ7GFxYQ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <PlayCircle className="h-5 w-5 mr-3" />
                  Request Demo
                </a>
                <button
                  onClick={downloadBrochure}
                  className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-green-900 transition-colors flex items-center justify-center"
                >
                  <Download className="h-5 w-5 mr-3" />
                  Download Brochure
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-green-400/30">
                <h3 className="text-xl font-semibold mb-6 text-center">Silicon Challenges</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">14%</div>
                    <div className="text-sm text-green-200">First Silicon Success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">75%</div>
                    <div className="text-sm text-green-200">Projects Delayed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">60-70%</div>
                    <div className="text-sm text-green-200">Effort on Verification</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">30-40%</div>
                    <div className="text-sm text-green-200">Debug Cycle Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Story Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">The Verification Crisis</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Behind every chip shortage headline is a verification failure. Here's the reality:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {crisisStories.map((story, index) => (
              <div
                key={index}
                className={`cursor-pointer p-8 rounded-xl border-2 transition-all duration-300 ${
                  activeStory === index
                    ? 'border-green-500 bg-green-600/10'
                    : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                }`}
                onClick={() => setActiveStory(index)}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">{story.stat}</div>
                  <div className="text-sm text-gray-400 mb-4">{story.statLabel}</div>
                  <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                  <p className="text-sm text-orange-400">{story.impact}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-xl p-12 border border-gray-700">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6">{crisisStories[activeStory].title}</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {crisisStories[activeStory].description}
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-green-600 rounded-lg">
                <Lightbulb className="h-5 w-5 mr-3 text-yellow-300" />
                <span className="font-semibold">SdCvP-X Solves This</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Secure & Proprietary</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with semiconductor-grade security using proprietary AI algorithms. 
              Your specifications never leave your environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Industries Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Across Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Real results from actual deployments across semiconductors, automotive, datacenter, consumer electronics and more
            </p>
            
            <button
              onClick={downloadBrochure}
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <FileText className="h-5 w-5 mr-3" />
              Download Technical Brochure
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {provenIndustries.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-green-500 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Generation Time:</span>
                    <span className="font-semibold text-green-600">{item.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Verification Plan:</span>
                    <span className="font-semibold text-blue-600">{item.rows} Rows</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Industry:</span>
                    <span className="font-medium text-gray-900">{item.industry}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 pt-4 border-t border-gray-200">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Summary Card */}
            <div className="bg-green-600 p-8 rounded-xl text-white col-span-1 md:col-span-2 lg:col-span-1">
              <div className="text-center">
                <Cpu className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Universal Coverage</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-sm text-green-200">Verified IPs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">12K+</div>
                    <div className="text-sm text-green-200">Total Rows</div>
                  </div>
                </div>
                <p className="text-green-100 text-sm">
                  From IP to ASIC to SOC to FPGA and more - proven across all semiconductor verticals
                </p>
              </div>
            </div>
          </div>

          {/* Transformation Metrics */}
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Transformation Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {transformationMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-sm text-red-600 font-medium mb-1">BEFORE</div>
                    <div className="text-gray-900">{metric.before}</div>
                  </div>
                  <ArrowRight className="h-6 w-6 text-green-600 mx-4" />
                  <div className="text-right">
                    <div className="text-sm text-green-600 font-medium mb-1">AFTER</div>
                    <div className="text-gray-900">{metric.after}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Universal Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Universal Compatibility</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Seamlessly integrates with your existing verification workflow without disruption
            </p>
            
            <button
              onClick={() => setShowIntegrations(!showIntegrations)}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <Globe className="h-5 w-5 mr-2" />
              {showIntegrations ? 'Hide' : 'Show'} Integration Details
              <ChevronDown className={`h-5 w-5 ml-2 transition-transform ${showIntegrations ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {showIntegrations && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {integrationWorkflows.map((workflow, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                  <div className="flex items-center mb-4">
                    <Cpu className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{workflow.category}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{workflow.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Compatible Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {workflow.tools.map((tool, idx) => (
                        <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Verification Process?
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
            Join the companies achieving first silicon success with secure, AI-powered verification automation 
            that integrates seamlessly with your existing workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://forms.gle/zU9AweZYCQ7GFxYQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-12 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <PlayCircle className="h-5 w-5 mr-3" />
              Request Demo
            </a>
            <button
              onClick={downloadBrochure}
              className="border-2 border-white text-white px-12 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center"
            >
              <Download className="h-5 w-5 mr-3" />
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// import {
//   ChevronRight,
//   Zap,
//   Target,
//   TrendingUp,
//   BarChart3,
//   Bug,
//   Layers,
//   Clock,
//   CheckCircle,
//   ArrowRight,
//   Shield,
//   Cpu,
//   Users,
//   Award,
//   Lightbulb,
//   Activity,
//   Database,
//   Settings,
//   Star,
//   Calendar,
//   Download,
//   AlertTriangle,
//   Workflow,
//   Lock,
//   Gauge,
//   Sparkles,
//   PlayCircle,
//   ChevronDown,
//   Globe,
//   FileText,
//   ArrowDown
// } from "lucide-react";
// import { useState } from "react";

// export default function SDCVPXPage() {
//   const [activeTab, setActiveTab] = useState(0);

//   const verificationStats = [
//     { stat: "14%", label: "First Silicon Success Rate", impact: "Industry Standard" },
//     { stat: "75%", label: "Projects Behind Schedule", impact: "Time-to-Market Risk" },
//     { stat: "60-70%", label: "Design Effort on Verification", impact: "Resource Drain" },
//     { stat: "30-40%", label: "Debug Cycle Time", impact: "Costly Delays" }
//   ];

//   const productTiers = [
//     {
//       name: "Standard",
//       features: [
//         "Comprehensive Verification Plan",
//         "Features, Test Points, Test Scenarios",
//         "Configuration Management",
//         "Specification-Driven Planning"
//       ]
//     },
//     {
//       name: "Advanced", 
//       features: [
//         "All Standard Features",
//         "Auto Constraints & Assertions",
//         "Specification Evolution Tracking",
//         "Traceability Matrix for Debugging"
//       ]
//     },
//     {
//       name: "Premium",
//       features: [
//         "All Advanced Features", 
//         "Coverage and Mapping",
//         "Specification Variables Debugging",
//         "Manual Plan Alignment"
//       ]
//     },
//     {
//       name: "Premium+",
//       features: [
//         "All Premium Features",
//         "Auto-Generated Test Benches",
//         "Complete Workflow Integration",
//         "Enterprise Support"
//       ]
//     }
//   ];

//   const provenResults = [
//     {
//       title: "PCIe 6.2 IP Verification",
//       time: "~2 Hours",
//       rows: "4000+ Rows",
//       industry: "Data Center & High-Speed I/O",
//       description: "Complete verification plan with constraints, coverage, and assertions for PCIe 6.2 protocol"
//     },
//     {
//       title: "CXL 3.0 IP Verification", 
//       time: "~1 Hour",
//       rows: "2000+ Rows",
//       industry: "Memory & Compute Express",
//       description: "Comprehensive verification framework for next-generation memory coherence"
//     },
//     {
//       title: "ARM Cortex-A Series",
//       time: "~1 Hour", 
//       rows: "700+ Rows",
//       industry: "Mobile & Embedded Processors",
//       description: "Open source processor verification with comprehensive coverage analysis"
//     },
//     {
//       title: "Custom RISC SoC",
//       time: "~1 Hour",
//       rows: "800+ Rows", 
//       industry: "IoT & Edge Computing",
//       description: "Custom SoC verification with comprehensive RISC-V system coverage"
//     },
//     {
//       title: "Intel PIPE Interface v7.0",
//       time: "~1 Hour",
//       rows: "1200+ Rows",
//       industry: "Multi-Protocol Interfaces",
//       description: "PCIe, SATA, USB3.x, USB4.x, and DisplayPort 2.x protocol verification"
//     }
//   ];

//   const handleDownload = () => {
//     // Create a download link for the PDF
//     const link = document.createElement('a');
//     link.href = 'data:application/pdf;base64,'; // In real implementation, this would be the actual PDF data
//     link.download = 'SdCvP-X_AccelerateVerification_by_VeripointTechnologies_Proposal.pdf';
    
//     // For demo purposes, we'll simulate the download
//     alert('Download would start here. In production, this would download the actual PDF brochure.');
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white min-h-screen flex items-center">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <div className="inline-flex items-center px-6 py-3 bg-green-600/30 backdrop-blur-sm rounded-full text-green-200 text-sm font-medium mb-8 border border-green-400/30">
//                 <Zap className="h-4 w-4 mr-2" />
//                 AI-Powered Verification Automation
//               </div>
              
//               <h1 className="text-5xl md:text-6xl font-bold mb-6">
//                 <span className="text-white">SdCvP-X</span>
//                 <span className="text-sm align-super text-green-300">TM</span>
//                 <span className="text-2xl md:text-3xl block font-light text-green-200 mt-4">
//                   Specification Driven Comprehensive Verification Acceleration
//                 </span>
//               </h1>
              
//               <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
//                 Smart Verification for First-Time Silicon Success
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-6 mb-12">
//                 <a
//                   href="https://forms.gle/zU9AweZYCQ7GFxYQ8"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg"
//                 >
//                   <PlayCircle className="h-5 w-5 mr-3" />
//                   Request Live Demo
//                 </a>
//                 <button
//                   onClick={handleDownload}
//                   className="group border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-green-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
//                 >
//                   <Download className="h-5 w-5 mr-3" />
//                   Download Brochure
//                 </button>
//               </div>
//             </div>

//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
//               <h3 className="text-2xl font-bold mb-6 text-center text-green-200">Silicon Challenges</h3>
//               <div className="grid grid-cols-2 gap-6">
//                 {verificationStats.map((item, index) => (
//                   <div key={index} className="text-center">
//                     <div className="text-3xl font-bold text-red-400 mb-2">{item.stat}</div>
//                     <div className="text-sm text-green-200 mb-1">{item.label}</div>
//                     <div className="text-xs text-green-300">{item.impact}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What is SdCvP-X Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">What is SdCvP-X?</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
//               SdCvP-X is an AI-powered tool that automatically generates comprehensive verification plans 
//               directly from design specifications, eliminating manual planning inefficiencies and ensuring 
//               complete coverage alignment.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
//                 <FileText className="h-6 w-6 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Auto Verification Plan Generator</h3>
//               <p className="text-gray-600">
//                 Automatically generates features, test points, and scenarios by configuration from design specifications.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
//                 <Target className="h-6 w-6 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Constraints & Assertions</h3>
//               <p className="text-gray-600">
//                 Auto-generates constraints, coverage metrics, and assertions aligned with specification requirements.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
//                 <Bug className="h-6 w-6 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Debug Assist Engine</h3>
//               <p className="text-gray-600">
//                 Provides traceability matrix and root-cause accelerators for efficient debugging and issue resolution.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
//                 <Activity className="h-6 w-6 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Specification Evolver</h3>
//               <p className="text-gray-600">
//                 Automatically adapts verification plans as specifications evolve, maintaining version traceability.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
//                 <Settings className="h-6 w-6 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Manual Plan Alignment</h3>
//               <p className="text-gray-600">
//                 Aligns existing manual plans to eliminate gaps and ensure consistency while boosting productivity.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
//                 <Workflow className="h-6 w-6 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Universal Integration</h3>
//               <p className="text-gray-600">
//                 Seamlessly integrates with existing verification workflows across IPs, ASICs, SoCs, and custom interfaces.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Product Tiers */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">Product Tiers</h2>
//             <p className="text-xl text-gray-600">Choose the right level of verification automation for your needs</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {productTiers.map((tier, index) => (
//               <div key={index} className={`relative p-8 rounded-xl border-2 ${
//                 index === 3 ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'
//               }`}>
//                 {index === 3 && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                     <div className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
//                       Most Popular
//                     </div>
//                   </div>
//                 )}
//                 <div className="text-center mb-6">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
//                 </div>
//                 <ul className="space-y-4">
//                   {tier.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
//                       <span className="text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Proven Results */}
//       <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center px-6 py-3 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-8">
//               <Award className="h-4 w-4 mr-2" />
//               Proven Across Industries
//             </div>
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">Real Results from Real Deployments</h2>
//             <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//               SdCvP-X has been successfully deployed across multiple industries and protocols, 
//               delivering consistent results in hours instead of weeks.
//             </p>
            
//             <button
//               onClick={handleDownload}
//               className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
//             >
//               <Download className="h-5 w-5 mr-3" />
//               Download Technical Brochure
//             </button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//             {provenResults.map((result, index) => (
//               <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-xl font-bold text-gray-900">{result.title}</h3>
//                   <div className="flex">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                 </div>
//                 <div className="space-y-3 mb-6">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Generation Time:</span>
//                     <span className="font-semibold text-green-600">{result.time}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Verification Plan:</span>
//                     <span className="font-semibold text-blue-600">{result.rows}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Industry:</span>
//                     <span className="font-medium text-gray-900">{result.industry}</span>
//                   </div>
//                 </div>
//                 <p className="text-sm text-gray-600 border-t border-gray-200 pt-4">
//                   {result.description}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Impact Metrics */}
//           <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200">
//             <div className="text-center mb-8">
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">Transformation Impact</h3>
//               <p className="text-lg text-gray-600">Measurable improvements across all verification metrics</p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//               <div className="text-center">
//                 <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
//                 <div className="text-gray-700">Verification Effort Reduction</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
//                 <div className="text-gray-700">Debug Cycle Reduction</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl font-bold text-purple-600 mb-2">On-Time</div>
//                 <div className="text-gray-700">First Silicon Success</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl font-bold text-orange-600 mb-2">Near-Zero</div>
//                 <div className="text-gray-700">Manual Planning</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Who Benefits */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">Who Benefits from SdCvP-X?</h2>
//             <p className="text-xl text-gray-600">Delivering value across the entire project hierarchy</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-gray-50 p-8 rounded-xl">
//               <div className="flex items-center mb-6">
//                 <Users className="h-8 w-8 text-green-600 mr-3" />
//                 <h3 className="text-2xl font-bold text-gray-900">Design Verification Engineers</h3>
//               </div>
//               <div className="mb-4">
//                 <h4 className="font-semibold text-red-600 mb-2">Pain Points:</h4>
//                 <p className="text-gray-700">Long debug cycles, manual test list creation, specification alignment challenges</p>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-green-600 mb-2">SdCvP-X Benefits:</h4>
//                 <p className="text-gray-700">Faster test planning, structured debug, boosted productivity</p>
//               </div>
//             </div>

//             <div className="bg-gray-50 p-8 rounded-xl">
//               <div className="flex items-center mb-6">
//                 <Cpu className="h-8 w-8 text-green-600 mr-3" />
//                 <h3 className="text-2xl font-bold text-gray-900">Architects</h3>
//               </div>
//               <div className="mb-4">
//                 <h4 className="font-semibold text-red-600 mb-2">Pain Points:</h4>
//                 <p className="text-gray-700">Difficulty validating specification implementation, coverage gaps</p>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-green-600 mb-2">SdCvP-X Benefits:</h4>
//                 <p className="text-gray-700">Full traceability from specification to test, comprehensive coverage</p>
//               </div>
//             </div>

//             <div className="bg-gray-50 p-8 rounded-xl">
//               <div className="flex items-center mb-6">
//                 <BarChart3 className="h-8 w-8 text-green-600 mr-3" />
//                 <h3 className="text-2xl font-bold text-gray-900">Program/Project Managers</h3>
//               </div>
//               <div className="mb-4">
//                 <h4 className="font-semibold text-red-600 mb-2">Pain Points:</h4>
//                 <p className="text-gray-700">Poor visibility on verification progress, unpredictable schedules</p>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-green-600 mb-2">SdCvP-X Benefits:</h4>
//                 <p className="text-gray-700">Actionable insights, milestone-based views, predictable delivery</p>
//               </div>
//             </div>

//             <div className="bg-gray-50 p-8 rounded-xl">
//               <div className="flex items-center mb-6">
//                 <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
//                 <h3 className="text-2xl font-bold text-gray-900">Business Leaders</h3>
//               </div>
//               <div className="mb-4">
//                 <h4 className="font-semibold text-red-600 mb-2">Pain Points:</h4>
//                 <p className="text-gray-700">Risk of re-spins, time-to-market delays, cost overruns</p>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-green-600 mb-2">SdCvP-X Benefits:</h4>
//                 <p className="text-gray-700">Higher first silicon success, faster TTM, reduced costs</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Ready to Transform Your Verification Process?
//           </h2>
//           <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Start with a free demo and see the impact on your designs in less than one week. 
//             Scale across IPs, ASICs, SoCs, and custom interfaces with seamless integration.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <a
//               href="https://forms.gle/zU9AweZYCQ7GFxYQ8"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white text-green-600 px-12 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg flex items-center justify-center"
//             >
//               <PlayCircle className="h-5 w-5 mr-3" />
//               Request Free Demo
//             </a>
//             <button
//               onClick={handleDownload}
//               className="border-2 border-white text-white px-12 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center"
//             >
//               <Download className="h-5 w-5 mr-3" />
//               Download Brochure
//             </button>
//           </div>
          
//           <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
//             <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-green-100">
//               <div>
//                 <p className="font-semibold mb-2">Email:</p>
//                 <a href="mailto:rajat@veripointtech.com" className="text-white hover:text-green-200">
//                   rajat@veripointtech.com
//                 </a>
//               </div>
//               <div>
//                 <p className="font-semibold mb-2">Phone:</p>
//                 <a href="tel:+919717580855" className="text-white hover:text-green-200">
//                   +91 97175 80855
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }