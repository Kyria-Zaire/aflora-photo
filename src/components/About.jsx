import { FaAward, FaCameraRetro, FaHeart } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: <FaCameraRetro className="text-4xl text-aflora-gold" />,
      title: 'Expérience',
      description: 'Des années d\'expérience dans la photographie professionnelle',
    },
    {
      icon: <FaAward className="text-4xl text-aflora-gold" />,
      title: 'Qualité',
      description: 'Matériel professionnel et retouches soignées',
    },
    {
      icon: <FaHeart className="text-4xl text-aflora-gold" />,
      title: 'Passion',
      description: 'Une passion pour capturer l\'émotion et l\'authenticité',
    },
  ]

  return (
    <section id="apropos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            À Propos d'AFLORA
          </h2>
          <div className="w-24 h-1 bg-aflora-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez l'histoire et la vision derrière chaque cliché
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Votre photographe de confiance à Kinshasa
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              AFLORA est un photographe freelance passionné basé à Kinshasa, 
              spécialisé dans la capture de moments précieux et authentiques. 
              Que ce soit pour votre mariage, un événement corporate, 
              un portrait professionnel ou un shooting produit, nous mettons 
              notre expertise au service de votre vision.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Notre approche allie créativité, professionnalisme et attention 
              aux détails. Chaque projet est unique et mérite un traitement 
              sur mesure pour mettre en valeur vos moments les plus importants.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nous travaillons avec du matériel professionnel de dernière 
              génération et offrons des retouches soignées pour garantir 
              des résultats à la hauteur de vos attentes.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
              {/* Placeholder pour image du photographe */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <FaCameraRetro className="text-8xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

