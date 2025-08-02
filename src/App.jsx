import { useState } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('resume');

  const renderSection = () => {
    switch (activeSection) {
      case 'resume':
        return <Resume />;
      case 'research':
        return <ResearchPaper />;
      default:
        return <Resume />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans antialiased text-gray-800">
      <div className="container mx-auto p-4 sm:p-8">
        <header className="bg-white rounded-xl shadow-lg p-6 mb-8 flex flex-col sm:flex-row justify-between items-center transition-all duration-300">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 tracking-tight">Ghanashyam Mandal</h1>
            <p className="text-xl sm:text-2xl font-light text-blue-600 mt-2">B. Tech in Chemical Engineering, IIT Madras</p>
          </div>
          <nav className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4">
            <button
              onClick={() => setActiveSection('resume')}
              className={`py-2 px-4 rounded-full font-medium transition-colors duration-300 ${
                activeSection === 'resume'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
              }`}
            >
              Resume
            </button>
            <button
              onClick={() => setActiveSection('research')}
              className={`py-2 px-4 rounded-full font-medium transition-colors duration-300 ${
                activeSection === 'research'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
              }`}
            >
              Research Paper
            </button>
          </nav>
        </header>

        <main className="bg-white rounded-xl shadow-lg p-6 sm:p-8 transition-all duration-300">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

const Resume = () => (
  <section id="resume">
    <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-2 border-blue-400 pb-2">Education & Achievements</h2>
    <div className="space-y-4 mb-8">
      <div className="p-4 bg-blue-50 rounded-lg shadow-inner">
        <h3 className="text-2xl font-semibold text-blue-800">Indian Institute of Technology, Madras</h3>
        <p className="text-lg text-gray-600">B. Tech in Chemical Engineering, CGPA: 8.01</p>
        <p className="text-sm text-gray-500">Expected Graduation: 2027</p>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Secured AIR 1141 in JEE Advanced 2023 (SC Category) among 180,000+ national aspirants.</li>
        <li>Qualified for the highly selective Dakshana Foundation's JEE Scholars Program in 2021.</li>
      </ul>
    </div>
    
    <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-2 border-blue-400 pb-2">Skills</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div className="p-4 bg-purple-50 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold text-purple-800">Programming & Tools</h3>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Python, C, R</li>
          <li>MATLAB, MS Office, Aspen</li>
          <li>MySQL, BigQuery</li>
        </ul>
      </div>
      <div className="p-4 bg-purple-50 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold text-purple-800">AI & Web Development</h3>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>ChatGPT, Gemini, Perplexity</li>
          <li>HTML, CSS</li>
          <li>Tableau, Rstudio</li>
        </ul>
      </div>
      <div className="p-4 bg-purple-50 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold text-purple-800">Technical Skills</h3>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Data analytics and Visualisation</li>
          <li>Computational Programming & Process Simulation</li>
          <li>Libraries: Pandas, NumPy, Matplotlib, cv2, Mediapipe, Numpy, Pygame</li>
        </ul>
      </div>
    </div>
    
    <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-2 border-blue-400 pb-2">Research & Technical Projects</h2>
    <div className="space-y-6">
      <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800">Interfacial Transport Phenomena</h3>
        <p className="text-sm text-gray-500">Analysed interfacial transport via mathematical models for multiphase systems.</p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Investigated interfacial instabilities like Rayleigh-Taylor and Kelvin-Helmholtz for mixing and multi-phase transport effects.</li>
          <li>Employed LDA and high-speed imaging in fluid dynamics for a rapid interfacial phenomena.</li>
          <li>Enhanced heat and mass transfer through liquid film surface waves, observing an increase in interfacial area and turbulence.</li>
        </ul>
      </div>
      <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800">Non-Newtonian Nanofluids for Enhanced Heat Transfer</h3>
        <p className="text-sm text-gray-500">Investigated nanofluid temperature/velocity profiles to understand Heat Transfer Mechanism.</p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Applied Power-Law Model and other relevant models for heat transfer analysis.</li>
          <li>Analyzed nanofluid heat transfer characteristics, noting an increase with volume fraction and a decrease with non-newtonian parameters.</li>
        </ul>
      </div>
      <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800">Solubility of Non-polar gases in Ethylene Oxide</h3>
        <p className="text-sm text-gray-500">Investigated solubility of Nitrogen, Argon, methane, and ethane in ethylene oxide.</p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Achieved solubility data accuracy within ±0.1°C, with a precision of 2.4% and error propagation between 0.2% -3.3%.</li>
          <li>Utilized advanced gas chromatography techniques to measure solubility.</li>
        </ul>
      </div>
    </div>
    
    <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-2 border-blue-400 pb-2 mt-8">Experience</h2>
    <div className="p-4 bg-green-50 rounded-lg shadow-inner">
      <h3 className="text-xl font-semibold text-green-800">Manager & Associate Manager, M&PR, E-Cell IITM</h3>
      <p className="text-gray-600 mt-1">Co-managed and executed marketing and public relations initiatives for major events, boosting brand visibility and audience engagement.</p>
    </div>
  </section>
);

const ResearchPaper = () => (
  <section id="research-paper">
    <h2 className="text-3xl font-bold text-gray-700 mb-6 border-b-2 border-blue-400 pb-2">Research Paper: Draft</h2>
    <a
        href="/ghanashyam-portfolio/research-paper.pdf"
        download="Ghanashyam-Mandal-Research-Paper.pdf"
        className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
      >
        Download PDF
      </a>
    <div className="p-6 bg-yellow-50 rounded-lg shadow-inner border-l-4 border-yellow-400 mb-6">
      <p className="text-xl font-medium text-yellow-800">
        <span className="font-bold">Status:</span> This research paper is a draft and has not yet been submitted for publication.
      </p>
    </div>

    <h3 className="text-2xl font-semibold text-blue-800 mb-4">
      Development of Advanced Materials for Enhanced Radiation Hardness in Future Reactors: A Chemical Engineering Perspective on Synthesis and Characterization
    </h3>

    <div className="space-y-6 text-gray-700">
      <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
        <p><span className="font-bold">Abstract:</span> Global energy demand is rapidly escalating, driven by population growth and industrialization, leading to critical environmental challenges such as resource depletion and climate change. Transitioning to sustainable, low-carbon energy sources is imperative for a greener future. While renewable energy technologies like solar and wind are vital, their intermittent nature necessitates stable, high-capacity alternatives. Nuclear energy offers a robust, carbon-neutral solution, providing reliable baseload power with minimal land footprint. However, maximizing its contribution to a sustainable energy mix requires significant advancements in reactor technology. This paper addresses this imperative by exploring the Chemical Engineering principles governing the synthesis and characterization of advanced materials for enhanced radiation hardness in next-generation nuclear reactors. By focusing on improving material lifespan and efficiency, this work aims to explore and highlight safer, more sustainable, and economically viable nuclear power solutions.</p>
      </div>

      <h4 className="text-xl font-bold text-gray-600">Introduction</h4>
      <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
        <p>The increasing global demand for sustainable and low-carbon energy sources positions nuclear power as a critical component of future energy infrastructure. However, the long-term operational integrity and economic viability of nuclear reactors are fundamentally limited by the degradation of their structural materials under harsh in-core environments. A primary challenge stems from radiation damage induced by high-energy neutron bombardment.</p>
      </div>

      <h4 className="text-xl font-bold text-gray-600">Nuclear Reactor: Types</h4>
      <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
        <p>To contextualize the material challenges faced by nuclear power, it is essential to first understand the categorization and operational evolution of nuclear reactor designs. Reactors are broadly classified into generations based on their technological advancement and design characteristics:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Generation I: Early prototype reactors developed in the 1950s and 60s.</li>
          <li>Generation II: The backbone of the current global nuclear fleet, including PWRs, BWRs, and CANDU.</li>
          <li>Generation III / III+: Evolutionary designs with enhanced safety and efficiency.</li>
          <li>Generation IV: Advanced concepts currently under research and development.</li>
        </ul>
      </div>

      <h4 className="text-xl font-bold text-gray-600">Conclusion</h4>
      <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
        <p>In conclusion, the escalating global energy demand and the imperative for a sustainable, low-carbon future have positioned nuclear energy as a critical and robust solution. However, achieving the full potential of this technology hinges on overcoming the long-standing challenge of material degradation in harsh radiation environments. This paper has explored the indispensable role of Chemical Engineering in addressing this challenge, not only through the rational design and synthesis of advanced materials like ODS alloys and SiC composites but also through their comprehensive characterization and performance evaluation. By leveraging modern fabrication methods and advanced analytical techniques, engineers can create materials with superior radiation hardness and longevity. The insights and methodologies discussed here are not confined to nuclear reactors. The fundamental understanding of radiation-material interactions and the engineering principles applied to develop resilient materials are directly applicable to other extreme radiation environments, including those found in cutting-edge research facilities. By contributing to this interdisciplinary field, I aim to apply my chemical engineering expertise to the development of safer and more sustainable energy solutions, and to advance the frontiers of science in world-class research environments such as CERN.</p>
      </div>
    </div>
  </section>
);

const ResumeAndResearchPaper = () => (
  <div className="flex flex-col lg:flex-row gap-8">
    <div className="lg:w-1/2">
      <Resume />
    </div>
    <div className="lg:w-1/2">
      <ResearchPaper />
    </div>
  </div>
);

export default App;
