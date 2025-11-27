import { FaCamera, FaUsers, FaBriefcase, FaShoppingBag, FaVideo } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Mariages',
      description: 'Capturez chaque moment magique de votre journée spéciale avec élégance et émotion.',
      features: ['Cérémonie complète', 'Séance couple', 'Album photo', 'Retouches professionnelles'],
    },
    {
      icon: <FaBriefcase className="text-4xl" />,
      title: 'Événements Corporate',
      description: 'Documentation professionnelle de vos événements d\'entreprise et conférences.',
      features: ['Couverture complète', 'Photos de groupe', 'Livraison rapide', 'Format HD'],
    },
    {
      icon: <FaCamera className="text-4xl" />,
      title: 'Portraits Professionnels',
      description: 'Mettez en valeur votre image professionnelle avec des portraits de qualité.',
      features: ['Séance studio', 'Séance extérieure', 'Retouches', 'Plusieurs formats'],
    },
    {
      icon: <FaShoppingBag className="text-4xl" />,
      title: 'Shootings Produits',
      description: 'Mise en valeur de vos produits pour vos catalogues et sites e-commerce.',
      features: ['Studio professionnel', 'Éclairage adapté', 'Photos HD', 'Fond personnalisé'],
    },
    {
      icon: <FaVideo className="text-4xl" />,
      title: 'Autres Prestations',
      description: 'Anniversaires, baptêmes, événements familiaux et bien plus encore.',
      features: ['Sur mesure', 'Flexible', 'Adapté à vos besoins', 'Devis personnalisé'],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <div className="w-24 h-1 bg-aflora-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des prestations adaptées à tous vos besoins photographiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="text-aflora-gold mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-aflora-gold mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-aflora-gold text-white font-semibold rounded-lg hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Demander un devis personnalisé
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services

