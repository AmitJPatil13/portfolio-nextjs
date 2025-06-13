'use client';

import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-20 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Profile Image */}
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-red-500/20 shadow-2xl shadow-red-500/20">
              <Image
                src="/profile-image.jpg"
                alt="Vaibhav Yeravi"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:col-span-2 space-y-6" data-aos="fade-left">
            <h2 className="text-3xl font-bold text-white mb-2">Vaibhav Yeravi</h2>
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-4">Visualizer & 3D Artist</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Creative and skilled video editor with a strong background in animation and multimedia. Proficient in various design and editing software, currently pursuing advanced education in Animation & VFX. Seeking to leverage my skills and experience to contribute to dynamic and creative projects.
            </p>

            {/* Education */}
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Education</h4>
              <ul className="space-y-1 text-gray-300 text-base">
                <li>
                  <span className="font-semibold text-white">Diploma in Animation & VFX</span> — Arena Animation FC Road, Pune
                </li>
                <li>
                  <span className="font-semibold text-white">B.Sc. in Animation Multimedia</span> — Yashwantrao Chavan Maharashtra Open University, Nashik
                </li>
                <li>
                  <span className="font-semibold text-white">HSC (Science Stream)</span> — Shri Swami Vivekanand College, Kolhapur <span className="text-gray-400">(2021)</span>
                </li>
                <li>
                  <span className="font-semibold text-white">SSC (10th)</span> — Koutuk Vidyalaya, Shiroli Pulachi, Kolhapur <span className="text-gray-400">(2019)</span>
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Experience</h4>
              <ul className="space-y-1 text-gray-300 text-base">
                <li>
                  <span className="font-semibold text-white">Video Editor</span> — Mittal Brothers Pvt Ltd, Video Editing <span className="text-gray-400">(Jan 2024 – Jul 2024)</span>
                </li>
                <li>
                  <span className="font-semibold text-white">Video Editor</span> — Inspire Academy, Video Editing and Motion Graphic <span className="text-gray-400">(Jul 2024 – Dec 2024)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 