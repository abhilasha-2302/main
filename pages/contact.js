import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Headquarters",
      details: [
        "Veripoint Technologies",
        "Unit no. IS-800, Ground Floor, Tower-C",
        "Urbtech Trade Center, Plot No. B-35",
        "Sector-132, Noida 201304, Uttar Pradesh, India"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: [
        "+91 120 555-0123",
        "Toll Free: +91 1800 555-VERI"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: [
        "sales@veripoint.com",
        "support@veripoint.com",
        "careers@veripoint.com"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM IST",
        "Saturday: 10:00 AM - 2:00 PM IST",
        "Sunday: Closed"
      ]
    }
  ];

  const offices = [
    {
      city: "Noida",
      region: "Uttar Pradesh, India",
      address: "Unit no. IS-800, Ground Floor, Tower-C, Urbtech Trade Center, Plot No. B-35, Sector-132, Noida 201304",
      phone: "+91 120 555-0123",
      type: "Headquarters"
    },
    {
      city: "Noida",
      region: "Uttar Pradesh, India", 
      address: "Tower B, Unit 304, M Floor, World Trade Tower, Plot no. C-1, Sector-16, Noida 201301",
      phone: "+91 120 555-0456",
      type: "Development Center"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Ready to transform your semiconductor solutions? Our team of experts is here to help you achieve your technology goals.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-800">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                      placeholder="john.doe@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Partnerships</option>
                    <option value="support">Technical Support</option>
                    <option value="careers">Careers</option>
                    <option value="media">Media & Press</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg text-green-600">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                Quick Actions
              </h4>
              <div className="space-y-3">
                <a
                  href="/support"
                  className="block w-full text-left px-4 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200 text-gray-700 hover:text-green-600"
                >
                  <div className="font-medium">Technical Support</div>
                  <div className="text-sm text-gray-500">Get help with our products</div>
                </a>
                <a
                  href="/careers"
                  className="block w-full text-left px-4 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200 text-gray-700 hover:text-green-600"
                >
                  <div className="font-medium">Join Our Team</div>
                  <div className="text-sm text-gray-500">Explore career opportunities</div>
                </a>
                <a
                  href="/products/sdcvp-x"
                  className="block w-full text-left px-4 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200 text-gray-700 hover:text-green-600"
                >
                  <div className="font-medium">Product Demo</div>
                  <div className="text-sm text-gray-500">Request a demonstration</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at any of our offices around the country or connect with us virtually.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {office.city}
                  </h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {office.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{office.region}</p>
                <p className="text-gray-600 text-sm mb-3">{office.address}</p>
                <p className="text-green-600 font-medium">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how Veripoint Technologies can accelerate your semiconductor innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+911205550123"
              className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition duration-200"
            >
              Call Now
            </a>
            <a
              href="mailto:sales@veripoint.com"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-200"
            >
              Email Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}