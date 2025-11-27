import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import Legal from './pages/Legal'
import Privacy from './pages/Privacy'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/politique-confidentialite" element={<Privacy />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
