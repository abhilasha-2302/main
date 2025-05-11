export default function TechnologiesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Technologies & Industry Solutions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              AI and ML
            </h3>
            <p className="text-lg text-gray-600">
              Our AI and ML solutions leverage cutting-edge algorithms and techniques to optimize 
              semiconductor design and verification processes. By applying machine learning to 
              complex verification tasks, we reduce time-to-market and improve quality across 
              the entire development lifecycle. Our AI-driven solutions adapt to your specific 
              needs and continuously improve with usage.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Verification
            </h3>
            <p className="text-lg text-gray-600">
              Veripoint's comprehensive verification services include UVM-based testbench development, 
              functional and assertion-based verification, formal methods, low-power validation, 
              and performance benchmarking. We specialize in verifying a wide range of IPs and 
              subsystems, from high-speed interfaces like PCIe, USB, DDR, and CXL, to compute 
              architectures including ARM, RISC-V, and DSPs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}