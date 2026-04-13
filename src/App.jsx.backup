import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import logo from './assets/LOGO 1.png';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    reasoning: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const faqs = [
    {
      question: 'What services does Myaluza Civils offer?',
      answer: 'We specialize in civil engineering including water reticulation, concrete structures, and roads, as well as general building construction, renovations, and extensions.',
    },
    {
      question: 'What are your CIDB registrations?',
      answer: 'We are registered with CIDB as 5 GB PE and 6 CE PE.',
    },
    {
      question: 'Is Myaluza Civils BBBEE compliant?',
      answer: 'Yes, we are Level 1 BBBEE certified and 100% black owned.',
    },
    {
      question: 'What plant equipment do you own?',
      answer: 'Our owned plant includes 2x TLB 4X4, 2x Tipper Trucks, 1x Water Cart, 1x Excavator, 1x Grader, 1x Roller, and 1x Bob Cat.',
    },
  ];

  const projects = [
    { id: 1, title: 'Urban Building Upgrade', img: 'https://hemptoday.net/wp-content/uploads/2022/07/SA-build01.jpg', alt: 'Construction site in Cape Town with crane and building under construction' },
    { id: 2, title: 'Modern Educational Facility', img: 'https://structuralsolutions.co.za/wp-content/uploads/2025/01/CLM-1.jpg', alt: 'Contemporary concrete building with palm trees' },
    { id: 3, title: 'Commercial High-Rise', img: 'https://saaffordablehousing.co.za/wp-content/uploads/2019/05/SASFA1.jpg', alt: 'Aerial view of curved modern office building' },
    { id: 4, title: 'Large-Scale Development', img: 'https://www.falconprojects.co.za/wp-content/uploads/2025/04/1-1.jpg', alt: 'Building under construction with scaffolding' },
    { id: 5, title: 'Engineering Team Project', img: 'https://www.fulcrumapp.com/wp-content/uploads/2013/09/SMEC-South-Africa-team.jpg', alt: 'Team of engineers at a site' },
  ];

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <ul className="hidden md:flex gap-8">
            <li><a href="#about" className="text-navy hover:text-orange font-medium text-sm">About</a></li>
            <li><a href="#services" className="text-navy hover:text-orange font-medium text-sm">Services</a></li>
            <li><a href="#impact" className="text-navy hover:text-orange font-medium text-sm">Impact</a></li>
            <li><a href="#portfolio" className="text-navy hover:text-orange font-medium text-sm">Portfolio</a></li>
            <li><a href="#contact" className="text-navy hover:text-orange font-medium text-sm">Contact</a></li>
          </ul>
          <button 
            className="md:hidden text-navy text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col">
              <li><a href="#about" className="block px-4 py-3 text-navy hover:bg-orange hover:text-white" onClick={() => setMobileMenuOpen(false)}>About</a></li>
              <li><a href="#services" className="block px-4 py-3 text-navy hover:bg-orange hover:text-white" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
              <li><a href="#impact" className="block px-4 py-3 text-navy hover:bg-orange hover:text-white" onClick={() => setMobileMenuOpen(false)}>Impact</a></li>
              <li><a href="#portfolio" className="block px-4 py-3 text-navy hover:bg-orange hover:text-white" onClick={() => setMobileMenuOpen(false)}>Portfolio</a></li>
              <li><a href="#contact" className="block px-4 py-3 text-navy hover:bg-orange hover:text-white" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-navy to-orange text-white pt-32 pb-16 mt-[72px]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Where Tradition Meets Innovation</h1>
              <p className="text-xl md:text-2xl">Building South Africa's Future</p>
            </div>
            <div className="h-64 md:h-80 w-full">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
                <source src="https://cdn.pixabay.com/video/2017/03/03/8104-207208957_large.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-12">About Myaluza Civils</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-orange mb-4">Background</h3>
              <p className="text-gray-700">Myaluza Civils (PTY) LTD was established in 2012 by highly skilled professionals to form a specialized civil and construction company. We are 100% black owned.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-orange mb-4">Vision</h3>
              <p className="text-gray-700">To provide professional, effective, and cost-effective services to assist in building infrastructure in South Africa.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow mt-8">
            <h3 className="text-2xl font-bold text-orange mb-4">Mission</h3>
            <p className="text-gray-700">To build a network of clients through superior services, establishing everlasting relations, creating a sustainable environment for employees, and ensuring client confidence.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-12">Our Core Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-orange">
              <h3 className="text-2xl font-bold text-orange mb-4">Civil Engineering</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Water Reticulation</li>
                <li>• Concrete Structures</li>
                <li>• Roads & Infrastructure</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-orange">
              <h3 className="text-2xl font-bold text-orange mb-4">General Building</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• New Buildings</li>
                <li>• Renovations</li>
                <li>• Extensions</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-orange">
              <h3 className="text-2xl font-bold text-orange mb-4">Registrations & Plant</h3>
              <p className="text-gray-700 mb-4">CIDB: 5 GB PE, 6 CE PE<br/>BBBEE: Level 1</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• 2x TLB 4X4</li>
                <li>• 2x Tipper Truck</li>
                <li>• 1x Excavator</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="w-full py-16 bg-orange/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg text-center shadow">
              <div className="text-5xl font-bold text-orange mb-2">14+</div>
              <p className="text-xl text-gray-700">Years of Excellence</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow">
              <div className="text-5xl font-bold text-orange mb-2">100+</div>
              <p className="text-xl text-gray-700">Projects Completed</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow">
              <div className="text-5xl font-bold text-orange mb-2">1</div>
              <p className="text-xl text-gray-700">BBBEE Level</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
                <img src={project.img} alt={project.alt} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-navy">{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner */}
      <section className="w-full py-16 bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Innovation</h2>
          <p className="text-lg md:text-xl">Join us in building a better South Africa through cutting-edge civil engineering and construction solutions.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-12">Request Our Intelligence</h2>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mb-4 p-3 rounded border border-gray-300"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full mb-4 p-3 rounded border border-gray-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mb-4 p-3 rounded border border-gray-300"
                required
              />
              <textarea
                name="reasoning"
                placeholder="Reasoning for Request"
                value={formData.reasoning}
                onChange={handleChange}
                className="w-full mb-4 p-3 rounded border border-gray-300"
                rows="4"
                required
              />
              <button
                type="submit"
                className="w-full bg-orange text-white py-3 rounded font-bold hover:bg-orange/80 transition"
              >
                Submit
              </button>
            </form>
            {submitted && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded text-center">
                Thank You! Your request has been submitted.
              </div>
            )}
          </div>
          <div className="mt-12 text-center text-gray-700 max-w-2xl mx-auto">
            <p className="mb-2 text-sm md:text-base"><strong>Head Office:</strong> 102 Trelawney Road, Fairmade, Pietermaritzburg 3201</p>
            <p className="mb-2 text-sm md:text-base"><strong>Branch:</strong> P17 Inadi Road, Emabovini, Greytown 3250</p>
            <p className="mb-2 text-sm md:text-base"><strong>Branch:</strong> 4 Claranier House, 184 Clark Road, Glenwood, Durban 4001</p>
            <p className="mb-2 text-sm md:text-base"><strong>Cell:</strong> 078 349 2494 | 079 767 0766</p>
            <p className="text-sm md:text-base"><strong>Email:</strong> admin@myaluzacivils.co.za</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-12">Common Construction Queries</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow">
                <button
                  className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-bold text-navy">{faq.question}</span>
                  <span className="text-2xl text-orange">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-navy text-white text-center">
        <p>&copy; 2026 Myaluza Civils (Pty) Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
