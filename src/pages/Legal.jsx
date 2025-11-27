import { motion } from 'framer-motion'
import { FaGavel, FaShieldAlt, FaFileContract } from 'react-icons/fa'

const Legal = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-6 md:py-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaFileContract className="mx-auto text-aflora-gold text-3xl md:text-4xl mb-3" />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              Mentions Légales
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
              Informations légales et conditions d'utilisation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Éditeur du site */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <FaGavel className="text-aflora-gold text-xl" />
                <h2 className="text-xl font-bold text-gray-900">Éditeur du site</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 space-y-1.5">
                <p className="text-gray-700 text-sm">
                  <strong>Raison sociale :</strong> AFLORA
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Activité :</strong> Photographe professionnel
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Localisation :</strong> Kinshasa, République Démocratique du Congo
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Email :</strong> contact@aflora-photo.com
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Téléphone :</strong> +243 833 055 164
                </p>
              </div>
            </motion.div>

            {/* Directeur de publication */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3">Directeur de publication</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Le directeur de publication est le propriétaire du site AFLORA, photographe professionnel 
                basé à Kinshasa, RDC.
              </p>
            </motion.div>

            {/* Hébergement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3">Hébergement</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ce site est hébergé par un prestataire d'hébergement web. Les informations d'hébergement 
                seront mises à jour lors du déploiement en production.
              </p>
            </motion.div>

            {/* Propriété intellectuelle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3">Propriété intellectuelle</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                L'ensemble de ce site relève de la législation congolaise et internationale sur le droit 
                d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris 
                pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </motion.div>

            {/* Protection des données */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-aflora-gold text-xl" />
                <h2 className="text-xl font-bold text-gray-900">Protection des données personnelles</h2>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification, 
                de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Pour exercer ce droit, vous pouvez nous contacter à l'adresse email : contact@aflora-photo.com
              </p>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. En continuant à 
                naviguer sur ce site, vous acceptez l'utilisation de cookies.
              </p>
            </motion.div>

            {/* Responsabilité */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mb-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3">Limitation de responsabilité</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement 
                remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                AFLORA ne pourra être tenu responsable des dommages directs et indirects causés au matériel de 
                l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant 
                pas aux spécifications, soit de l'apparition d'un bug ou d'une incompatibilité.
              </p>
            </motion.div>

            {/* Droit applicable */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mb-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3">Droit applicable</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Les présentes mentions légales sont régies par le droit congolais. En cas de litige et à défaut 
                d'accord amiable, le litige sera porté devant les tribunaux compétents de Kinshasa, RDC.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="bg-gray-50 rounded-lg p-4"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
                <li>Email : contact@aflora-photo.com</li>
                <li>Téléphone : +243 833 055 164</li>
                <li>Adresse : Kinshasa, République Démocratique du Congo</li>
              </ul>
            </motion.div>

            {/* Date de mise à jour */}
            <div className="mt-6 pt-4 border-t border-gray-200 text-center text-xs text-gray-500">
              <p>Dernière mise à jour : {currentYear}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Legal

