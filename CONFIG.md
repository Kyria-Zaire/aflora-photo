# Configuration du Site AFLORA

## 📝 Variables à Personnaliser

### 1. Numéro WhatsApp
Dans les fichiers suivants, remplacez `243900000000` par le vrai numéro WhatsApp :
- `src/components/Hero.jsx` (ligne ~6)
- `src/components/Contact.jsx` (lignes ~45, ~67)
- `src/components/WhatsAppButton.jsx` (ligne ~4)
- `src/components/Footer.jsx` (ligne ~28)

Format attendu : `243XXXXXXXXX` (sans le +)

### 2. Email de Contact
Remplacez `contact@aflora-photo.com` dans :
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

### 3. Images Portfolio
Les images placeholder dans `src/components/Portfolio.jsx` utilisent Picsum Photos.
Remplacez-les par vos vraies photos dans le tableau `allImages`.

### 4. Témoignages
Personnalisez les témoignages dans `src/components/Testimonials.jsx` avec de vrais avis clients.

### 5. Contenu À Propos
Adaptez le texte dans `src/components/About.jsx` avec l'histoire réelle d'AFLORA.

### 6. Réseaux Sociaux
Mettez à jour les liens dans `src/components/Footer.jsx` avec les vrais profils sociaux.

## 🎨 Personnalisation Design

### Couleurs
Modifiez les couleurs dans `tailwind.config.js` :
- `aflora-gold` : Couleur principale (actuellement #D4AF37)
- `aflora-dark` : Couleur sombre (actuellement #1a1a1a)

### Typographie
La police Inter est chargée dans `index.html`. Vous pouvez la changer si besoin.

## 🚀 Déploiement

### Vercel / Netlify
1. Connectez votre repository GitHub
2. Configurez le build : `npm run build`
3. Le dossier de sortie est `dist`

### Autres plateformes
Le projet génère des fichiers statiques dans `dist/` après `npm run build`.

