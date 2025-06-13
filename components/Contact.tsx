'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const contactInfo = [
    {
      icon: faEnvelope,
      title: 'Email',
      value: 'vyeravi@gmail.com',
      link: 'mailto:vyeravi@gmail.com',
    },
    {
      icon: faPhone,
      title: 'Phone',
      value: '+91 8767344146',
      link: 'tel:+918767344146',
    },
    {
      icon: faMapMarkerAlt,
      title: 'Location',
      value: 'Kolhapur, Maharashtra, India',
      link: 'https://maps.google.com/?q=Kolhapur,Maharashtra,India',
    },
  ];

  const socialLinks = [
    {
      icon: faFacebook,
      url: 'https://facebook.com/your-profile',
      label: 'Facebook',
    },
    {
      icon: faTwitter,
      url: 'https://twitter.com/your-profile',
      label: 'Twitter',
    },
    {
      icon: faInstagram,
      url: 'https://instagram.com/your-profile',
      label: 'Instagram',
    },
    {
      icon: faLinkedin,
      url: 'https://linkedin.com/in/your-profile',
      label: 'LinkedIn',
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Touch</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Feel free to reach out to me for any questions or opportunities. I&apos;m always open to discussing new projects and ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-right">
            {/* Contact Info Cards */}
            <div className="bg-gray-800/50 p-8 rounded-3xl backdrop-blur-sm border border-gray-700/50 shadow-xl shadow-black/20">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-5 p-5 rounded-2xl bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 group hover:shadow-lg hover:shadow-yellow-500/10"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 p-3.5 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-yellow-500/20">
                      <FontAwesomeIcon icon={info.icon} className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm font-medium mb-1">{info.title}</h4>
                      <p className="text-white font-semibold text-lg">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-gray-800/50 p-8 rounded-3xl backdrop-blur-sm border border-gray-700/50 shadow-xl shadow-black/20">
              <h3 className="text-2xl font-bold text-white mb-8">Follow Me</h3>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl bg-gray-700/30 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-yellow-500/20"
                    aria-label={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-7 h-7 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map or Additional Content */}
          <div className="bg-gray-800/50 p-8 rounded-3xl backdrop-blur-sm border border-gray-700/50 shadow-xl shadow-black/20 h-full" data-aos="fade-left">
            <div className="aspect-square w-full rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61254.98684578544!2d74.19489755!3d16.70569965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709912345678!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 