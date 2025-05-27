import React from 'react';
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
  PlayCircle
} from "lucide-react";

export default function SDCVPXPage() {
  const stats = [
    { value: "75%", label: "of Design Projects are behind schedule" },
    { value: "14%", label: "First-Time Silicon Success rate in 2024" },
    { value: "60-70%", label: "of total design effort spent on verification" },
    { value: "50%", label: "reduction in debug cycle time" }
  ];

  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "40% Verification Effort Reduction",
      description: "Dramatically reduce time spent on manual verification planning and execution through intelligent automation."
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: "50% Faster Debug Cycles",
      description: "Accelerate debugging with automated traceability matrices and intelligent root cause analysis."
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "First Silicon Success",
      description: "Transform your dream of First Silicon Success into reality with comprehensive verification coverage."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Faster Time-to-Market",
      description: "Achieve on-time or early delivery with streamlined verification processes and automated planning."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Standards Compliant",
      description: "Auto-generate verification plans that meet industry standards like PCIe, CXL, and other protocols."
    },
    {
      icon: <Activity className="h-8 w-8 text-green-600" />,
      title: "Real-time Adaptation",
      description: "Verification plans evolve automatically as specifications change, maintaining alignment throughout development."
    }
  ];

  const capabilities = [
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Auto Verification Plan Generator",
      description: "Generates comprehensive verification plans with features, test points, scenarios, and configurations directly from specifications."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Constraints & Coverage Engine",
      description: "Automatically creates constraints, coverage points, and assertions aligned with design specifications."
    },
    {
      icon: <Bug className="h-6 w-6" />,
      title: "Debug Assist Engine",
      description: "Provides traceability matrices and root-cause accelerators for faster issue resolution."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Specification Evolution",
      description: "Adapts verification plans as specifications update, maintaining version traceability."
    }
  ];

  const technologies = [
    {
      name: "PCIe 6.2",
      time: "~2 Hours",
      rows: "4000+ Rows",
      description: "Comprehensive verification plan with constraints, coverage, and assertions"
    },
    {
      name: "CXL 3.0",
      time: "~1 Hour",
      rows: "2000+ Rows",
      description: "Complete configurable verification framework"
    },
    {
      name: "ARM Cortex-A",
      time: "~1 Hour",
      rows: "700+ Rows",
      description: "Open source verification plan generation"
    },
    {
      name: "Custom RISC SoC",
      time: "~1 Hour",
      rows: "800+ Rows",
      description: "Tailored verification for custom architectures"
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-green-900 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-600/20 rounded-full text-green-300 text-sm font-medium mb-6">
              <Cpu className="h-4 w-4 mr-2" />
              AI-Powered Verification Automation
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              SdCvP-X
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-green-100 font-light">
              Specification Driven Comprehensive Verification Plan
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-300">
              Transform verification challenges into competitive advantages. Auto-generate complete, 
              standards-compliant verification plans from design specifications in hours, not weeks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="https://forms.gle/zU9AweZYCQ7GFxYQ8"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-500/25 flex items-center justify-center"
              >
                <PlayCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </a>
              <a
                href="/contact"
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-900 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Sales
                <ArrowRight className="h-5 w-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-green-600 transition-colors">Home</a>
            <ChevronRight className="h-4 w-4" />
            <a href="/products" className="hover:text-green-600 transition-colors">Products</a>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">SdCvP-X</span>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Verification Crisis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The semiconductor industry faces unprecedented verification challenges that threaten project success and market competitiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Critical Industry Challenge</h3>
                <p className="text-red-700">
                  First-Time Silicon Success has dropped to just 14% in 2024, while 75% of design projects 
                  fall behind schedule due to verification bottlenecks.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Manual Verification Planning</h4>
                    <p className="text-gray-600">Time-consuming, error-prone processes that don't scale with complexity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Specification Misalignment</h4>
                    <p className="text-gray-600">Coverage gaps and missed bugs due to lack of traceability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Debug Inefficiencies</h4>
                    <p className="text-gray-600">4-6 weeks or more spent on unstructured debugging processes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-12 rounded-2xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Lightbulb className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The SdCvP-X Solution</h3>
                <p className="text-gray-700 text-lg">
                  Revolutionary AI-powered verification automation that transforms specifications into 
                  comprehensive, executable verification plans in hours instead of weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Measurable Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SdCvP-X delivers quantifiable improvements that directly impact your bottom line and project success rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced AI Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on years of research, SdCvP-X leverages cutting-edge ML algorithms to revolutionize verification planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start space-x-6 p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <div className="p-3 bg-green-600 rounded-xl flex-shrink-0">
                  {React.cloneElement(capability.icon, { className: "h-6 w-6 text-white" })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Results Across Technologies</h2>
            <p className="text-xl text-gray-600">
              Real performance metrics from actual deployments across industry-standard protocols and custom architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{tech.name}</h3>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">Verified</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{tech.time}</div>
                    <div className="text-sm text-gray-600">Generation Time</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{tech.rows}</div>
                    <div className="text-sm text-gray-600">Comprehensive Plan</div>
                  </div>
                </div>
                <p className="text-gray-700">{tech.description}</p>
              </div>
            ))}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Verification?
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
            Join the AI verification revolution. See how SdCvP-X can reduce your verification effort by 40% 
            and achieve first silicon success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://forms.gle/zU9AweZYCQ7GFxYQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-green-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center"
            >
              <PlayCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Schedule Demo
            </a>
            <a
              href="/contact"
              className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 backdrop-blur-sm"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}