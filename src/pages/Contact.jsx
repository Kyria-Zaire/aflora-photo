import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaCheckCircle, FaQuestionCircle, FaChevronDown, FaChevronUp, FaDollarSign, FaFileImage, FaLightbulb, FaInfoCircle } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [openFAQ, setOpenFAQ] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      
      const phoneNumber = '243833055164'
      const message = encodeURIComponent(
        `Bonjour, je suis ${formData.name}.\n` +
        `Email: ${formData.email}\n` +
        `Téléphone: ${formData.phone}\n` +
        `Service: ${formData.service}\n` +
        `Date souhaitée: ${formData.date}\n\n` +
        `Message: ${formData.message}`
      )
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: '',
      })
    }, 1000)
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '243833055164'
    const message = encodeURIComponent('Bonjour, je souhaite obtenir un devis pour une séance photo.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const contactInfo = [
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      content: '+243 833 055 164',
      link: 'https://wa.me/243833055164',
      color: 'bg-green-600',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'contact@aflora-photo.com',
      link: 'mailto:contact@aflora-photo.com',
      color: 'bg-blue-600',
    },
    {
      icon: <FaPhone />,
      title: 'Téléphone',
      content: '+243 833 055 164',
      link: 'tel:+243833055164',
      color: 'bg-purple-600',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Localisation',
      content: 'Kinshasa, RDC',
      link: null,
      color: 'bg-gray-600',
    },
  ]

  return (
    <div>
      {/* Hero Section avec Image de Fond */}
      <section className="relative min-h-[22vh] md:min-h-[26vh] flex items-center justify-center overflow-hidden mt-16 md:mt-20">
        {/* Image de Fond */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1740560051533-3acef26ace95?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="AFLORA Contact"
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
              <FaEnvelope className="mx-auto text-aflora-gold text-xl md:text-2xl mb-1 drop-shadow-lg" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 drop-shadow-lg"
            >
              Contactez-nous
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
              Discutons de votre projet et obtenez un devis personnalisé
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Demandez votre devis
              </h2>
              <p className="text-xs text-gray-600 mb-4">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-gray-700 mb-1.5"
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-aflora-gold focus:border-transparent outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-gray-700 mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-aflora-gold focus:border-transparent outline-none transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium text-gray-700 mb-1.5"
                    >
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-aflora-gold focus:border-transparent outline-none transition-all"
                      placeholder="+243 833 055 164"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-medium text-gray-700 mb-1.5"
                    >
                      Type de service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-aflora-gold focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="mariage">Mariage</option>
                      <option value="evenement">Événement Corporate</option>
                      <option value="portrait">Portrait Professionnel</option>
                      <option value="produit">Shooting Produit</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-xs font-medium text-gray-700 mb-1.5"
                  >
                    Date souhaitée
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-aflora-gold focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-gray-700 mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-aflora-gold focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Décrivez votre projet en détail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-aflora-gold text-white font-semibold rounded-lg hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FaCheckCircle />
                      Envoyer la demande
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-center gap-2"
                  >
                    <FaCheckCircle />
                    Message envoyé ! Vous allez être redirigé vers WhatsApp.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Informations de contact
                </h2>
                <p className="text-xs text-gray-600 mb-4">
                  N'hésitez pas à nous contacter pour discuter de votre projet. 
                  Nous répondons rapidement à toutes vos demandes.
                </p>
              </div>

              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link || '#'}
                    target={info.link ? '_blank' : '_self'}
                    rel={info.link ? 'noopener noreferrer' : ''}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`flex items-center p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-all group ${
                      !info.link ? 'cursor-default' : 'cursor-pointer'
                    }`}
                  >
                    <div className={`${info.color} p-3 rounded-lg mr-3 group-hover:scale-110 transition-transform`}>
                      <div className="text-white text-lg">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{info.title}</p>
                      <p className="text-xs text-gray-600">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.button
                onClick={handleWhatsAppClick}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-5 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all shadow-lg flex items-center justify-center gap-2 text-sm"
              >
                <FaWhatsapp size={18} />
                Contacter directement sur WhatsApp
              </motion.button>

              {/* About Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black rounded-lg p-4 text-white"
              >
                <h3 className="text-lg font-bold mb-2">À Propos d'AFLORA</h3>
                <p className="text-xs text-gray-300 mb-2 leading-relaxed">
                  Photographe professionnel basé à Kinshasa, spécialisé dans la capture 
                  de moments précieux et authentiques. Nous mettons notre expertise au 
                  service de votre vision avec créativité et professionnalisme.
                </p>
                <div className="flex items-center gap-2 text-aflora-gold text-sm">
                  <FaClock />
                  <span>Réponse sous 24h</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 md:py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaQuestionCircle className="text-aflora-gold text-2xl" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Questions Fréquentes
              </h2>
            </div>
            <div className="w-12 h-0.5 bg-aflora-gold mx-auto mb-3"></div>
            <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto">
              Trouvez rapidement les réponses à vos questions
            </p>
          </motion.div>

          {/* Tarifs, Délais, Formats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <FaDollarSign className="text-aflora-gold text-lg" />
              <h3 className="text-lg font-bold text-gray-900">Tarifs, Délais & Formats</h3>
            </div>
            <div className="space-y-2">
              {[
                {
                  q: 'Quels sont vos tarifs ?',
                  a: 'Nos tarifs varient selon le type de prestation et la durée. Pour un devis personnalisé adapté à votre projet, contactez-nous via le formulaire ou WhatsApp. Nous proposons des packages adaptés à tous les budgets.',
                },
                {
                  q: 'Quels sont les délais de livraison ?',
                  a: 'Les délais varient selon le type de prestation : Mariages (3-4 semaines), Événements corporate (24-48h possible pour livraison express), Portraits (1 semaine), Shootings produits (3-5 jours). Des délais plus courts peuvent être négociés selon vos besoins.',
                },
                {
                  q: 'Dans quels formats recevrai-je mes photos ?',
                  a: 'Vous recevrez vos photos en haute résolution (format JPG) sur une clé USB premium. Les photos sont également disponibles en format numérique via un lien de téléchargement sécurisé. Nous pouvons également fournir les photos en format RAW sur demande.',
                },
                {
                  q: 'Proposez-vous des packages ou des tarifs à l\'heure ?',
                  a: 'Nous proposons des packages complets pour chaque type de prestation, incluant la prise de vue, les retouches et la livraison. Des options à l\'heure sont disponibles pour certaines prestations. Contactez-nous pour connaître les détails.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === `tarifs-${index}` ? null : `tarifs-${index}`)}
                    className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-xs">{faq.q}</span>
                    {openFAQ === `tarifs-${index}` ? (
                      <FaChevronUp className="text-aflora-gold flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === `tarifs-${index}` && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-4"
                    >
                      <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Conseils pour préparer une séance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <FaLightbulb className="text-aflora-gold text-lg" />
              <h3 className="text-lg font-bold text-gray-900">Conseils pour Préparer une Séance</h3>
            </div>
            <div className="space-y-2">
              {[
                {
                  q: 'Comment préparer une séance photo de mariage ?',
                  a: 'Planifiez un appel ou une rencontre 2-3 semaines avant le jour J pour discuter du programme, des lieux et de vos attentes. Préparez une liste des photos de groupe souhaitées. Assurez-vous que les lieux sont accessibles et que l\'éclairage est adapté. Prévoyez un plan B en cas de mauvais temps pour les photos extérieures.',
                },
                {
                  q: 'Que dois-je apporter pour une séance portrait ?',
                  a: 'Apportez 2-3 tenues différentes (une formelle, une décontractée). Évitez les motifs trop chargés. Pour les hommes, pensez à vous raser ou entretenir votre barbe. Pour les femmes, un maquillage naturel fonctionne mieux. Nous pouvons vous conseiller sur les couleurs et styles selon le contexte.',
                },
                {
                  q: 'Comment préparer mes produits pour un shooting ?',
                  a: 'Nettoyez soigneusement vos produits. Apportez plusieurs exemplaires si possible. Préparez une liste des angles de vue souhaités. Si vous avez des références visuelles, partagez-les avec nous. Pour les produits alimentaires, prévoyez des versions fraîches pour les photos.',
                },
                {
                  q: 'Faut-il réserver longtemps à l\'avance ?',
                  a: 'Nous recommandons de réserver au moins 2-3 semaines à l\'avance, surtout pour les mariages et événements en haute saison. Pour les portraits et shootings produits, une semaine peut suffire. Contactez-nous pour vérifier notre disponibilité.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === `conseils-${index}` ? null : `conseils-${index}`)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                    {openFAQ === `conseils-${index}` ? (
                      <FaChevronUp className="text-aflora-gold flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === `conseils-${index}` && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-4"
                    >
                      <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Informations Pratiques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <FaInfoCircle className="text-aflora-gold text-lg" />
              <h3 className="text-lg font-bold text-gray-900">Informations Pratiques</h3>
            </div>
            <div className="space-y-2">
              {[
                {
                  q: 'Travaillez-vous en dehors de Kinshasa ?',
                  a: 'Oui, nous nous déplaçons dans toute la RDC pour vos événements. Des frais de déplacement peuvent s\'appliquer selon la distance. Contactez-nous pour un devis personnalisé incluant les frais de déplacement.',
                },
                {
                  q: 'Que se passe-t-il en cas d\'annulation ?',
                  a: 'En cas d\'annulation plus de 15 jours avant l\'événement, aucun frais n\'est retenu. Entre 15 et 7 jours, 30% du montant est dû. Moins de 7 jours, 50% du montant est dû. En cas de force majeure, nous trouvons une solution ensemble.',
                },
                {
                  q: 'Proposez-vous des retouches ?',
                  a: 'Oui, toutes nos prestations incluent des retouches professionnelles de base (correction des couleurs, exposition, contraste). Des retouches avancées (suppression d\'éléments, retouches peau, etc.) sont disponibles en option.',
                },
                {
                  q: 'Puis-je utiliser les photos pour mes réseaux sociaux ?',
                  a: 'Absolument ! Vous recevez les droits d\'utilisation des photos pour votre usage personnel et professionnel (réseaux sociaux, site web, marketing). Nous demandons simplement une mention "Photo par AFLORA" si possible.',
                },
                {
                  q: 'Acceptez-vous les paiements en plusieurs fois ?',
                  a: 'Oui, nous proposons des facilités de paiement. Un acompte de 30-50% est demandé à la réservation, le solde étant dû avant ou le jour de la prestation. Des arrangements peuvent être discutés selon votre situation.',
                },
                {
                  q: 'Quelle est votre zone d\'intervention ?',
                  a: 'Nous intervenons principalement à Kinshasa et dans les environs. Pour les événements en province, nous nous déplaçons sur demande. Les frais de déplacement sont inclus dans le devis.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === `infos-${index}` ? null : `infos-${index}`)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                    {openFAQ === `infos-${index}` ? (
                      <FaChevronUp className="text-aflora-gold flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === `infos-${index}` && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-4"
                    >
                      <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-black rounded-lg p-4 text-white text-center"
          >
            <h3 className="text-lg font-bold mb-2">Vous avez d'autres questions ?</h3>
            <p className="text-xs text-gray-300 mb-3">
              N'hésitez pas à nous contacter, nous répondons rapidement à toutes vos demandes.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all shadow-lg text-sm"
            >
              <FaWhatsapp size={16} />
              Nous contacter sur WhatsApp
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact

