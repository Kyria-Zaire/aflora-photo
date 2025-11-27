import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import logo from '../images/61462b94-2bdf-42bd-bcf9-6fcf199fec5b-removebg-preview.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaFacebook />, href: '#', label: 'Facebook' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/243833055164', label: 'WhatsApp' },
  ]

  const quickLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'À Propos' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Brand Section */}
          <div>
            <Link to="/" className="inline-block mb-3">
              <img
                src={logo}
                alt="AFLORA Logo"
                className="h-24 md:h-28 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-3">
              Photographe professionnel à Kinshasa, RDC. 
              Capturons vos moments précieux avec passion et expertise.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-gray-400 hover:text-aflora-gold transition-colors text-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-3">Liens Rapides</h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-aflora-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-base mb-3">Contact</h4>
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li>Kinshasa, RDC</li>
              <li>
                <a
                  href="mailto:contact@aflora-photo.com"
                  className="hover:text-aflora-gold transition-colors"
                >
                  contact@aflora-photo.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+243833055164"
                  className="hover:text-aflora-gold transition-colors"
                >
                  +243 833 055 164
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} AFLORA. Tous droits réservés. | 
            <Link to="/mentions-legales" className="hover:text-aflora-gold transition-colors ml-1">
              Mentions légales
            </Link>
            {' | '}
            <Link to="/politique-confidentialite" className="hover:text-aflora-gold transition-colors">
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

