import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaCamera, FaWhatsapp, FaArrowRight, FaAward, FaUsers, FaHeart, FaCheckCircle, FaComments, FaCalendarCheck, FaCameraRetro, FaEdit, FaBoxOpen, FaUserCircle } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1649829326107-0b82db54b99c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Mariage' },
    { id: 2, src: 'https://picsum.photos/seed/hero-evenement/1920/1080', alt: 'Événement' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523521803700-b3bcaeab0150?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Portrait' },
    { id: 4, src: 'https://images.unsplash.com/photo-1546314066-5d583e03265d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Produit' },
    { id: 5, src: 'https://images.unsplash.com/photo-1562713682-cde79058b2b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Mariage 2' },
    { id: 6, src: 'https://images.unsplash.com/photo-1718096551424-910dff37709f?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Événement 2' },
    { id: 7, src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Portrait 2' },
    { id: 8, src: 'https://images.unsplash.com/photo-1567136445814-c2d97f4a9674?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Produit 2' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change d'image toutes les 5 secondes

    return () => clearInterval(interval)
  }, [heroImages.length])

  const handleWhatsApp = () => {
    const phoneNumber = '243833055164'
    const message = encodeURIComponent('Bonjour, je souhaite obtenir un devis pour une séance photo.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const services = [
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Mariages',
      description: 'Capturez chaque moment magique de votre journée spéciale avec élégance et émotion.',
      features: ['Cérémonie complète', 'Séance couple', 'Album premium', 'Retouches professionnelles'],
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: 'Événements Corporate',
      description: 'Documentation professionnelle de vos événements d\'entreprise et conférences.',
      features: ['Couverture complète', 'Photos de groupe', 'Livraison express', 'Format HD'],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: <FaCamera className="text-3xl" />,
      title: 'Portraits Professionnels',
      description: 'Mettez en valeur votre image professionnelle avec des portraits de qualité.',
      features: ['Séance studio', 'Séance extérieure', 'Retouches', 'Plusieurs formats'],
      color: 'from-purple-500 to-violet-600',
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: 'Shootings Produits',
      description: 'Mise en valeur de vos produits pour vos catalogues et sites e-commerce.',
      features: ['Studio professionnel', 'Éclairage adapté', 'Photos HD', 'Fond personnalisé'],
      color: 'from-amber-500 to-orange-600',
    },
  ]

  const testimonials = [
    {
      name: 'Marie K.',
      role: 'Mariée',
      image: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      text: 'AFLORA a capturé notre mariage avec une sensibilité incroyable. Chaque photo raconte une histoire. Nous sommes ravis du résultat !',
    },
    {
      name: 'Jean-Pierre M.',
      role: 'Directeur d\'entreprise',
      image: 'https://i.pravatar.cc/150?img=2',
      rating: 5,
      text: 'Service professionnel et photos de qualité exceptionnelle pour notre événement corporate. Je recommande vivement !',
    },
    {
      name: 'Sophie L.',
      role: 'Entrepreneuse',
      image: 'https://i.pravatar.cc/150?img=3',
      rating: 5,
      text: 'Les photos de produits pour mon e-commerce sont parfaites. AFLORA a su mettre en valeur mes créations avec élégance.',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Image Slider Background */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img
                src={heroImages[currentSlide].src}
                alt={heroImages[currentSlide].alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'w-8 bg-aflora-gold'
                  : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <FaCamera className="mx-auto text-aflora-gold text-4xl md:text-5xl mb-3 drop-shadow-2xl" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight"
          >
            Capturons vos <span className="bg-gradient-to-r from-aflora-gold to-yellow-400 bg-clip-text text-transparent">moments précieux</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-3 font-light"
          >
            Photographe professionnel à Kinshasa
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            Mariages, événements, portraits et shootings produits. 
            Des images qui racontent votre histoire avec élégance et authenticité.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <Link
              to="/contact"
              className="group px-6 py-2.5 bg-aflora-gold text-white font-semibold rounded-full hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-1.5 text-sm"
            >
              Demander un devis
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button
              onClick={handleWhatsApp}
              className="group px-6 py-2.5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-1.5 border border-green-500 text-sm"
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Nos Services
            </h2>
            <div className="w-12 h-0.5 bg-aflora-gold mx-auto mb-2"></div>
            <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto">
              Des prestations d'excellence adaptées à tous vos besoins photographiques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative p-4">
                  <div className="text-aflora-gold mb-2 text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <FaCheckCircle className="text-aflora-gold mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <Link
              to="/services"
              className="inline-block px-6 py-2.5 bg-aflora-gold text-white font-semibold rounded-full hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg text-sm"
            >
              Voir tous les services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Processus de Travail */}
      <section className="py-6 md:py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Comment ça marche ?
            </h2>
            <div className="w-12 h-0.5 bg-aflora-gold mx-auto mb-2"></div>
            <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto">
              Un processus simple et transparent pour garantir votre satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 md:gap-6">
            {[
              {
                icon: <FaComments className="text-2xl" />,
                step: '1',
                title: 'Consultation',
                description: 'Échange sur vos besoins et attentes pour comprendre votre projet',
              },
              {
                icon: <FaCalendarCheck className="text-2xl" />,
                step: '2',
                title: 'Planification',
                description: 'Réservation de la date et préparation du shooting',
              },
              {
                icon: <FaCameraRetro className="text-2xl" />,
                step: '3',
                title: 'Shooting',
                description: 'Séance photo professionnelle avec matériel de pointe',
              },
              {
                icon: <FaEdit className="text-2xl" />,
                step: '4',
                title: 'Retouches',
                description: 'Sélection et retouches professionnelles des meilleures photos',
              },
              {
                icon: <FaBoxOpen className="text-2xl" />,
                step: '5',
                title: 'Livraison',
                description: 'Remise de vos photos en haute résolution selon vos délais',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-center h-full">
                  <div className="flex flex-col items-center">
                    <div className="bg-aflora-gold/10 rounded-full p-3 mb-3">
                      <div className="text-aflora-gold">
                        {item.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-aflora-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <FaArrowRight className="text-aflora-gold text-lg" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Portfolio
            </h2>
            <div className="w-12 h-0.5 bg-aflora-gold mx-auto mb-2"></div>
            <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto">
              Découvrez une sélection de nos meilleures réalisations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              'https://plus.unsplash.com/premium_photo-1727456098472-d1d43fe21c5e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1714322222085-d91583af247a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1473973916745-60839aebf06b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1649615644613-758b850399c1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1562050344-f7ad946cee35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1676535157847-132b0b10898f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1666808887221-d4a06ad2dc87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1695071621436-56c7493ccb2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Portfolio ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Témoignages Clients
            </h2>
            <div className="w-12 h-0.5 bg-aflora-gold mx-auto mb-2"></div>
            <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto">
              Ce que nos clients disent de nous
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-aflora-gold/10 flex items-center justify-center mr-2">
                    <FaUserCircle className="text-aflora-gold text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-xs">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-2 text-xs">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-aflora-gold">★</span>
                  ))}
                </div>
                <p className="text-xs text-gray-700 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Prêt à capturer vos moments précieux ?
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Contactez-nous dès aujourd'hui pour discuter de votre projet
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-aflora-gold text-white font-semibold rounded-full hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-2xl text-sm"
              >
                Demander un devis
              </Link>
              <button
                onClick={handleWhatsApp}
                className="px-5 py-2.5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-1.5 text-sm"
              >
                <FaWhatsapp size={16} />
                WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

