'use client';

const Skills = () => {
  const skills = [
    { name: 'Adobe After Effects', percentage: 95, color: 'from-red-500 to-pink-500' },
    { name: 'Adobe Premiere Pro', percentage: 92, color: 'from-pink-500 to-purple-500' },
    { name: 'Adobe Photoshop', percentage: 90, color: 'from-purple-500 to-indigo-500' },
    { name: 'Adobe Illustrator', percentage: 85, color: 'from-indigo-500 to-blue-500' },
    { name: 'CorelDRAW', percentage: 80, color: 'from-blue-500 to-cyan-500' },
    { name: 'Adobe Audition', percentage: 75, color: 'from-cyan-500 to-teal-500' },
    { name: 'Autodesk Maya', percentage: 70, color: 'from-teal-500 to-green-500' },
    { name: 'Wondershare Filmora', percentage: 65, color: 'from-green-500 to-lime-500' },
  ];

  const tools = [
    { name: 'Adobe After Effects', icon: '🎬' },
    { name: 'Adobe Premiere Pro', icon: '🎥' },
    { name: 'Adobe Photoshop', icon: '🖼️' },
    { name: 'Adobe Illustrator', icon: '✏️' },
    { name: 'CorelDRAW', icon: '🖊️' },
    { name: 'Adobe Audition', icon: '🎧' },
    { name: 'Autodesk Maya', icon: '🎨' },
    { name: 'Wondershare Filmora', icon: '🎞️' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Progress */}
          <div className="space-y-8" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Expertise</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools & Software */}
          <div className="space-y-8" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-white mb-6">Tools & Software</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="text-gray-300">{tool.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience Card */}
            <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    5+
                  </h4>
                  <p className="text-gray-300">Years of Experience</p>
                </div>
                <div className="text-4xl">🌟</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 