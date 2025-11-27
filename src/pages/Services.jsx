import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaUsers, FaBriefcase, FaCamera, FaShoppingBag, FaCheckCircle, FaClock, FaArrowRight, FaImages } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      id: 'mariage',
      icon: <FaUsers className="text-2xl" />,
      title: 'Mariages',
      description: 'Capturez chaque moment magique de votre journée spéciale avec élégance et émotion.',
      duration: '8-12 heures',
      included: [
        'Cérémonie complète (religieuse et civile)',
        'Séance photo couple avant/après',
        'Photos de groupe et famille',
        'Réception et soirée',
        'Retouches professionnelles',
        'Livraison sur clé USB premium',
        'Album photo numérique',
      ],
      process: [
        'Consultation préalable pour comprendre vos attentes',
        'Repérage des lieux si nécessaire',
        'Prise de vue le jour J avec discrétion',
        'Sélection et retouche des meilleures photos',
        'Livraison dans les 3-4 semaines',
      ],
      examples: [1, 2, 3, 4, 5],
      exampleImages: [
        'https://images.unsplash.com/photo-1695281536457-01f9a07c575b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1665416557437-6dd757e90ce8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1551963319-13ff32a5acd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1529519195486-16945f0fb37f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1661332214118-8c4e8275cd45?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 'corporate',
      icon: <FaBriefcase className="text-2xl" />,
      title: 'Événements Corporate',
      description: 'Documentation professionnelle de vos événements d\'entreprise et conférences.',
      duration: 'Selon l\'événement',
      included: [
        'Couverture complète de l\'événement',
        'Photos de groupe et networking',
        'Photos des intervenants et conférences',
        'Photos produits/services si nécessaire',
        'Retouches professionnelles',
        'Livraison express (24-48h possible)',
        'Format HD pour tous usages',
      ],
      process: [
        'Briefing sur les objectifs et attentes',
        'Planification de la couverture',
        'Prise de vue professionnelle',
        'Sélection rapide des meilleures photos',
        'Livraison selon vos délais',
      ],
      examples: [4, 5, 6, 7, 8],
      exampleImages: [
        'https://images.unsplash.com/photo-1729656612691-912891170735?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1719606545052-a2b9edf85ae2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1670213193254-cbbebedfe8b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1606311199519-bfe0dddc53dd?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1665938208144-f1b23bc079fc?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 'portrait',
      icon: <FaCamera className="text-2xl" />,
      title: 'Portraits Professionnels',
      description: 'Mettez en valeur votre image professionnelle avec des portraits de qualité.',
      duration: '1-2 heures',
      included: [
        'Séance studio ou extérieure',
        'Plusieurs tenues possibles',
        'Retouches professionnelles',
        'Plusieurs formats (LinkedIn, CV, etc.)',
        'Photos en haute résolution',
        'Conseils en pose et style',
      ],
      process: [
        'Échange sur votre image souhaitée',
        'Choix du lieu (studio ou extérieur)',
        'Séance photo guidée',
        'Sélection des meilleures prises',
        'Retouches et livraison',
      ],
      examples: [7, 8, 9, 10, 11],
      exampleImages: [
        'https://images.unsplash.com/photo-1588747020836-451633b46e87?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1652002039648-8e2026e099cb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1606208397693-7d57d408cc4e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1677396700393-9d4ccd542e66?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1696865274634-b5b794ee5bb4?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      color: 'from-purple-500 to-violet-600',
    },
    {
      id: 'produit',
      icon: <FaShoppingBag className="text-2xl" />,
      title: 'Shootings Produits',
      description: 'Mise en valeur de vos produits pour vos catalogues et sites e-commerce.',
      duration: 'Selon le nombre de produits',
      included: [
        'Studio professionnel avec éclairage adapté',
        'Plusieurs angles de vue',
        'Fond blanc ou personnalisé',
        'Retouches professionnelles',
        'Photos en haute résolution',
        'Format adapté web et print',
      ],
      process: [
        'Analyse de vos produits et besoins',
        'Préparation du studio et éclairage',
        'Prise de vue sous plusieurs angles',
        'Retouches et nettoyage des images',
        'Livraison format optimisé',
      ],
      examples: [10, 11, 12, 13, 14],
      exampleImages: [
        'https://images.unsplash.com/photo-1663046068883-cffb76cc5855?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1761732663924-0ff85ca066ee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1589907480185-9eb432e22c3a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1516047001178-6dcd2a01c694?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1625191824758-e00b2c51f388?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
      color: 'from-amber-500 to-orange-600',
    },
  ]

  return (
    <div>
      {/* Hero Section avec Image de Fond */}
      <section className="relative min-h-[22vh] md:min-h-[26vh] flex items-center justify-center overflow-hidden mt-16 md:mt-20">
        {/* Image de Fond */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="AFLORA Services"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Overlay sombre pour la lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
          {/* Overlay avec accent doré */}
          <div className="absolute inset-0 bg-gradient-to-t from-aflora-gold/10 via-transparent to-transparent"></div>
        </div>

        {/* Contenu */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="py-3 md:py-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-1.5"
            >
              <FaImages className="mx-auto text-aflora-gold text-xl md:text-2xl mb-1 drop-shadow-lg" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 drop-shadow-lg"
            >
              Nos Services
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-10 h-0.5 bg-aflora-gold mx-auto mb-1.5"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            >
              Des prestations complètes adaptées à tous vos besoins photographiques
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-4 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: serviceIndex * 0.2 }}
              className="mb-5 last:mb-0"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Service Header */}
                <div className="bg-black p-3 md:p-4">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                    <div className="text-white text-xl">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg md:text-xl font-bold text-white mb-1">
                        {service.title}
                      </h2>
                      <p className="text-white/90 text-xs">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 md:p-4">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {/* Description et Processus */}
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <FaClock className="text-aflora-gold text-sm" />
                        Durée de la prestation
                      </h3>
                      <p className="text-gray-700 mb-3 text-xs">
                        {service.duration}
                      </p>

                      <h3 className="text-base font-bold text-gray-900 mb-2">
                        Processus de travail
                      </h3>
                      <ul className="space-y-1.5">
                        {service.process.map((step, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="bg-aflora-gold text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              {index + 1}
                            </span>
                            <span className="text-xs text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ce qui est inclus */}
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <FaCheckCircle className="text-aflora-gold text-sm" />
                        Ce qui est inclus
                      </h3>
                      <ul className="space-y-1">
                        {service.included.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <FaCheckCircle className="text-aflora-gold mt-0.5 flex-shrink-0 text-xs" />
                            <span className="text-xs text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Exemples de réalisations */}
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      Exemples de réalisations
                    </h3>
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-1.5">
                      {service.examples.map((example, index) => (
                        <div
                          key={index}
                          className="aspect-square bg-gray-200 rounded-md overflow-hidden group cursor-pointer"
                        >
                          <img
                            src={service.exampleImages && service.exampleImages[index] 
                              ? service.exampleImages[index]
                              : `https://picsum.photos/seed/${service.id}-${example}/300/300`}
                            alt={`${service.title} ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 md:py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Intéressé par nos services ?
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mb-4">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-aflora-gold text-white font-semibold rounded-full hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto text-sm"
            >
              Demander un devis
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services

