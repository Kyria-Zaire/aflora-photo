import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
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
    {
      name: 'David T.',
      role: 'Portrait professionnel',
      image: 'https://i.pravatar.cc/150?img=4',
      rating: 5,
      text: 'Séance photo professionnelle au top ! Résultat au-delà de mes attentes. Très professionnel et à l\'écoute.',
    },
  ]

  return (
    <section id="temoignages" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Témoignages Clients
          </h2>
          <div className="w-24 h-1 bg-aflora-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ce que nos clients disent de nous
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-aflora-gold text-sm"
                  />
                ))}
              </div>

              <div className="relative">
                <FaQuoteLeft className="text-aflora-gold text-2xl mb-2 opacity-50" />
                <p className="text-gray-700 italic leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

