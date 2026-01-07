const ContactForm = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:mathew.mark.allington@gmail.com?subject=Contact from Nullscape Website';
  };

  return (
    <section id="contact" className="relative py-12 md:py-20 bg-black z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 md:mb-12">
          Discover Opportunities
        </h2>
        <p className="text-base md:text-lg text-gray-300 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          Interested in exploring synergies with nullscape? Share a few details and we will reach out promptly. Collaboration awaits!
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleContactClick}
            className="px-8 py-3 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 font-medium uppercase tracking-wide"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

