import { motion } from 'framer-motion'
import { FaLock, FaUserShield, FaDatabase, FaEye, FaShieldAlt } from 'react-icons/fa'

const Privacy = () => {
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
            <FaShieldAlt className="mx-auto text-aflora-gold text-3xl md:text-4xl mb-3" />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              Politique de Confidentialité
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
              Protection et traitement de vos données personnelles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                AFLORA s'engage à protéger votre vie privée et vos données personnelles. Cette politique 
                de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos 
                informations personnelles lorsque vous utilisez notre site web.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                En utilisant ce site, vous acceptez les pratiques décrites dans cette politique de confidentialité.
              </p>
            </motion.div>

            {/* Données collectées */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <FaDatabase className="text-aflora-gold text-xl" />
                <h2 className="text-xl font-bold text-gray-900">Données collectées</h2>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Nous collectons les informations suivantes lorsque vous utilisez notre site ou nos services :
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 mb-3">
                <li><strong>Informations de contact :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                <li><strong>Informations de commande :</strong> type de service demandé, date souhaitée, message</li>
                <li><strong>Données techniques :</strong> adresse IP, type de navigateur, pages visitées</li>
                <li><strong>Cookies :</strong> données de navigation pour améliorer l'expérience utilisateur</li>
              </ul>
            </motion.div>

            {/* Utilisation des données */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <FaEye className="text-aflora-gold text-xl" />
                <h2 className="text-xl font-bold text-gray-900">Utilisation des données</h2>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Nous utilisons vos données personnelles pour les finalités suivantes :
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
                <li>Répondre à vos demandes de contact et de devis</li>
                <li>Fournir nos services de photographie</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Vous envoyer des communications importantes concernant nos services</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </motion.div>

            {/* Protection des données */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <FaLock className="text-aflora-gold text-xl" />
                <h2 className="text-xl font-bold text-gray-900">Protection des données</h2>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour 
                protéger vos données personnelles contre tout accès non autorisé, perte, destruction ou altération.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                <p className="text-gray-700"><strong>Mesures de sécurité :</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Chiffrement des données sensibles</li>
                  <li>Accès restreint aux données personnelles</li>
                  <li>Sauvegardes régulières</li>
                  <li>Mise à jour régulière des systèmes de sécurité</li>
                </ul>
              </div>
            </motion.div>

            {/* Partage des données */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaUserShield className="text-aflora-gold text-2xl" />
                <h2 className="text-2xl font-bold text-gray-900">Partage des données</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, sauf dans 
                les cas suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Avec votre consentement explicite</li>
                <li>Pour répondre à une obligation légale ou réglementaire</li>
                <li>Avec nos prestataires de services (hébergement, email) sous contrat de confidentialité</li>
                <li>En cas de fusion, acquisition ou cession d'actifs</li>
              </ul>
            </motion.div>

            {/* Conservation des données */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conservation des données</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités 
                pour lesquelles elles ont été collectées, ou conformément aux obligations légales applicables. 
                Les données de contact sont conservées pendant 3 ans à compter du dernier contact.
              </p>
            </motion.div>

            {/* Vos droits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vos droits</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément à la réglementation en vigueur, vous disposez des droits suivants concernant vos 
                données personnelles :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Droit d'accès :</strong> Vous pouvez demander l'accès à vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
                <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Vous pouvez demander la récupération de vos données</li>
                <li><strong>Droit de limitation :</strong> Vous pouvez demander la limitation du traitement</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à : <strong>contact@aflora-photo.com</strong>
              </p>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont 
                de petits fichiers texte stockés sur votre appareil.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines 
                fonctionnalités du site.
              </p>
            </motion.div>

            {/* Modifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications de la politique</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications seront publiées sur cette page avec une date de mise à jour. Nous vous 
                encourageons à consulter régulièrement cette page.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                contactez-nous :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Email : contact@aflora-photo.com</li>
                <li>Téléphone : +243 833 055 164</li>
                <li>Adresse : Kinshasa, République Démocratique du Congo</li>
              </ul>
            </motion.div>

            {/* Date de mise à jour */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
              <p>Dernière mise à jour : {currentYear}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy

