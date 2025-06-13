'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faPaintBrush, faFilm, faCamera, faCode, faPalette } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    {
      icon: faVideo,
      title: 'Video Editing',
      description: 'Professional video editing services including color grading, motion graphics, and special effects.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: faPaintBrush,
      title: 'Graphic Design',
      description: 'Creative graphic design solutions for logos, branding, social media, and marketing materials.',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: faFilm,
      title: 'Motion Graphics',
      description: 'Engaging motion graphics and animations for videos, presentations, and digital content.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: faCamera,
      title: 'Photo Editing',
      description: 'Professional photo retouching, color correction, and enhancement services.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: faCode,
      title: 'Web Design',
      description: 'Modern and responsive web design with focus on user experience and visual appeal.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: faPalette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality.',
      color: 'from-cyan-500 to-teal-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 mb-6 transform group-hover:rotate-6 transition-transform duration-300`}>
                <FontAwesomeIcon icon={service.icon} className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-gray-400 text-lg mb-6">
            Ready to bring your ideas to life? Let&apos;s create something amazing together!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services; 