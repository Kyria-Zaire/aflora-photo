import { FaCamera, FaWhatsapp } from 'react-icons/fa'

const Hero = () => {
  const handleWhatsApp = () => {
    const phoneNumber = '243833055164'
    const message = encodeURIComponent('Bonjour, je souhaite obtenir un devis pour une séance photo.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-6">
          <FaCamera className="mx-auto text-aflora-gold text-5xl md:text-6xl mb-4" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
          Capturons vos moments précieux
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 text-balance">
          Photographe professionnel à Kinshasa
        </p>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto text-balance">
          Mariages, événements, portraits et shootings produits. 
          Des images qui racontent votre histoire.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-aflora-gold text-white font-semibold rounded-lg hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Demander un devis
          </a>
          
          <button
            onClick={handleWhatsApp}
            className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <FaWhatsapp size={20} />
            Contacter sur WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

