'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const socialLinks = [
    { icon: faGithub, url: 'https://github.com' },
    { icon: faLinkedin, url: 'https://linkedin.com' },
    { icon: faTwitter, url: 'https://twitter.com' },
    { icon: faInstagram, url: 'https://instagram.com' },
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8" data-aos="fade-right">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                    Vaibhav Yeravi
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300">
                  Visualizer & 3D Artist
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Creative and skilled video editor with a strong background in animation and multimedia. Proficient in various design and editing software, currently pursuing advanced education in Animation & VFX. Seeking to leverage my skills and experience to contribute to dynamic and creative projects.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/30 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Get in Touch</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </a>
                <a
                  href="#about"
                  className="px-8 py-3 bg-gray-800/50 text-white rounded-full font-semibold hover:bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 transform hover:scale-110 transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative" data-aos="fade-left">
              <div className="relative z-10">
                <div className="w-full aspect-square rounded-2xl overflow-hidden border-4 border-red-500/20 shadow-2xl shadow-red-500/20 transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/profile-image.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-red-500 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-red-500 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 