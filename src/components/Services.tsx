const Services = () => {
  const baseUrl = import.meta.env.BASE_URL;
  
  const services = [
    {
      title: 'Workflow Automation',
      description: 'Streamline your print processes with our advanced automation solutions designed to increase efficiency and reduce costs. From initial design to final output, experience seamless integration.',
      image: `${baseUrl}assets/workflow-automation.jpg`,
    },
    {
      title: 'Intelligent Hardware Integration',
      description: 'Upgrade your press hardware with smart technology. We collaborate with leading manufacturers to integrate intelligent systems that enhance performance and scalability',
      image: `${baseUrl}assets/intelligent-hardware.png`,
    },
    {
      title: 'Pre-press Optimization',
      description: 'Optimise your pre-press operations with our tailored solutions that ensure precision and quality. Our technology refines every step, preparing your workflows for a flawless print process.',
      image: `${baseUrl}assets/prepress-optimization.png`,
    },
  ];

  return (
    <section id="services" className="relative py-12 md:py-20 bg-black z-10 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12" style={{ color: '#ffffff' }}>
          Transformative Print Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: '#111827' }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4" style={{ color: '#ffffff' }}>
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed" style={{ color: '#d1d5db' }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

