import { motion } from 'framer-motion'
import { FaCamera, FaAward, FaHeart, FaCheckCircle, FaUser, FaLightbulb, FaTools, FaStar, FaPalette, FaEye, FaMagic, FaImage, FaRocket, FaCompass, FaMountain, FaBook } from 'react-icons/fa'
import DomeGallery from '../components/DomeGallery'

const About = () => {
  const values = [
    {
      icon: <FaHeart className="text-3xl" />,
      title: 'Passion',
      description: 'Une passion authentique pour capturer l\'émotion et l\'authenticité de chaque moment.',
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: 'Excellence',
      description: 'Un engagement constant pour offrir des résultats de la plus haute qualité.',
    },
    {
      icon: <FaUser className="text-3xl" />,
      title: 'Proximité',
      description: 'Une approche personnalisée et à l\'écoute de chaque client et projet.',
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: 'Professionnalisme',
      description: 'Respect des délais, discrétion et service irréprochable.',
    },
  ]

  const equipment = [
    { name: 'Appareils photo professionnels', detail: 'Canon EOS R5, Sony A7R IV' },
    { name: 'Objectifs haute performance', detail: 'Gamme complète 14mm à 200mm' },
    { name: 'Éclairage professionnel', detail: 'Flashs studio et éclairage continu' },
    { name: 'Accessoires premium', detail: 'Trépieds, filtres, réflecteurs' },
    { name: 'Post-production', detail: 'Logiciels professionnels Adobe' },
  ]

  const philosophy = [
    {
      icon: <FaEye className="text-2xl" />,
      title: 'Voir l\'invisible',
      description: 'Capturer l\'émotion pure, l\'authenticité des instants qui passent trop vite. Chaque cliché révèle une histoire unique, une vérité que seul l\'œil du photographe peut percevoir.',
    },
    {
      icon: <FaPalette className="text-2xl" />,
      title: 'L\'art de la lumière',
      description: 'La lumière est notre pinceau, l\'appareil notre toile. Nous sculptons chaque image avec une attention méticuleuse aux nuances, aux contrastes et à l\'harmonie des couleurs.',
    },
    {
      icon: <FaHeart className="text-2xl" />,
      title: 'L\'émotion avant tout',
      description: 'Au-delà de la technique, c\'est l\'émotion qui guide notre objectif. Nous cherchons à immortaliser les sentiments, les regards, les sourires qui racontent une histoire.',
    },
    {
      icon: <FaMagic className="text-2xl" />,
      title: 'Créativité sans limite',
      description: 'Chaque projet est une nouvelle aventure créative. Nous osons, innovons et explorons de nouvelles perspectives pour offrir des images qui sortent de l\'ordinaire.',
    },
  ]

  return (
    <div>
      {/* Hero Section avec Image de Fond */}
      <section className="relative min-h-[22vh] md:min-h-[26vh] flex items-center justify-center overflow-hidden mt-16 md:mt-20">
        {/* Image de Fond */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1499343245400-cddc78a01317?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="AFLORA Photographe"
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
              <FaUser className="mx-auto text-aflora-gold text-xl md:text-2xl mb-1 drop-shadow-lg" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 drop-shadow-lg"
            >
              À Propos d'AFLORA
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
              Découvrez l'histoire, la passion et l'expertise derrière chaque cliché
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Histoire et Parcours */}
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Histoire et Parcours
            </h2>
            <div className="w-12 h-0.5 bg-aflora-gold mx-auto mb-3"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-3 text-sm text-gray-700 leading-relaxed"
          >
            <p>
              AFLORA est né d'une passion profonde pour la photographie et d'un désir de capturer 
              l'authenticité des moments précieux. Depuis plus de 3 ans, nous avons eu le privilège 
              de documenter des centaines d'événements, de mariages, de portraits et de shootings 
              produits à Kinshasa et dans toute la RDC.
            </p>
            <p>
              Notre parcours a commencé par une formation approfondie en photographie professionnelle, 
              suivie de nombreuses années d'expérience sur le terrain. Chaque projet nous a permis 
              d'affiner notre technique, notre sens artistique et notre approche client.
            </p>
            <p>
              Aujourd'hui, AFLORA est reconnu comme l'un des photographes les plus fiables et créatifs 
              de Kinshasa, avec une réputation bâtie sur l'excellence, la discrétion et la satisfaction 
              client.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision et Valeurs */}
      <section className="py-6 md:py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaLightbulb className="text-aflora-gold text-2xl" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Vision et Valeurs
              </h2>
            </div>
            <div className="w-12 h-0.5 bg-aflora-gold mx-auto mb-3"></div>
            <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-aflora-gold mb-3 flex justify-center text-2xl">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                  {value.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Matériel Professionnel */}
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaTools className="text-aflora-gold text-2xl" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Matériel Professionnel
              </h2>
            </div>
            <div className="w-12 h-0.5 bg-aflora-gold mx-auto mb-3"></div>
            <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto">
              Un équipement de pointe pour des résultats exceptionnels
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-50 rounded-lg p-4 space-y-3"
          >
            {equipment.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-aflora-gold mt-0.5 flex-shrink-0 text-sm" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-xs">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dome Gallery - AFLORA en Action */}
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              AFLORA en Action
            </h2>
            <div className="w-12 h-0.5 bg-aflora-gold mx-auto mb-3"></div>
            <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques moments de notre travail sur le terrain
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full h-[700px] md:h-[850px]"
          >
            <DomeGallery
              images={[
                { src: 'https://images.unsplash.com/photo-1499343245400-cddc78a01317?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'AFLORA en action 1' },
                { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'AFLORA en action 2' },
                { src: 'https://images.unsplash.com/flagged/photo-1620830102229-9db5c00d4afc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'AFLORA en action 3' },
                { src: 'https://images.unsplash.com/photo-1606216836537-eea72a939072?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'AFLORA en action 4' },
                { src: 'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'AFLORA en action 5' },
                { src: 'https://images.unsplash.com/photo-1676293998542-9badf2e46771?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'AFLORA en action 6' },
                { src: 'https://images.unsplash.com/photo-1677189633363-8cba769ed0b2?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'AFLORA en action 7' },
                { src: 'https://images.unsplash.com/photo-1612052854445-281e6f42a84c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'AFLORA en action 8' },
                { src: 'https://images.unsplash.com/photo-1676647018688-20694b356fd5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'AFLORA en action 9' },
                { src: 'https://images.unsplash.com/photo-1729006122953-e3cafd3dd875?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'AFLORA en action 10' },
                { src: 'https://images.unsplash.com/photo-1728300129406-b851459a4436?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'AFLORA en action 11' },
                { src: 'https://plus.unsplash.com/premium_photo-1670275658563-450157cc6e34?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'AFLORA en action 12' },
                { src: 'https://images.unsplash.com/photo-1729021284657-5c4bc6d5d566?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'AFLORA en action 13' },
                { src: 'https://images.unsplash.com/photo-1728300129468-27018379d1ec?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'AFLORA en action 14' },
                { src: 'https://images.unsplash.com/photo-1617720356637-6264c1c0b4bb?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'AFLORA en action 15' },
              ]}
              fit={0.55}
              minRadius={500}
              maxRadius={1000}
              grayscale={false}
              overlayBlurColor="#ffffff"
              imageBorderRadius="12px"
              openedImageBorderRadius="20px"
            />
          </motion.div>
        </div>
      </section>

      {/* Philosophie Photographique */}
      <section className="py-4 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaImage className="text-aflora-gold text-xl" />
              <h2 className="text-lg md:text-xl font-bold text-gray-900">
                Philosophie Photographique
              </h2>
            </div>
            <div className="w-12 h-0.5 bg-aflora-gold mx-auto mb-2"></div>
            <p className="text-xs text-gray-600 max-w-3xl mx-auto">
              Notre vision artistique et notre approche créative
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto mb-4"
          >
            <p className="text-xs text-gray-700 leading-relaxed text-center italic">
              "La photographie n'est pas seulement une technique, c'est un art de voir, de ressentir et de transmettre. 
              Chaque image que nous créons porte en elle une part de notre vision du monde, une sensibilité unique 
              qui transforme un simple instant en œuvre mémorable."
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {philosophy.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-3 border border-gray-200 hover:shadow-md transition-all duration-300 hover:border-aflora-gold/30"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-aflora-gold/10 to-aflora-gold/5 flex items-center justify-center">
                    <div className="text-aflora-gold text-lg">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Inspirations et Vision Future */}
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {/* Inspirations */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-aflora-gold/20 to-aflora-gold/10 flex items-center justify-center">
                  <FaCompass className="text-aflora-gold text-lg" />
                </div>
                <h3 className="text-base font-bold text-gray-900">
                  Nos Inspirations
                </h3>
              </div>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-start gap-2">
                  <FaMountain className="text-aflora-gold mt-0.5 flex-shrink-0" />
                  <p>La beauté de la nature et les paysages de la RDC</p>
                </div>
                <div className="flex items-start gap-2">
                  <FaHeart className="text-aflora-gold mt-0.5 flex-shrink-0" />
                  <p>L'authenticité des moments humains et des émotions pures</p>
                </div>
                <div className="flex items-start gap-2">
                  <FaBook className="text-aflora-gold mt-0.5 flex-shrink-0" />
                  <p>L'héritage culturel et les traditions de Kinshasa</p>
                </div>
                <div className="flex items-start gap-2">
                  <FaPalette className="text-aflora-gold mt-0.5 flex-shrink-0" />
                  <p>Les grands maîtres de la photographie et de l'art visuel</p>
                </div>
              </div>
            </motion.div>

            {/* Vision Future */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-aflora-gold/20 to-aflora-gold/10 flex items-center justify-center">
                  <FaRocket className="text-aflora-gold text-lg" />
                </div>
                <h3 className="text-base font-bold text-gray-900">
                  Vision Future
                </h3>
              </div>
              <div className="space-y-2 text-xs text-gray-600">
                <p className="leading-relaxed">
                  Continuer à élever l'art photographique en RDC en formant une nouvelle génération 
                  de photographes passionnés et en explorant des techniques innovantes.
                </p>
                <p className="leading-relaxed">
                  Élargir notre présence à travers l'Afrique centrale tout en conservant notre 
                  approche personnalisée et notre engagement envers l'excellence.
                </p>
                <p className="leading-relaxed">
                  Créer des projets artistiques collaboratifs qui mettent en valeur la richesse 
                  culturelle et la beauté de notre région.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

