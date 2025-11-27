import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = '243833055164'
    const message = encodeURIComponent('Bonjour, je souhaite obtenir un devis pour une séance photo.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all transform hover:scale-110 animate-pulse hover:animate-none"
      aria-label="Contacter sur WhatsApp"
    >
      <FaWhatsapp size={28} />
    </button>
  )
}

export default WhatsAppButton

