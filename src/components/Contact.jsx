import { useState } from 'react'
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

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

    // Simuler l'envoi du formulaire
    // Dans un vrai projet, vous utiliseriez un service comme Formspree, EmailJS, ou votre backend
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      
      // Option: Rediriger vers WhatsApp avec les données du formulaire
      const phoneNumber = '243833055164'
      const message = encodeURIComponent(
        `Bonjour, je suis ${formData.name}.\n` +
        `Email: ${formData.email}\n` +
        `Téléphone: ${formData.phone}\n` +
        `Service: ${formData.service}\n\n` +
        `Message: ${formData.message}`
      )
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })
    }, 1000)
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '243833055164'
    const message = encodeURIComponent('Bonjour, je souhaite obtenir un devis pour une séance photo.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact & Devis
          </h2>
          <div className="w-24 h-1 bg-aflora-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discutons de votre projet et obtenez un devis personnalisé
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aflora-gold focus:border-transparent outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aflora-gold focus:border-transparent outline-none transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aflora-gold focus:border-transparent outline-none transition-all"
                  placeholder="+243 833 055 164"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Type de service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aflora-gold focus:border-transparent outline-none transition-all"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="mariage">Mariage</option>
                  <option value="evenement">Événement Corporate</option>
                  <option value="portrait">Portrait Professionnel</option>
                  <option value="produit">Shooting Produit</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aflora-gold focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-aflora-gold text-white font-semibold rounded-lg hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">
                  ✓ Message envoyé ! Vous allez être redirigé vers WhatsApp.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informations de contact
              </h3>
              <p className="text-gray-600 mb-8">
                N'hésitez pas à nous contacter pour discuter de votre projet. 
                Nous répondons rapidement à toutes vos demandes.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="https://wa.me/243833055164"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
              >
                <div className="bg-green-600 p-3 rounded-lg mr-4 group-hover:bg-green-700 transition-colors">
                  <FaWhatsapp className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <p className="text-gray-600">+243 833 055 164</p>
                </div>
              </a>

              <a
                href="mailto:contact@aflora-photo.com"
                className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <div className="bg-blue-600 p-3 rounded-lg mr-4 group-hover:bg-blue-700 transition-colors">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">contact@aflora-photo.com</p>
                </div>
              </a>

              <a
                href="tel:+243833055164"
                className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
              >
                <div className="bg-purple-600 p-3 rounded-lg mr-4 group-hover:bg-purple-700 transition-colors">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Téléphone</p>
                  <p className="text-gray-600">+243 833 055 164</p>
                </div>
              </a>

              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="bg-gray-600 p-3 rounded-lg mr-4">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Localisation</p>
                  <p className="text-gray-600">Kinshasa, République Démocratique du Congo</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="w-full px-6 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={20} />
              Contacter directement sur WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

