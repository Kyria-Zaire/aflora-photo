import { useState } from 'react'

const Portfolio = ({ onImageClick }) => {
  const [activeCategory, setActiveCategory] = useState('tous')

  const categories = [
    { id: 'tous', label: 'Tous' },
    { id: 'mariages', label: 'Mariages' },
    { id: 'evenements', label: 'Événements' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'produits', label: 'Produits' },
  ]

  // Images placeholder - À remplacer par les vraies photos
  const generatePlaceholderImages = (count, category) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `${category}-${i + 1}`,
      src: `https://picsum.photos/seed/${category}-${i}/800/600`,
      alt: `${category} ${i + 1}`,
      category: category,
    }))
  }

  const allImages = [
    ...generatePlaceholderImages(6, 'mariages'),
    ...generatePlaceholderImages(6, 'evenements'),
    ...generatePlaceholderImages(6, 'portraits'),
    ...generatePlaceholderImages(6, 'produits'),
  ]

  const filteredImages =
    activeCategory === 'tous'
      ? allImages
      : allImages.filter((img) => img.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-aflora-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez une sélection de nos réalisations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-aflora-gold text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
              onClick={() => onImageClick(image.src)}
            >
              <div className="aspect-[4/3] bg-gray-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

