import Layout from '@/components/layout/Layout';
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
      title: "The Billion Dollar Chip Shortage Crisis",
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

  const keyFeatures = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Specification Driven V&V Plan Generator",
      description: "Automatically generates features, test points, and test scenarios by configuration from design specification.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Constraints, Coverage & Assertions",
      description: "Auto-generates constraints, coverage metrics, and assertions aligned with design specification requirements",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Bug className="h-8 w-8" />,
      title: "Debug Assist Engine",
      description: "Provides traceability matrix and root-cause accelerators for efficient debugging and issue resolution",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Specification Evolution",
      description: "Automatically adapts verification plans as specifications evolve, maintaining version traceability",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Manual Plan Alignment",
      description: "Aligns existing manual plans to eliminate gaps and ensure consistency while boosting productivity",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Universal Integration",
      description: "Seamlessly integrates with existing verification workflows across IPs, ASICs, SoCs, and custom interfaces",
      color: "bg-indigo-50 text-indigo-600"
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

  const tiers = [
    {
      name: "Standard",
      features: [
        "Comprehensive Verification Plan",
        "Features, Test Points & Scenarios",
        "Configuration Management",
        "Specification Alignment"
      ],
      highlight: false
    },
    {
      name: "Advanced",
      features: [
        "All Standard Features",
        "Constraints and Assertions",
        "Enhanced Specification Evolution",
        "Advanced Traceability Matrix"
      ],
      highlight: false
    },
    {
      name: "Premium",
      features: [
        "All Advanced Features",
        "Coverage and Mapping",
        "Specification Variables Debugging",
        "Priority Support"
      ],
      highlight: true
    },
    {
      name: "Premium+",
      features: [
        "All Premium Features",
        "Auto-Generated Test Bench",
        "Custom Integration Support",
        "Dedicated Success Manager"
      ],
      highlight: false
    }
  ];

   // ✅ Define the brochure download function
  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/Brochure_VeripointTechnologies.pdf"; // Ensure this file is in your public folder
    link.download = "Brochure_VeripointTechnologies.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-blue-600/30"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {/* Video Background */}
        <video
          className="h-full w-full object-cover"
          src="/sdcvpx.webm"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        
  {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
<h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
  SdCvP-X<span className="text-lg text-green-300 align-top relative -top-1">™</span>
  <span className="text-lg md:text-xl block font-normal text-green-200 mt-2">
    Specification Driven Comprehensive Verification Acceleration Tool
  </span>
</h1>
                
                <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                  Smart Verification tool for First-Time Silicon Success
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://forms.gle/zU9AweZYCQ7GFxYQ8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center shadow-lg"
                  >
                    <PlayCircle className="h-5 w-5 mr-3" />
                    Request Demo
                  </a>
                  <button
                    onClick={downloadBrochure}
                    className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-green-900 transition-colors flex items-center justify-center backdrop-blur-sm"
                  >
                    <Download className="h-5 w-5 mr-3" />
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      </section>

      
      {/* Crisis Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Verification is #1 Bottleneck</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Behind every chip shortage headline is a verification failure. Here is the reality:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {crisisStories.map((story, index) => (
              <div
                key={index}
                className={`cursor-pointer p-8 rounded-xl border-2 transition-all duration-300 ${
                  activeStory === index
                    ? 'border-green-500 bg-gray-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
                onClick={() => setActiveStory(index)}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{story.stat}</div>
                  <div className="text-sm text-gray-500 mb-4">{story.statLabel}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{story.title}</h3>
                  <p className="text-sm text-red-600 font-medium">{story.impact}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-12 border border-gray-200 shadow-sm">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{crisisStories[activeStory].title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {crisisStories[activeStory].description}
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-green-600 rounded-lg">
                <Lightbulb className="h-5 w-5 mr-3 text-yellow-300" />
                <span className="font-semibold text-white">SdCvP-X™ Solves This</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SdCvP-X™ delivers comprehensive verification automation through intelligent features 
              designed for semiconductor industry needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Across IP/SoC/ASIC/FPGA</h2>
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

        
          
        </div>
      </section>

            {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Solution</h2>
            <p className="text-xl text-gray-600">
              Flexible tiers designed to match your verification needs and scale with your projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiers.map((tier, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border-2 ${
                tier.highlight 
                  ? 'border-green-500 bg-gradient-to-b from-green-50 to-white shadow-xl scale-105' 
                  : 'border-gray-200 bg-white hover:border-green-300'
              } transition-all duration-300`}>
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{tier.name}</h3>
                <ul className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Impact Across Teams</h2>
            <p className="text-xl text-gray-600">
              SdCvP-X delivers value to every role in your organization, from individual contributors to business leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Design Engineers</h3>
              <p className="text-gray-600">Faster test planning and structured debugging boost productivity significantly.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Architects</h3>
              <p className="text-gray-600">Full traceability from specification to test ensures implementation validation.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Managers</h3>
              <p className="text-gray-600">Actionable insights and milestone-based views improve project visibility.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Leaders</h3>
              <p className="text-gray-600">Higher first silicon success rates and faster time-to-market delivery.</p>
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
            Enhance your Verification Efforts with SdCvP-X™ today.
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
            Achieve First-time Silicon Success and faster TTM with secure and automated intelligent Verification tool that integrates seamlessly with your existing workflows.
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
  </Layout>);
}

